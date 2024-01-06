using System.Collections.Concurrent;
using FormulaOne.ChatService.Services.Model;

namespace FormulaOne.ChatService.Persistence;

public class SharedDb
{
    private readonly ConcurrentDictionary<string, UserConnection> _connections =
        new ConcurrentDictionary<string, UserConnection>();

    public ConcurrentDictionary<string, UserConnection> connections => _connections;

}