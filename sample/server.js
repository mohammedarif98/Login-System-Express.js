



// Import the 'http' module and assign it to the 'http' variable.
let http = require('http');

// Create an HTTP server using the 'http' module.
// The server listens for incoming HTTP requests and handles them.
http.createServer((req, res) => {
  // Handle the request when it arrives.
  
  // Set the HTTP response status code to 200 (OK).
  // Also, set the 'ContentType' header to indicate that the response is plain text.
  res.writeHead(200, { 'ContentType': 'text/plain' });

  // Write the response body with the text "hello server".
  res.write("hello server");

  // End the response, indicating that we have finished sending data to the client.
  res.end();
}).listen(2000, () => {
  // Start the HTTP server on port 2000 and provide a callback function
  // that runs when the server has started successfully.
  console.log("Server is running at port 2000");
});
