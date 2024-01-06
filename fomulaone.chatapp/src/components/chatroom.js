import { Col, Row } from "react-bootstrap";
import MessageContainer from "./messagecontainer";

const ChatRoom = ({ messages }) => { 
    return <div>
        <Row className="px-5 py-5">
            <Col sm={10}>
                <h2>ChatRoom</h2>
            </Col>
            <Col>

            </Col> 
        </Row>
        <Row className="px-5 py-5">
            <Col sm={12}>
                <MessageContainer messages={messages}></MessageContainer>
            </Col>
        </Row>
    </div>
}


export default ChatRoom;