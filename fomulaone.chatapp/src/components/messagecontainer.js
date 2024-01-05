const MessageContainer = ({messages}) => {
    return <div>
        {
            //48:00
            messages.map((msg, index) => 
            <table strped bordered>
                <tr key={index}>
                    <td> {msg.msg} - {msg.username} </td>
                </tr>
            </table>)
        }
    </div>
}

export default MessageContainer;