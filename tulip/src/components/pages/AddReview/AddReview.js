import { Form } from "react-bootstrap";

function AddReview() {
  return (
    <Form className="justify-content-around">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>AirLine</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select an Airline</option>
          <option value="TA Air">TA Air</option>
          <option value="JZ Air">JZ Air</option>
          <option value="Flo Air">Flo Air</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select a Rating</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
          <option value="6">Six</option>
          <option value="7">Seven</option>
          <option value="8">Eight</option>
          <option value="9">Nine</option>
          <option value="10">Ten</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>destPort</Form.Label>
        <Form.Control placeholder="Enter destPort" />
        <Form.Text className="text-muted">
          This is the air port you are heading to
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>sourcePort</Form.Label>
        <Form.Control placeholder="Enter sourcePort" />
        <Form.Text className="text-muted">
          This is the air port you are leaving from
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Flight Class</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select your flight class</option>
          <option value="First Class">First Class</option>
          <option value="Business Class">Business Class</option>
          <option value="Economy class">Economy class</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Review Text</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <button type="submit" className="btn btn-primary">
                Submit
      </button>
    </Form>
  );
}

export default AddReview;
