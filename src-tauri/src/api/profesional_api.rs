use crate::{models::profesional_model::Profesional, repository::profesional_repository};
use rocket::{http::Status, serde::json::Json, serde::json::to_string, get, post, put, delete, log::info_};
use mongodb::{error::Error, error::ErrorKind};


fn error_status(error: Error) -> Status {
    match *error.kind {
        ErrorKind::Command(_detailed) => Status::NotFound,
        _ => Status::InternalServerError,
    }
}

#[get("/profesional?<search>")]
pub async fn all(search: Option<String>, connection: &super::rocker_launcher::MongoDatabase) -> Result<Json<Vec<Profesional>>, Status> {
    match profesional_repository::all(search, connection).await {
        Ok(res) => Ok(Json(res)),
        Err(err) => {
            println!("Error: {}", err.kind);
            Err(error_status(err))
        },
    }
}

#[get("/profesional/<id>")]
pub async fn get_by_id(id: String, connection: &super::rocker_launcher::MongoDatabase) -> Result<Json<Profesional>, Status> {
    match profesional_repository::get(id, &connection).await {
            Ok(res) => Ok(Json(res.unwrap())),
            Err(err) => Err(error_status(err)),
        }
}

#[post("/profesional", format = "application/json", data = "<profesional>")]
pub async fn post(profesional: Json<Profesional>, connection: &super::rocker_launcher::MongoDatabase) -> Result<Json<Profesional>, Status> {
    match profesional_repository::insert(profesional.into_inner(), &connection).await {
        Ok(res) => Ok(Json(res)),
        Err(err) => Err(error_status(err)),
    }
}


#[put("/profesional/<id>", format = "application/json", data = "<profesional>")]
pub async fn put(id: String, profesional: Json<Profesional>, connection: &super::rocker_launcher::MongoDatabase) -> Result<Json<Profesional>, Status> {
    info_!("[PUT] update profesional {} with {}", id, to_string(&(profesional.0)).unwrap());
    match profesional_repository::update(id, profesional.into_inner(), &connection).await {
            Ok(res) => Ok(Json(res)),
            Err(err) => Err(error_status(err)),
        }
}

#[delete("/profesional/<id>")]
pub async fn delete(id: String, connection: &super::rocker_launcher::MongoDatabase) -> Result<String, Status> {
    match profesional_repository::delete(id, &connection).await {
            Ok(_) => Ok(String::from("")),
            Err(err) => Err(error_status(err)),
        }
}