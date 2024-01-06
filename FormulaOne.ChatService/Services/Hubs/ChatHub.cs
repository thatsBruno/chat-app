using FormulaOne.ChatService.Persistence;
using FormulaOne.ChatService.Services.Model;
using Microsoft.AspNetCore.SignalR;

namespace FormulaOne.ChatService.Services.Hubs;

public class ChatHub : Hub
{
   private readonly SharedDb _sharedDb;

   public ChatHub(SharedDb sharedDb)
   {
      _sharedDb = sharedDb;
   }
   
   public async Task JoinChat(UserConnection userConnection)
   {
      await Clients.All.SendAsync("ReceiveMessage", "admin", $"{userConnection.Username} has joined.");
   }

   public async Task JoinSpecificChatRoom(UserConnection userConnection)
   {
      await Groups.AddToGroupAsync(Context.ConnectionId ,userConnection.ChatRoom);

      _sharedDb.connections[Context.ConnectionId] = userConnection;
      
      await Clients.Group(userConnection.ChatRoom)
         .SendAsync("JoinSpecificChatRoom", "admin", $"{userConnection.Username} has joined {userConnection.ChatRoom}.");
   }

   public async Task SendMessage(string messsage)
   {
      if (_sharedDb.connections.TryGetValue(Context.ConnectionId, out UserConnection connection))
      {
         await Clients.Group(connection.ChatRoom)
            .SendAsync("ReceiveSpecificMessage", connection.Username, messsage);
      }
   }
}