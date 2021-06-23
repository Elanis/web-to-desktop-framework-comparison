#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;
use std::time::Instant;

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let now = Instant::now();
      
      // `main` here is the window label; it is defined on the window creation or under `tauri.conf.json`
      // the default value is `main`. note that it must be unique
      let main_window = app.get_window("main").unwrap();

      // listen to the `event-name` (emitted on the `main` window)
      main_window.listen("load", move |_event| {
        println!("Loaded in {}ms", now.elapsed().as_millis());
      });
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
