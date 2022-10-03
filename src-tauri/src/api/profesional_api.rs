use std::str::FromStr;

use crate::{models::profesional_model::Profesional, repository::profesional_repository};
use rocket::{http::Status, serde::json::Json, get, post, put, delete};
use mongodb::{error::Error, error::ErrorKind, bson::oid::ObjectId};


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

#[get("/profesional/<id>")]
pub async fn get_by_id(id: String, connection: &super::rocker_launcher::MongoDatabase) -> Result<Json<Profesional>, Status> {
    match ObjectId::from_str(&String::from(&id)) {
        Ok(object_id) => match profesional_repository::get(object_id, &connection).await {
            Ok(res) => Ok(Json(res.unwrap())),
            Err(err) => Err(error_status(err)),
        }
        Err(_) => Err(Status::BadRequest)
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
    match ObjectId::from_str(&String::from(&id)) {
        Ok(object_id) => match profesional_repository::update(object_id, profesional.into_inner(), &connection).await {
            Ok(res) => Ok(Json(res)),
            Err(err) => Err(error_status(err)),
        }
        Err(_) => Err(Status::BadRequest)
    }
}

#[delete("/profesional/<id>")]
pub async fn delete(id: String, connection: &super::rocker_launcher::MongoDatabase) -> Result<Json<String>, Status> {
    match ObjectId::from_str(&String::from(&id)) {
        Ok(object_id) => match profesional_repository::delete(object_id, &connection).await {
            Ok(_) => Ok(Json(id)),
            Err(err) => Err(error_status(err)),
        }
        Err(_) => Err(Status::BadRequest)
    }
}