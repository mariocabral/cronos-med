use crate::models::profesional_model::Profesional;
use mongodb::{error::Result, bson::doc, results::DeleteResult}; 
use super::super::api::rocker_launcher::MongoDatabase;
use crate::repository::mongodb_config::get_db_name;
use uuid::Uuid;
use rocket::log::info_;


pub const PROFESIONAL_COLLECTION: &str = "profesionals";
pub const PROFESIONAL_SEARCH_INDEX: &str = "$**_\"text\"";


pub async fn all(search: Option<String>, connection: &MongoDatabase) -> Result<Vec<Profesional>> {
    let database = connection.database(&get_db_name());
    let filter = search.map_or_else(
                                        || None, 
                                        |s| Some (doc! { "$text": { "$search": s } })
                                    );
    let mut cursor: mongodb::Cursor<Profesional> = database.collection::<Profesional>(PROFESIONAL_COLLECTION)
                                                        .find(filter, None).await?;
    let mut result = Vec::new();
    while cursor.advance().await? {
        result.push(cursor.deserialize_current()?)
    }
    Ok(result)
}

pub async fn get(id: String, connection: &MongoDatabase) -> Result<Option<Profesional>> {
    let database = connection.database(&get_db_name());
    let collection = database.collection::<Profesional>(PROFESIONAL_COLLECTION);
    match collection.find_one(Some(doc! {"profesionalId": id}), None).await {
        Ok(profesional_data) => {
            Ok(profesional_data)
        },
        Err(err) => Err(err)
    }
}

pub async fn insert(profesional: Profesional, connection: &MongoDatabase) -> Result<Profesional> {
    let mut new_profesional = profesional.clone();
    let profesional_uuid = Uuid::new_v4().to_string();
    new_profesional.profesional_id = Some(profesional_uuid.clone());
    let database = connection.database(&get_db_name());
    let collection = database.collection::<Profesional>(PROFESIONAL_COLLECTION);
    match collection.insert_one(new_profesional, None).await {
        Ok(id) => {
            let object_id = id.inserted_id.as_object_id().clone();
            let mut saved_profesional = profesional.clone();
            saved_profesional.profesional_id = Some(profesional_uuid.clone());
            saved_profesional.id = object_id.clone();
            Ok(saved_profesional)
        },
        Err(err) => Err(err)
    }
}

pub async fn update(id: String, profesional: Profesional, connection: &MongoDatabase) -> Result<Profesional> {
    let updated_profesional = profesional.clone();
    let database = connection.database(&get_db_name());
    let collection = database.collection::<Profesional>(PROFESIONAL_COLLECTION);
    match collection.replace_one(doc! {"profesionalId": id}, profesional, None).await {
        Ok(update_result) => {
            info_!("[PUT] update profesional modified count {}", update_result.modified_count);
            Ok(updated_profesional)
        },
        Err(err) => Err(err)
    }
}


pub async fn delete(id: String, connection: &MongoDatabase) -> Result<DeleteResult> {
    let database = connection.database(&get_db_name());
    let collection = database.collection::<Profesional>(PROFESIONAL_COLLECTION);
    match collection.delete_one(doc! {"profesionalId": id}, None).await {
        Ok(result) => {
            Ok(result)
        },
        Err(err) => Err(err)
    }
}
