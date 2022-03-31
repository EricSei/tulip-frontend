// URL for our product API
const URI = "http://localhost:8080/api/airline";

// object that will hold key-value pairs of all the API operations that we need to do
const AirlineApi = {
  // get all the products
  getProducts: (setData) => {
    /*
            let x = 3;
            let y = x + 5;
            console.log('y = ' + y) // y = 8

            1. API call for all the products (5 seconds)
            2. Store products in an array ()
            3. Display data in array on the webpage

        */

    // fetch -> allows us to make ASYNC calls to an API

    fetch(URI) // perform the get request to the URI
      .then((result) => {
        console.log("RESULT");
        console.log(result); // represent the result object (http response)
        return result.json(); // .json() -> extract the json from the body
      })
      .then((result) => {
        // result = result.json() from above
        console.log("WITHIN BODY OF RESPONSE");
        console.log(result);
        setData(result); // setData -> sets the array in the ProductTable component
      })
      .catch((error) => console.log(error)); // catch -> called when an error occurs
  },

  // POST request to create a product
  createAirline: (airline) => {
    // to perform request, need the product object

    // fetch (uri or url, object representing the http request )
    fetch(URI, {
      method: "POST",
      body: JSON.stringify(airline), // convert product to a string representation of the json
      headers: { "Content-Type": "application/json" } // sending json in the body
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
};

// import ProductsApi in other files within this project
export default AirlineApi;
