const MessageContainer = ({ messages }) => {
    return (
        <div>
            {messages && messages.length > 0 ? (
                <table>
                    <tbody>
                        {messages.map((msg, index) => (
                            <tr key={index}>
                                <td>{msg.msg} - {msg.username}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No messages available</p>
            )}
        </div>
    );
};

export default MessageContainer;
