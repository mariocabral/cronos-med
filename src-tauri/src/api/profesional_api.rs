use crate::{models::profesional_model::Profesional, repository::profesional_repository};
use rocket::{http::Status, serde::json::Json, get, post};
use mongodb::{error::Error, error::ErrorKind};


fn error_status(error: Error) -> Status {
    match *error.kind {
        ErrorKind::Command(_detailed) => Status::NotFound,
        _ => Status::InternalServerError,
    }
}

#[get("/profesional")]
pub async fn all(connection: &super::rocker_launcher::MongoDatabase) -> Result<Json<Vec<Profesional>>, Status> {
    match profesional_repository::all(connection).await {
        Ok(res) => Ok(Json(res)),
        Err(err) => {
            println!("Error: {}", err.kind);
            Err(error_status(err))
        },
    }
}


#[post("/profesional", format = "application/json", data = "<profesional>")]
pub async fn post(profesional: Json<Profesional>, connection: &super::rocker_launcher::MongoDatabase) -> Result<Json<Profesional>, Status> {
    match profesional_repository::insert(profesional.into_inner(), &connection).await {
        Ok(res) => Ok(Json(res)),
        Err(err) => Err(error_status(err)),
    }
}

