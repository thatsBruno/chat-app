import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WaitingRoom from './components/waitingroom';
import { useState } from 'react';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import ChatRoom from './components/chatroom';

function App() {
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState();

  const joinChatRoom = async (username, chatroom ) => {
    try {
      // initiate conenction
      const connection = HubConnectionBuilder().withUrl("http://localhost:5340").configureLogging(LogLevel.Information).build();
      // setup handler
      connection.on("JoinSpecificChatRoom", (username, msg) => {
       console.log("msg", msg); 
      });

      connection.on("ReceiveSpecificMessage", (username, msg) => {
        setMessages(messages => [...messages, {username, msg}]);
      })

      await connection.start();
      await connection.invoke("JoinSpecificChatRoom", {username, chatroom});
    } catch (e) {
     console.log(e);
    }
  }

  return (
    <div className="App">
      <main>
        <Container>
          <Row class='px5 my-5'>
            <Col sm='12'>
              <h1 className='font-weight-light'>Welcome to F1 ChatApp</h1>
            </Col>
          </Row>
          { !connection
            ? <WaitingRoom joinChatRoom={joinChatRoom} />
            : <ChatRoom messages={messages} />
          }
        </Container>
      </main>
    </div>
  );
}

export default App;
