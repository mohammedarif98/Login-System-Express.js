
// //! url parameter

const express = require('express');
const app = express();
// Define a route with a URL parameter named "id"
app.get('/users/:id', (req, res) => {
  // const userId = req.params.id; 
  // res.send(`User ID: ${userId}`);
  res.send(req.params)
});
app.listen(4000, () => {
  console.log('Server is running on port 3000');
});

// //! query parameter

// const express = require('express');
// const app = express();
// app.get('/search', (req, res) => {
//   const searchTerm = req.query.q; // Access the query parameter "q"
//   const page = req.query.page; // Access the query parameter "page"
//   // Now, you can use the "searchTerm" and "page" in your code
//   res.send(`Search Term: ${searchTerm}, Page: ${page}`);
// });
// app.listen(5000, () => {
//   console.log('Server is running on port 3000');
// });

