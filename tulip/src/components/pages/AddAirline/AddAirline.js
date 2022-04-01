import { Form } from "react-bootstrap";
import React, { useState } from "react";
import AirlineApi from "../../../apis/AirlineApis";

//function AddAirline() {

const AddAirline = (props) => {
  const [name, setName] = useState("");
  //const [id, setid] = useState(-1)
  // const [qty, setQty] = useState(0)

  const handleSubmit = (event) => {
    console.log("Name = " + name);
    //console.log("id = " + id)
    // console.log("Qty = " + qty)

    const airline = {
      "airlineID": -1,
      "airlineName": name
    };

    AirlineApi.createAirline(airline);

    // reset form
    setName("");
    // setPrice(0)
    // setQty(0)

    event.preventDefault();
  };

  return (
    <Form className="justify-content-around" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Airline Name</Form.Label>
        <Form.Control
          placeholder="Enter Airline name"
          id="name"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Form.Text className="text-muted">
          This is the airline you are adding
        </Form.Text>
      </Form.Group>
      <input type="submit" className="btn btn-primary" />
    </Form>
  );
};

export default AddAirline;
