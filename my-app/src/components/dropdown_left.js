import React,{useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import * as Constants from '../constants';

import ReactAudioPlayer from 'react-audio-player';

function DropdownMenuLeft(props) {
    const [value,setValue]=useState('Select tradition');
    const [notes,setNotes]=useState([]);
    const [note,setNote]=useState("");
    const handleSelect=(e)=>{
        console.log(e);
        setValue(e);
        props.setLeftSelection(e);
        for (var i = 0; i < Constants.traditions.length; i++) {
            if (Constants.traditions[i].id === e)
                setNotes(Constants.traditions[i].notes)
        }
    }
    console.log("/audio/"+note+".mp3");
  return (
      <div>
        <DropdownButton id="dropdown-basic-button"
        title={value} onSelect={handleSelect}>
            {Constants.traditions.map((key) => {
                return (
                    <Dropdown.Item key={key.id} eventKey={key.id}>{key.id}</Dropdown.Item>
                )
            })}
        </DropdownButton>
        <br/>
        <ListGroup>
            {notes.map((key, index) => {
                return (
                    <div key={key}>
                        <ListGroup.Item action onClick={() => {props.setIndex(index); setNote(key)}} key={key} eventKey={key}>{key}</ListGroup.Item>
                    </div>
                )
            })}
        </ListGroup>
        <br/>
        <ReactAudioPlayer src={"/audio/"+note+".mp3"} controls></ReactAudioPlayer>
      </div>
  );
}

export default DropdownMenuLeft;
