// Importing necessary modules
const express = require('express'); // Express framework for building the server
const cors = require('cors'); // CORS middleware for cross-origin requests
const bodyParser = require("body-parser"); // Body-parser for parsing request bodies
const mongoose = require('mongoose'); // Mongoose for MongoDB interactions

// Setting up the Express application
const app = express();
const port = 4000;

// Enabling CORS for all requests
app.use(cors());

// Setting headers to handle CORS issues
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Configuring body-parser as middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connecting to MongoDB using Mongoose
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://[your-connection-string]');
}

// Defining a schema for the 'book' collection in MongoDB
const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
});
const bookModel = mongoose.model('Book', bookSchema);

// DELETE endpoint to remove a book by ID
app.delete('/api/book/:id', async (req, res) => {
  console.log("Delete: " + req.params.id);
  let book = await bookModel.findByIdAndDelete(req.params.id);
  res.send(book);
});

// PUT endpoint to update a book by ID
app.put('/api/book/:id', async(req, res) => {
  console.log("Update: " + req.params.id);
  let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(book);
});

// POST endpoint to create a new book
app.post('/api/book', (req, res) => {
  console.log(req.body);
  bookModel.create(req.body)
    .then(() => { res.send("Book Created") })
    .catch(() => { res.send("Book NOT Created") });
});

// GET endpoint to return a simple string
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// GET endpoint to list all books
app.get('/api/books', async(req, res) => {
  let books = await bookModel.find({});
  res.json(books);
});

// GET endpoint to retrieve a book by ID
app.get('/api/book/:identifier', async (req, res) => {
  console.log(req.params.identifier);
  let book = await bookModel.findById(req.params.identifier);
  res.send(book);
});

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
