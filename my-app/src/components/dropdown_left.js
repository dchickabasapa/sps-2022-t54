import React,{useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import * as Constants from '../constants';

import ReactAudioPlayer from 'react-audio-player';

function DropdownMenu_Left(props) {
    const [value,setValue]=useState('');
    const [notes,setNotes]=useState([]);
    const handleSelect=(e)=>{
        console.log(e);
        setValue(e);

        for (var i = 0; i < Constants.traditions.length; i++) {
            if (Constants.traditions[i].id === e)
                setNotes(Constants.traditions[i].notes)
        }
    }
  return (
      <div>
        <DropdownButton id="dropdown-basic-button"
        title="Dropdown button" onSelect={handleSelect}>
            {Constants.traditions.map((key) => {
                return (
                    <Dropdown.Item key={key.id} eventKey={key.id}>{key.id}</Dropdown.Item>
                )
            })}
        </DropdownButton>
        <ListGroup>
            {notes.map((key, index) => {
                return (
                    <div key={key}>
                        <ListGroup.Item action onClick={() => props.setIndex(index)} key={key} eventKey={key}>{key}</ListGroup.Item>
                        <ReactAudioPlayer src={"/audio/"+key+".mp3"} controls></ReactAudioPlayer>
                    </div>
                )
            })}
        </ListGroup>
      </div>
  );
}

export default DropdownMenu_Left;
