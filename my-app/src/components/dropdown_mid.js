import React from 'react';
import { useState, useEffect } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import * as Offset from './offset';
import { Button, ListGroupItem } from 'react-bootstrap';

function DropdownMenu_Mid(props) {
    const [value, setValue] = useState('');
    const [num, setNum] = useState([]);
    const handleClick = (e) => {
        console.log(e);
        setValue(e);

        for (var i = 0; i < Offset.numSet.length; i++) {
            if (Offset.numSet[i].id === e)
                setNum(Offset.numSet[i].number)
        }
    }
    return (
        <div>
            <DropdownButton id="off-set-button"
                title="Offset" onSelect={handleClick}>
                {Offset.numSet.map((key) => {
                    return (
                        <Dropdown.Item key={key.id} eventKey={key.id}>{key.id}</Dropdown.Item>
                    )
                })}
            </DropdownButton>
            <ListGroup>
                {num.map((key, plus) => {
                    return (
                        <ListGroupItem action onClick={() => props.setPlus(plus)} key={key} eventKey={key}>{key}</ListGroupItem>
                    )
                })}
            </ListGroup>
        </div>
    )
}

export default DropdownMenu_Mid;