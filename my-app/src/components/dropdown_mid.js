import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap';

function DropdownMenuMid(props) {
    const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
    return (
        <div>
            <h2>Select Offset</h2>
            <br/>
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

export default DropdownMenuMid;