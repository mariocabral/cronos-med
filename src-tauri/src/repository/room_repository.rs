use crate::models::room_model::Room;
use mongodb::{error::Result, bson::doc, results::DeleteResult, IndexModel}; 
use super::super::api::rocker_launcher::MongoDatabase;
use crate::repository::mongodb_config::get_db_name;
use uuid::Uuid;
use rocket::log::info_;


pub const ROOM_COLLECTION: &str = "rooms";
pub const ROOM_SEARCH_INDEX: &str = "$**_\"text\"";

pub async fn init_indexs(connection: &MongoDatabase){
    let database = connection.database(&get_db_name());
    let room_collection = database.collection::<Room>(ROOM_COLLECTION);
        match room_collection.list_index_names().await{
            Ok(result) => {
                result.iter().for_each(|i| info_!("[{}]Index found {}", ROOM_COLLECTION, i));
                if result.iter().any(|i| i==ROOM_SEARCH_INDEX) {
                    info_!("The index {} already exist.", ROOM_SEARCH_INDEX);
                } else {
                    info_!("The index {} must be created.", ROOM_SEARCH_INDEX);
                    let model = IndexModel::builder()
                                .keys(doc! {"$**": "text"})
                                .options(None)
                                .build();
                    match room_collection.create_index(model, None).await {
                        Ok(_) => {},
                        Err(_) => {}
                    }
                }
            },
            Err(_err) => {
                info_!("Fail init mongodb");
            }
        } 
}

pub async fn all(search: Option<String>, connection: &MongoDatabase) -> Result<Vec<Room>> {
    let database = connection.database(&get_db_name());
    let filter = search.map_or_else(
        || None, 
        |s| Some (doc! { "$text": { "$search": s } })
    );
    let mut cursor: mongodb::Cursor<Room> = database.collection::<Room>(ROOM_COLLECTION)
                                                        .find(filter, None).await?;
    let mut result = Vec::new();
    while cursor.advance().await? {
        result.push(cursor.deserialize_current()?)
    }
    Ok(result)
}

pub async fn get(id: String, connection: &MongoDatabase) -> Result<Option<Room>> {
    let database = connection.database(&get_db_name());
    let collection = database.collection::<Room>(ROOM_COLLECTION);
    match collection.find_one(Some(doc! {"roomId": id}), None).await {
        Ok(room_data) => {
            Ok(room_data)
        },
        Err(err) => Err(err)
    }
}

pub async fn insert(room: Room, connection: &MongoDatabase) -> Result<Room> {
    let mut new_room = room.clone();
    let room_uuid = Uuid::new_v4().to_string();
    new_room.room_id = Some(room_uuid.clone());
    let database = connection.database(&get_db_name());
    let collection = database.collection::<Room>(ROOM_COLLECTION);
    match collection.insert_one(new_room, None).await {
        Ok(id) => {
            let object_id = id.inserted_id.as_object_id().clone();
            let mut saved_room = room.clone();
            saved_room.room_id = Some(room_uuid.clone());
            saved_room.id = object_id.clone();
            Ok(saved_room)
        },
        Err(err) => Err(err)
    }
}

pub async fn update(id: String, room: Room, connection: &MongoDatabase) -> Result<Room> {
    let updated_room = room.clone();
    let database = connection.database(&get_db_name());
    let collection = database.collection::<Room>(ROOM_COLLECTION);
    match collection.replace_one(doc! {"roomId": id}, room, None).await {
        Ok(update_result) => {
            info_!("[PUT] update room modified count {}", update_result.modified_count);
            Ok(updated_room)
        },
        Err(err) => Err(err)
    }
}


pub async fn delete(id: String, connection: &MongoDatabase) -> Result<DeleteResult> {
    let database = connection.database(&get_db_name());
    let collection = database.collection::<Room>(ROOM_COLLECTION);
    match collection.delete_one(doc! {"roomId": id}, None).await {
        Ok(result) => {
            info_!("[DELETE] room deleted count {}", result.deleted_count);
            Ok(result)
        },
        Err(err) => Err(err)
    }
}
