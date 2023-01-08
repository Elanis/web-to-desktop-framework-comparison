namespace DotnetMauiVue;

public partial class MainPage : ContentPage
{
    public event EventHandler<EventArgs> OnPostBar;
    int count = 0;
    public MainPage()
    {
        InitializeComponent();
    }
    private async void PostBar_Clicked(object sender, EventArgs args)
    {
        OnPostBar?.Invoke(this, args);
    }
}