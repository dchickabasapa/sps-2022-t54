import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import DropdownMenu_Left from './components/dropdown_left';
import DropdownMenu_Right from './components/dropdown_right';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col><DropdownMenu_Left></DropdownMenu_Left></Col>
            <Col><DropdownMenu_Right></DropdownMenu_Right></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}


export default App;