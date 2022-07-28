import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import DropdownMenuLeft from './components/dropdown_left';
import DropdownMenuRight from './components/dropdown_right';

function App() {
  const [index, setIndex]=useState('');
  const [leftSelection, setLeftSelection]=useState('');
  console.log(leftSelection)
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col><DropdownMenuLeft setIndex={setIndex} setLeftSelection={setLeftSelection}></DropdownMenuLeft></Col>
            <Col><DropdownMenuRight index={index} leftSelection={leftSelection}></DropdownMenuRight></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}


export default App;