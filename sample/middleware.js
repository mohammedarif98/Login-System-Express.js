
// const express = require("express");
// const app = express();
// app.use((req, res, next) => {
//   console.log("This is a custom middleware");
// //   next();
// });

// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

// app.listen(7000);












const express = require('express');
const app = express();

// Logging middleware
app.use((req, res, next)=>{
  console.log(`this is my custom middleware`);
  next();
});
// Register the logging middleware globally for all routes
// app.use(logRequest);
// Route-specific handler
app.get('/', (req, res) => {
  res.send('Hello, server!');
}).listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
