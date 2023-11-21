import { Button, Card } from "react-bootstrap";

export default function CardComponent(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props ? props.title : "Card Tile "}</Card.Title>
        <Card.Text>
          {props ? props.desc : "copy and paste some content!"}
        </Card.Text>
        <Card.Text>
          {props ? props.price : "no price for this product "}
        </Card.Text>
        <Button variant="primary">Start! </Button>
      </Card.Body>
    </Card>
  );
}
