import { Card, Placeholder, Holder, Button } from "react-bootstrap";
//import TAair from "./components/pages/Reviews/Reviews";
import myImage from "./TAAir.jpg";

function Reviews() {
  return (
    <div className="d-flex justify-content-around">
      <Card>
        <Card.Img
          className="img-thumbnail"
          variant="top"
          src={myImage}
          alt="image"
          style={{ width: "10rem" }}
        />
        <Card.Body>
          <Card.Title>Trans American Airlines</Card.Title>
        </Card.Body>

        <div className="d-flex justify-content-around">
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>very impressed</Card.Title>
              <Card.Text>5 Stars</Card.Text>
              <Card.Text>
                Just had a great flight here for the first time and was very
                impressed. I had Doris as a pilit she was fantastic. She took
                her time and made sure every detail was perfect. Highly
                recommend her!
              </Card.Text>
              <Button variant="primary">Edit</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
        </div>
      </Card>
    </div>
  );
}

export default Reviews;
