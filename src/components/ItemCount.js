import { useState } from "react";
import {Button} from 'react-bootstrap';

function ItemCount({ initial, stock, addOn }) {
  const [count, setCount] = useState(initial);

  console.log(count);
  return (
    <div>
      <p> Añadiste {count} veces </p>
      <Button variant="primary" size="sm"
        onClick={() =>
          count === initial ? setCount(count) : setCount(count - 1)
        }
      >
        -
      </Button>
      <Button variant="primary" size="sm"
        onClick={() =>
          (count !== stock) & (count < stock)
            ? setCount(count + 1)
            : setCount(count)
        }
      >
        +
      </Button>
    </div>
  );
}

export default ItemCount;