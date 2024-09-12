using Microsoft.AspNetCore.SignalR;
using EGlobal.TotalPosSDKNet;

namespace PinPadsHub.Hubs
{
    public class PinPadHub : Hub
    {
        public async Task TestConnection(string message)
        {
            var pinPad = new EGlobal.TotalPosSDKNet.JPinPad.PinPad.PinPadUsb("900", 1000);

            

            await Clients.All.SendAsync($"ConnectionTested", message);

        }
    }
}
