import React, { useState, useEffect } from "react";
import { Card, Placeholder, Holder, Button } from "react-bootstrap";
//import TAair from "./components/pages/Reviews/Reviews";
import myImage from "./TAAir.jpg";

function Reviews() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:8080/api/review")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <div>
       <h1> List of airlines we review </h1>{" "}
       <div className="d-flex justify-content-around">
      <Card >
        <Card.Img
          className="img-thumbnail"
          variant="top"
          src={myImage}
          alt="image"
          style={{ width: "18rem" }}
        />
        <Card.Body>
          <Card.Title>Trans American Airlines</Card.Title>
        </Card.Body>

        {items.map((item) => (
        <div className="d-flex justify-content-around">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>very impressed</Card.Title>
              <Card.Text>{ item.rating } : Stars</Card.Text>
              <Card.Text>
              { item.reviewText }
              </Card.Text>
              <Card.Text>flightClass: { item.flightClass }</Card.Text>
              <Card.Text>sourcePort: { item.sourcePort }</Card.Text>
              <Card.Text>destPort: { item.destPort }</Card.Text>
            </Card.Body>
          </Card>
          </div>
          ))}
        </Card>
        </div>
    </div>
  );
  }
}

export default Reviews;
