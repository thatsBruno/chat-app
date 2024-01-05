import { sendMessage } from "@microsoft/signalr/dist/esm/Utils";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useState } from "react";

const SendMessage = ({ SendMessage }) => {
    const[msg, setMsg] = useState();

    return <Form onSubmit={e => {
        e.preventDefault();
        sendMessage(msg);
        setMsg('');
    }}>
        <InputGroup className="mb-3">
            <Form.Control onChange={e => setMsg(e.target.value)} value={msg} placeholder="Type a message"></Form.Control>
            <Button variant="primary" type="submit" disabled={!msg}>Send</Button>
        </InputGroup>
    </Form>
} 

export default SendMessage;