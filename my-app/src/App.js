import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import DropdownMenu from './components/dropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col><DropdownMenu></DropdownMenu></Col>
            <Col><DropdownMenu></DropdownMenu></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;