use crate::models::profesional_model::Profesional;
use mongodb::{error::Result, bson::{oid::ObjectId, doc}, results::DeleteResult}; 
use super::super::api::rocker_launcher::MongoDatabase;
use crate::repository::mongodb_config::get_db_name;

const COLLECTION: &str = "profesionals";

pub async fn all(connection: &MongoDatabase) -> Result<Vec<Profesional>> {
    let database = connection.database(&get_db_name());
    let mut cursor: mongodb::Cursor<Profesional> = database.collection::<Profesional>(COLLECTION).find(None, None).await?;
    let mut result = Vec::new();
    while cursor.advance().await? {
        result.push(cursor.deserialize_current()?)
    }
    Ok(result)
}

pub async fn get(id: ObjectId, connection: &MongoDatabase) -> Result<Option<Profesional>> {
    let database = connection.database(&get_db_name());
    let collection = database.collection::<Profesional>(COLLECTION);
    match collection.find_one(Some(doc! {"_id": id}), None).await {
        Ok(profesional_data) => {
            Ok(profesional_data)
        },
        Err(err) => Err(err)
    }
}

pub async fn insert(profesional: Profesional, connection: &MongoDatabase) -> Result<Profesional> {
    let mut new_profesional = profesional.clone();
    let database = connection.database(&get_db_name());
    let collection = database.collection::<Profesional>(COLLECTION);
    match collection.insert_one(profesional, None).await {
        Ok(id) => {
            let object_id = id.inserted_id.as_object_id().clone();
            new_profesional.id = object_id.clone();
            Ok(new_profesional)
        },
        Err(err) => Err(err)
    }
}

pub async fn update(id: ObjectId, profesional: Profesional, connection: &MongoDatabase) -> Result<Profesional> {
    let mut updated_profesional = profesional.clone();
    updated_profesional.id = Some(id.clone());
    let database = connection.database(&get_db_name());
    let collection = database.collection::<Profesional>(COLLECTION);
    match collection.replace_one(doc! {"_id": id}, profesional, None).await {
        Ok(_) => {
            Ok(updated_profesional)
        },
        Err(err) => Err(err)
    }
}


pub async fn delete(id: ObjectId, connection: &MongoDatabase) -> Result<DeleteResult> {
    let database = connection.database(&get_db_name());
    let collection = database.collection::<Profesional>(COLLECTION);
    match collection.delete_one(doc! {"_id": id}, None).await {
        Ok(result) => {
            Ok(result)
        },
        Err(err) => Err(err)
    }
}
