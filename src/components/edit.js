// Importing necessary hooks and axios
import { useParams, useNavigate } from "react-router-dom"; // Importing hooks from react-router-dom for navigation and URL parameter retrieval
import { useEffect, useState } from "react"; // Importing React hooks for state and lifecycle management
import axios from "axios"; // Importing axios for HTTP requests

// Defining the Edit functional component
export default function Edit() {
    let { id } = useParams(); // Retrieving the 'id' parameter from the URL

    // Initializing state variables for title, cover, and author
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const navigate = useNavigate(); // Hook to programmatically navigate

    // useEffect to fetch the book data when the component mounts
    useEffect(
        () => {
            // Making a GET request to fetch the book data based on ID
            axios.get('http://localhost:4000/api/book/' + id)
            .then((response) => {
                // Updating the state with the fetched book data
                setTitle(response.data.title);
                setCover(response.data.cover);
                setAuthor(response.data.author);
            })
            .catch((error) => {
                // Handling any errors
                console.log(error);
            });
        }, [id] // Dependency array to ensure the effect runs only once or when id changes
    );

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing the default form submission behavior

        // Creating an object with the updated book data
        const book = {
            title: title,
            cover: cover,
            author: author
        }

        // Making a PUT request to update the book
        axios.put('http://localhost:4000/api/book/' + id, book)
        .then((res) => {
            navigate('/read'); // Redirecting to the 'read' page after successful update
        })
        .catch((error) => {
            // Handling any errors
            console.log(error);
        });
    }

    // JSX for rendering the edit form
    return (
        <div>
            <h2>Hello from Edit component!</h2>
            <form onSubmit={handleSubmit}>
                {/* Input fields for editing the book's title, cover, and author */}
                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Edit Book Cover: </label>
                    <input type="text" className="form-control" value={cover} onChange={(e) => { setCover(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Edit Book Author: </label>
                    <input type="text" className="form-control" value={author} onChange={(e) => { setAuthor(e.target.value) }} />
                </div>
                {/* Submit button */}
                <div>
                    <input type="submit" value="Edit Book"></input>
                </div>
            </form>
        </div>
    );
}
