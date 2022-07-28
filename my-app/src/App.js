import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import DropdownMenuLeft from './components/dropdown_left';
import DropdownMenuRight from './components/dropdown_right';
import DropdownMenuMid from './components/dropdown_mid';

function App() {
  const [index, setIndex]=useState(-1);
  const [plus, setPlus] = useState(0);
  const [leftSelection, setLeftSelection]=useState('');
  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Translate</h1>
        <Container>
          <Row>
            <Col><DropdownMenuLeft setIndex={setIndex} setLeftSelection={setLeftSelection}></DropdownMenuLeft></Col>
            <Col><DropdownMenuMid setPlus={setPlus}></DropdownMenuMid></Col>
            <Col><DropdownMenuRight index={(index + plus)%12} leftSelection={leftSelection}></DropdownMenuRight></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}


export default App;