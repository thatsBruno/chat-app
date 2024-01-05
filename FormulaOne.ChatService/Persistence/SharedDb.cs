using System.Collections.Concurrent;
using FormulaOne.ChatService.Services.Model;

namespace FormulaOne.ChatService.Persistence;

public class SharedDb
{
    private readonly ConcurrentDictionary<string, UserConnection> _connections;

    public SharedDb(ConcurrentDictionary<string, UserConnection> connections)
    {
        connections = _connections;
    }
    
    
    
}