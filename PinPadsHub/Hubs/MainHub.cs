using Microsoft.AspNetCore.SignalR;

namespace PinPadsHub.Hubs
{
    public class MainHub : Hub
    {
        public async Task NewMessage(string message) =>
            await Clients.All.SendAsync("messageReceived", message);

    }
}
 