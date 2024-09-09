using Microsoft.AspNetCore.SignalR;

namespace SignalR.Hubs
{
    public class MainHub : Hub
    {
        public async Task NewMessage(string message) =>
            await Clients.All.SendAsync("messageReceived", message);

    }
}
 