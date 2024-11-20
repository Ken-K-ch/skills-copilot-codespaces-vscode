// Create web server
// Create a new web server using express
const express = require('express');
const app = express();
const port = 3000;

// Import the comments module
const comments = require('./comments');

// Use the comments module to set up the routes
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.get('/comments/:id', (req, res) => {
  res.json(comments.getComment(parseInt(req.params.id)));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

