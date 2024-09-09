using Microsoft.AspNetCore.SignalR;

namespace SignalR.Hubs
{
    public class PinPadHub : Hub
    {
        public async Task TestConnection(string message) =>
            await Clients.All.SendAsync($"ConnectionTested", message);

    }
}
