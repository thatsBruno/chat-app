import { Col, Row } from "react-bootstrap";
import MessageContainer from "./messagecontainer";
import SendMessage from "./sendmessage";

const ChatRoom = ({ messages, sendMessage }) => { 
    return <div>
        <Row className="px-5 py-5">
            <Col sm={10}>
                <h2>Welcom to ChatRoom</h2>
            </Col>
            <Col>

            </Col> 
        </Row>
        <Row className="px-5 py-5">
            <Col sm={12}>
                <MessageContainer messages={messages}/>
            </Col>
            <Col sm={12}>
                <SendMessage sendMessage={sendMessage}/>
            </Col>
        </Row>
    </div>
}


export default ChatRoom;