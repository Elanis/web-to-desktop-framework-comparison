namespace DotnetMauiVue;

public partial class MainPage : ContentPage {
    public event EventHandler<EventArgs> OnPostBar;

    public MainPage() {
        InitializeComponent();
    }
    private void PostBar_Clicked(object sender, EventArgs args) {
        OnPostBar?.Invoke(this, args);
    }
}