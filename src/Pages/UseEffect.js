import UseEffect from "../Components/UseEffect";
import TimeAlive from "../Components/TimeAlive";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function useEffectPage () {
  const [showAliveItems, setShowAliveItems] = useState(false);

  return (
    <div>
      <UseEffect />

      <br />

      <Button variant="success" onClick={() => setShowAliveItems(true)}>
        Show
      </Button>
      <Button variant="danger" onClick={() => setShowAliveItems(false)}>
        Hide
      </Button>

      {showAliveItems ? <TimeAlive /> : "No items alive"}
    </div>
  );
}
