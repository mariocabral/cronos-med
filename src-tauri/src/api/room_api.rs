use crate::{models::room_model::Room, repository::room_repository};
use rocket::{http::Status, serde::json::Json, serde::json::to_string, get, post, put, delete, log::info_};
use mongodb::{error::Error, error::ErrorKind};


fn error_status(error: Error) -> Status {
    match *error.kind {
        ErrorKind::Command(_detailed) => Status::NotFound,
        _ => Status::InternalServerError,
    }
}

#[get("/room")]
pub async fn all(connection: &super::rocker_launcher::MongoDatabase) -> Result<Json<Vec<Room>>, Status> {
    match room_repository::all(connection).await {
        Ok(res) => Ok(Json(res)),
        Err(err) => {
            println!("Error: {}", err.kind);
            Err(error_status(err))
        },
    }
}

#[get("/room/<id>")]
pub async fn get_by_id(id: String, connection: &super::rocker_launcher::MongoDatabase) -> Result<Json<Room>, Status> {
    match room_repository::get(id, &connection).await {
            Ok(res) => Ok(Json(res.unwrap())),
            Err(err) => Err(error_status(err)),
        }
}

#[post("/room", format = "application/json", data = "<room>")]
pub async fn post(room: Json<Room>, connection: &super::rocker_launcher::MongoDatabase) -> Result<Json<Room>, Status> {
    match room_repository::insert(room.into_inner(), &connection).await {
        Ok(res) => Ok(Json(res)),
        Err(err) => Err(error_status(err)),
    }
}


#[put("/room/<id>", format = "application/json", data = "<room>")]
pub async fn put(id: String, room: Json<Room>, connection: &super::rocker_launcher::MongoDatabase) -> Result<Json<Room>, Status> {
    info_!("[PUT] update room {} with {}", id, to_string(&(room.0)).unwrap());
    match room_repository::update(id, room.into_inner(), &connection).await {
            Ok(res) => Ok(Json(res)),
            Err(err) => Err(error_status(err)),
        }
}

#[delete("/room/<id>")]
pub async fn delete(id: String, connection: &super::rocker_launcher::MongoDatabase) -> Result<String, Status> {
    match room_repository::delete(id, &connection).await {
            Ok(_) => Ok(String::from("")),
            Err(err) => Err(error_status(err)),
        }
}