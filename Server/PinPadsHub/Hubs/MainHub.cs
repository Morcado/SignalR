using Microsoft.AspNetCore.SignalR;

namespace PinPadsHub.Hubs
{
    
    public class MainHub : Hub
    {
        public async Task PingServer(string message)
        {
            await Clients.All.SendAsync($"pingServer", message);

        }
        public async Task StartServer(string message) =>
            await Clients.All.SendAsync("serverStarted", message);

        public async Task StopServer(string message) =>
            await Clients.All.SendAsync("serverStopped", message);



    }
}
 