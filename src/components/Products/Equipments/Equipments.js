import React from 'react';
import {useState} from 'react';
import {Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';


const Equipments = (props) => {
    const [count, setCount] = useState(initial);
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{props.price}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button variant="primary" size="sm" onClick={() => (count === initial) ? setCount(count): setCount(count + 1)}>
                    +
                    </Button>
                    <Card.Text>0</Card.Text>
                    <Button variant="secondary" size="sm" onClick={() => (count !== stock) & (count < stock) ? setCount(count + 1) : setCount(count)}>
                    -
                </Button>
            </Card.Body>
       </Card>
       </>
    )
};

export default Equipments;