namespace DotnetMaui;
using System;

public partial class App : Application {
	public App() {
		InitializeComponent();

		MainPage = new AppShell();
		MainPage.Appearing += OnLoaded;
	}

	private static void OnLoaded(object sender, EventArgs e) {
		Console.WriteLine("App started and loaded !");
	}
}
