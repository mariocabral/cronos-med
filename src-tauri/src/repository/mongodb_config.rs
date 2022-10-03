use dotenv::dotenv;
use std::env;


pub fn get_config() -> rocket_db_pools::Config {
    dotenv().ok();
    let mongo_addr = env::var("MONGO_ADDR").expect("MONGO_ADDR must be set");
    let mongo_port = env::var("MONGO_PORT").expect("MONGO_PORT must be set");
    let mongo_user = env::var("MONGO_USER").expect("MONGO_USER must be set");
    let mongo_pass = env::var("MONGO_PASSWORD").expect("MONGO_PASSWORD must be set");
    let mongo_uri = format!("mongodb://{}:{}@{}:{}/?authSource=admin", mongo_user, mongo_pass, mongo_addr, mongo_port);
    println!("{}",mongo_uri);
    rocket_db_pools::Config {
        url: mongo_uri,
        min_connections: None,
        max_connections: 1024,
        connect_timeout: 3,
        idle_timeout: None,
    }
}


pub fn get_db_name() -> String {
    dotenv().ok();
    return env::var("DB_NAME").expect("DB_NAME env var must be set");
}

