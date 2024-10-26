


const http = require('http'); // Import the HTTP module to create an HTTP server
const fs = require('fs'); // Import the file system module to read files
const path = require('path'); // Import the path module for file path manipulation

// Create the server
const server = http.createServer((req, res) => {
    // If the request URL is the root '/', serve the HTML file
    if (req.url === '/') {
        // Read the HTML file 'index.html' from the current directory
        fs.readFile(path.join(__dirname, 'chess_redirect.html'), (err, content) => {
            if (err) {
                // If an error occurs while reading the file, send a 500 error response
                res.writeHead(500);
                res.end('Error loading file');
                return;
            }
            // If the file is read successfully, send the content with a 200 status code
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } else {
        // If the URL is anything other than '/', send a 404 response
        res.writeHead(404);
        res.end('Not Found');
    }
});

// Define the port the server will listen on (8080 in this case)
const PORT = 8080;
// Start the server and log a message indicating that it's running
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
