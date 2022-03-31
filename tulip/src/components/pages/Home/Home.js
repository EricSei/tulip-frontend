//import uniqid from 'uniqid'
//import { education } from '../../portfolio'
//import './Education.css'
import React, { useState, useEffect } from "react";
import { Card, Placeholder, Holder, Button } from "react-bootstrap";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
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
        <h1> Fetch data from an api in react </h1>{" "}
        {items.map((item) => (
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

export default Home;
