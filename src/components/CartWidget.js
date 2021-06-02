import React from 'react';
import {Button} from 'react-bootstrap';
import * as Icon  from 'react-bootstrap-icons';

const CartWidget = () => {
    return (
        <Button variant="primary" size="lg">
            <Icon.Cart4 />
        </Button>
    )
};

export default CartWidget;