import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import DropdownMenu from './components/dropdown';
import Music from './components/audio'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col><DropdownMenu></DropdownMenu></Col>
            <Col><DropdownMenu></DropdownMenu></Col>
          </Row>
          <Music></Music>
        </Container>
      </header>
    </div>
  );
}

export default App;