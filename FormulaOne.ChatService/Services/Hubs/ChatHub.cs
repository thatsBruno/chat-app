using FormulaOne.ChatService.Services.Model;
using Microsoft.AspNetCore.SignalR;

namespace FormulaOne.ChatService.Services.Hubs;

public class ChatHub : Hub
{
   public async Task JoinChat(UserConnection userConnection)
   {
      await Clients.All.SendAsync("ReceiveMessage", "admin", $"{userConnection.Username} has joined.");
   }

   public async Task JoinSpecificChat(UserConnection userConnection)
   {
      await Groups.AddToGroupAsync(Context.ConnectionId ,userConnection.ChatRoom);
      
      await Clients.Group(userConnection.ChatRoom).SendAsync("ReceiveMessage", "admin", $"{userConnection.Username} has joined.");
   }
}