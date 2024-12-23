#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Listener;

fn main() {
  tauri::Builder::default()
    .setup(|app| {    
      app.listen("load", |_event| {
        println!("App started and loaded !");
      });
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
