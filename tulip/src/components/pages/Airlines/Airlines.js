//import uniqid from 'uniqid'
//import { education } from '../../portfolio'
//import './Education.css'
import React, { useState, useEffect } from "react";
import { Card, Placeholder, Holder, Button } from "react-bootstrap";
import AirlineApi from "../../../apis/AirlineApis";

function Airlines() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:8080/api/airline")
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
      <div className="App">
        
        <h1> List of airlines we review </h1>{" "}
        {items.map((item) => (
          <div className="d-flex justify-content-around">
            <Card style={{ width: "18rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
              <img src="..." class="card-img-top" alt="..."></img>img
                <Card.Title>{ item.airlineName }</Card.Title>
                <Card.Text>
                lorem ipsum
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          // <ol>
          //     User_Name: { item.username },
          //     Full_Name: { item.name },
          //     User_Email: { item.email }
          // </ol>
        ))}
      </div>
    );
  }
}

export default Airlines;
