#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Listener;
use tauri::Manager;

fn main() {
  tauri::Builder::default()
    .setup(|app| {    
      // `main` here is the window label; it is defined on the window creation or under `tauri.conf.json`
      // the default value is `main`. note that it must be unique
      let main_window = app.get_webview_window("main").unwrap();

      // listen to the `event-name` (emitted on the `main` window)
      main_window.listen("load", move |_event| {
        println!("App started and loaded !");
      });
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
