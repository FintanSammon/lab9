// Importing necessary hooks and axios
import { useState } from "react"; // Importing the useState hook from React for state management
import axios from "axios"; // Importing axios for making HTTP requests

// Defining the Create functional component
function Create() {
    // Initializing state variables for title, cover, and author
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing the default form submission behavior

        // Logging the input data for debugging
        console.log("Title: " + title + " Cover: " + cover + " Author: " + author);

        // Creating an object with the book data
        const book = {
            title: title,
            cover: cover,
            author: author
        };

        // Making a POST request to create a new book
        axios.post('http://localhost:4000/api/book', book)
        .then()
        .catch(); // Handling the promise, yet to be implemented
    }

    // JSX for rendering the create book form
    return (
        <div>
            <h2>Hello from create Component!</h2>
            <form onSubmit={handleSubmit}>
                {/* Input fields for adding a new book's title, cover, and author */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                {/* Submit button for the form */}
                <div>
                    <input type="submit" value="Add Book"></input>
                </div>
            </form>
        </div>
    );
}

export default Create; // Exporting the Create component for use in other parts of the app
