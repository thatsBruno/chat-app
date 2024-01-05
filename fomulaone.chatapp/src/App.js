import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/boostrap.min.css';

function App() {
  return (
    <div className="App">
      <main>
        <Container>
          <Row class='px5 my-5'>
            <Col sm='12'>
              <h1 className='font-weight-light'>Welcome to F1 ChatApp</h1>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
