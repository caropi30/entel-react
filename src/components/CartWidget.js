import React from 'react';
import {Button} from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';

const CartWidget = () => {
    return (
        <Button variant="primary" size="lg">
            <Cart />
        </Button>
    )
};

export default CartWidget;