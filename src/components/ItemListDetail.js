import React from 'react';
import { Card } from 'react-bootstrap/esm/Image';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListDetail = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.brand}</Card.Text>
                <Card.Text>{props.price}</Card.Text>
                <ItemCount />
            </Card.Body>
        </Card>
    )
}

export default ItemListDetail;