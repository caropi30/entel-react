import React from "react";
import { Button } from "react-bootstrap";

const CartButton = () => {
  return (
    <Button variant="primary" size="lg">
      <i class="bi bi-cart4">0</i>
    </Button>
  );
};

export default CartButton;
