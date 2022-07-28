import './App.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import DropdownMenu_Left from './components/dropdown_left';
import DropdownMenu_Right from './components/dropdown_right';
import DropdownMenu_Mid from './components/dropdown_mid';

function App() {
  const [index, setIndex]=useState(-1);
  const [plus, setPlus] = useState(0);
  console.log(plus)
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col><DropdownMenu_Left setIndex={setIndex}></DropdownMenu_Left></Col>
            <Col><DropdownMenu_Mid setPlus={setPlus}></DropdownMenu_Mid></Col>
            <Col><DropdownMenu_Right index={index + plus}></DropdownMenu_Right></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}


export default App;