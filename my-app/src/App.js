import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import DropdownMenu_Left from './components/dropdown_left';
import DropdownMenu_Right from './components/dropdown_right';

function App() {
  const [index, setIndex]=useState('');
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col><DropdownMenu_Left setIndex={setIndex}></DropdownMenu_Left></Col>
            <Col><DropdownMenu_Right index={index}></DropdownMenu_Right></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}


export default App;