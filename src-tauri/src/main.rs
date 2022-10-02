#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]


#[rocket::get("/hello")]
fn world() -> &'static str {
  "Hello, world!"
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .setup(|_app| {
            tauri::async_runtime::spawn(
              rocket::build()
                    .mount("/hello", rocket::routes![world])
                    .launch()
            );
            Ok(())
          })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
