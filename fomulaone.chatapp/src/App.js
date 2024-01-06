import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WaitingRoom from './components/waitingroom';
import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import ChatRoom from './components/chatroom';

function App() {
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState();

  const joinChatRoom = async (username, chatroom ) => {
    try {
      // initiate conenction
      const connection = new HubConnectionBuilder().withUrl("http://localhost:5166/Chat").configureLogging(LogLevel.Information).build();
      // setup handler
      connection.on("JoinSpecificChatRoom", (username, msg) => {
        console.log("msg", msg); 
      });

      connection.on("ReceiveSpecificMessage", (username, msg) => {
        setMessages(messages => [...messages, {username, msg}]);
      })

      await connection.start();
      await connection.invoke("JoinSpecificChatRoom", {username, chatroom});

      setConnection(connection);

    } catch (e) {
     console.log(e);
    }
  }

  const sendMessage = async(message) => {
    try {
     await connection.invoke("SendMessage", message); 
    } catch (e) {
     console.log(e); 
    }
  }

  return (
    <div className="App">
      <main>
        <Container>
          <Row className='px5 my-5'>
            <Col sm='12'>
              <h1 className='font-weight-light'>Welcome to F1 ChatApp</h1>
            </Col>
          </Row>
          { !connection
            ? <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
            : <ChatRoom messages={messages} sendMessage={sendMessage}></ChatRoom>
          }
        </Container>
      </main>
    </div>
  );
}

export default App;
