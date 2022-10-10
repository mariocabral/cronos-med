extern crate rocket;
extern crate dotenv;
use rocket::http::Header;
use rocket::{Request, Response, Rocket, catch, catchers, routes, Build};
use rocket::fairing::{Fairing, Info, Kind};
use crate::repository::mongodb_config;
use crate::api::profesional_api;
use rocket_db_pools::{mongodb, Database};

#[derive(Database)]
#[database("cronos-db")]
pub struct MongoDatabase(mongodb::Client);

#[catch(500)]
fn internal_error() -> &'static str {
    "Whoops! Looks like we messed up."
}

#[catch(400)]
fn not_found(req: &Request) -> String {
    format!("I couldn't find '{}'. Try something else?", req.uri())
}

pub struct CORS;

#[rocket::async_trait]
impl Fairing for CORS {
    fn info(&self) -> Info {
        Info {
            name: "Add CORS headers to responses",
            kind: Kind::Response
        }
    }

    async fn on_response<'r>(&self, _request: &'r Request<'_>, response: &mut Response<'r>) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new("Access-Control-Allow-Methods", "POST, GET, PATCH, OPTIONS"));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}

pub fn rocket() -> Rocket<Build> {
    let figment = rocket::Config::figment()
        .merge(("databases.cronos-db", mongodb_config::get_config()));

    rocket::custom(figment)
        .attach(MongoDatabase::init())
        .register("/", catchers![internal_error, not_found])
        .mount(
            "/",
            routes![profesional_api::all,
                    profesional_api::get_by_id,
                    profesional_api::post,
                    profesional_api::put,
                    profesional_api::delete,]
        )
        .attach(CORS)
}
