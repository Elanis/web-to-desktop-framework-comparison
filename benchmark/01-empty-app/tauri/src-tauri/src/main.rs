#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::time::Instant;

mod cmd;

fn main() {
  let now = Instant::now();

  tauri::AppBuilder::new()
    .invoke_handler(move |_webview, arg| {
      use cmd::Cmd::*;
      match serde_json::from_str(arg) {
        Err(e) => {
          Err(e.to_string())
        }
        Ok(command) => {
          match command {
            LoadCommand { argument: _ } => {
              println!("Loaded in {}ms", now.elapsed().as_millis());
            }
          }
          Ok(())
        }
      }
    })
    .build()
    .run();
}
