import React from 'react';
import { useState, useEffect } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import * as Constants from '../constants';

function DropdownMenu_Right(props) {
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
                if (props.index == index) {
                    return (
                        <ListGroup.Item active key={key}>{key}</ListGroup.Item>
                    )
                } else {
                    return (
                        <ListGroup.Item disabled key={key}>{key}</ListGroup.Item>
                    )
                }
            })}
        </ListGroup>
      </div>
  );
}

export default DropdownMenu_Right;