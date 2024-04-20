
import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const MyCard = ({ image, name, text, tag, bg }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <Tags tag={tag} bg={bg} />
      </Card>
    </>
  );
};

export default MyCard;
