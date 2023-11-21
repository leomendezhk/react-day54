// import { useState } from "react"; //to add dinamic val
import { Button } from "react-bootstrap";

export default function Counter(props) {
  // let [count, setCount] = useState(0);

  return (
    <div>
      <h2>{props.name}'s Counter</h2>
      <p>Count: {props.count}</p>
      <Button variant="primary" onClick={() => props.plus(props.index)}>
        Increment me
      </Button>
      <Button variant="danger" onClick={() => props.minus(props.index)}>
        Decrement me
      </Button>
    </div>
  );
}
