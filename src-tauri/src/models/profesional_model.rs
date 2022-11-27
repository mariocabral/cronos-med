use mongodb::bson::{oid::ObjectId, DateTime};
use serde::{Serialize, Deserialize};


#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Profesional {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub first_name: String,
    pub last_name: String,
    pub degree: String,
    pub licence: String,
    pub email: String,
    pub enabled: bool,
    pub phones: Vec<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub create_date: Option<DateTime>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub last_modification_date: Option<DateTime>,
}
