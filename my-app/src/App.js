import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import DropdownMenu from './components/dropdown';
import Player from './components/audio_trial'
import ReactAudioPlayer from 'react-audio-player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col><DropdownMenu></DropdownMenu></Col>
            <Col><DropdownMenu></DropdownMenu></Col>
          </Row>
          {/* <Music audioFile="../audio/c.mp3"></Music> */}
          <Player url="/audio/c.mp3"></Player>
          <ReactAudioPlayer
  src="c.ogg"
  autoPlay
  controls
/>
        </Container>
      </header>
    </div>
  );
}

export default App;