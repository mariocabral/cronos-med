extern crate rocket;
extern crate dotenv;
extern crate rocket_cors;
use rocket::{Request, Rocket, catch, catchers, routes, Build};
use crate::repository::mongodb_config;
use crate::api::{profesional_api, room_api};
use rocket_db_pools::{mongodb, Database};
use rocket_cors::{
    AllowedHeaders, AllowedOrigins,
    Cors, CorsOptions 
};
use rocket::http::Method;
use rocket::fairing::{self, AdHoc};
use crate::repository::profesional_repository;
use crate::repository::room_repository;
use mongodb::bson::doc; 
use rocket::log::info_;

#[derive(Database)]
#[database("cronos-db")]
pub struct MongoDatabase(mongodb::Client);

async fn run_init_mongo_collections(rocket: Rocket<Build>) -> fairing::Result {
    if let Some(_db) = MongoDatabase::fetch(&rocket) {
        let connection = &_db;
        info_!("Init index of Professional Collection");
        profesional_repository::init_indexs(connection).await;
        info_!("Init index of Room Collection");
        room_repository::init_indexs(connection).await;
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
                    profesional_api::delete,
                    room_api::all,
                    room_api::get_by_id,
                    room_api::post,
                    room_api::put,
                    room_api::delete,]
        )
        .attach(make_cors())
}
