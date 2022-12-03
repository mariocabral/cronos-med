extern crate rocket;
extern crate dotenv;
extern crate rocket_cors;
use rocket::{Request, Rocket, catch, catchers, routes, Build};
use crate::repository::mongodb_config;
use crate::api::profesional_api;
use rocket_db_pools::{mongodb, Database};
use rocket_cors::{
    AllowedHeaders, AllowedOrigins,
    Cors, CorsOptions 
};
use rocket::http::Method;
use rocket::fairing::{self, AdHoc};
use crate::repository::profesional_repository::{PROFESIONAL_COLLECTION, PROFESIONAL_SEARCH_INDEX};
use crate::models::profesional_model::Profesional;
use rocket::log::info_;
use mongodb::bson::doc; 
use mongodb::IndexModel; 

#[derive(Database)]
#[database("cronos-db")]
pub struct MongoDatabase(mongodb::Client);

async fn run_init_mongo_collections(rocket: Rocket<Build>) -> fairing::Result {
    if let Some(_db) = MongoDatabase::fetch(&rocket) {
        // run migrations using `db`. get the inner type with &db.0.
        let database = &_db.0.database(&mongodb_config::get_db_name());
        let profesional_collection = database.collection::<Profesional>(PROFESIONAL_COLLECTION);
        match profesional_collection.list_index_names().await{
            Ok(result) => {
                result.iter().for_each(|i| info_!("[{}]Index found {}", PROFESIONAL_COLLECTION, i));
                if result.iter().any(|i| i==PROFESIONAL_SEARCH_INDEX) {
                    info_!("The index {} already exist.", PROFESIONAL_SEARCH_INDEX);
                } else {
                    info_!("The index {} must be created.", PROFESIONAL_SEARCH_INDEX);
                    let model = IndexModel::builder()
                                .keys(doc! {"$**": "text"})
                                .options(None)
                                .build();
                    match profesional_collection.create_index(model, None).await {
                        Ok(_) => {},
                        Err(_) => {}
                    }
                }
            },
            Err(_err) => {
                info_!("Fail init mongodb");
            }
        } 
        Ok(rocket)
    } else {
        Err(rocket)
    }
}

#[catch(500)]
fn internal_error() -> &'static str {
    "Whoops! Looks like we messed up."
}

#[catch(400)]
fn not_found(req: &Request) -> String {
    format!("I couldn't find '{}'. Try something else?", req.uri())
}

fn make_cors() -> Cors {
    let allowed_origins = AllowedOrigins::all();
    CorsOptions { 
        allowed_origins,
        allowed_methods: vec![Method::Get, Method::Post, Method::Put, Method::Delete].into_iter().map(From::from).collect(), 
        allowed_headers: AllowedHeaders::all(),
        allow_credentials: true,
        ..Default::default()
    }
    .to_cors()
    .expect("error while building CORS")
}

pub fn rocket() -> Rocket<Build> {
    let figment = rocket::Config::figment()
        .merge(("databases.cronos-db", mongodb_config::get_config()));

    rocket::custom(figment)
        .attach(MongoDatabase::init())
        .attach(AdHoc::try_on_ignite("DB Initialization", run_init_mongo_collections))
        .register("/", catchers![internal_error, not_found])
        .mount(
            "/",
            routes![profesional_api::all,
                    profesional_api::get_by_id,
                    profesional_api::post,
                    profesional_api::put,
                    profesional_api::delete,]
        )
        .attach(make_cors())
}
