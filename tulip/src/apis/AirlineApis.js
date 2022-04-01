// URL for our product API
const baseurl = "http://localhost:8080";
//const baseurl = "http://54.167.125.255:8080";
let jwt = "";
//const URI = "http://localhost:8080/api/airline";

//const jwt ="";

// object that will hold key-value pairs of all the API operations that we need to do
const AirlineApi = {
  // get all the products
  getMyReviews: (setData) => {

    fetch(`${baseurl}/api/review/myreview`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Authorization' : `Bearer ${jwt}`
      } // sending json in the body
    }) // perform the get request to the URI
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
    console.log(jwt);
    // fetch (uri or url, object representing the http request )
    fetch(`${baseurl}/api/airline`, {
      method: "POST",
      body: JSON.stringify(airline), // convert product to a string representation of the json
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Authorization' : `Bearer ${jwt}`
      } // sending json in the body
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  },
  
// POST request to create a product
createReview: (review) => {
  // to perform request, need the product object
  console.log(jwt);
  // fetch (uri or url, object representing the http request )
  
  fetch(`${baseurl}/api/review/users/1/airlines/1`, {
    method: "POST",
    body: JSON.stringify(review), // convert product to a string representation of the json
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Authorization' : `Bearer ${jwt}`
    } // sending json in the body
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
},

  // POST request to create a product
  createAuthenticate: (user) => {
    // to perform request, need the product object

    // fetch (uri or url, object representing the http request )
    fetch(`${baseurl}/api/authenticate`, {
      method: "POST",
      body: JSON.stringify(user), // convert product to a string representation of the json
      headers: { "Content-Type": "application/json" } // sending json in the body
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      
      .then((data) => {
        console.log(data);
        jwt = data["jwt"];


      })
      .catch((error) => console.log(error));
  }
};

// import ProductsApi in other files within this project
export default AirlineApi;
