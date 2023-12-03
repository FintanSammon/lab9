// Importing necessary hooks and axios
import { useEffect, useState } from "react"; // Importing React hooks for state and lifecycle management
import axios from "axios"; // Importing axios for making HTTP requests
import Books from "./books"; // Importing the Books component to display a list of books

// Defining the Read functional component
function Read() {
    // Initializing state variable to store the books data
    const [data, setData] = useState([]);

    // useEffect hook to fetch books data when the component mounts
    useEffect(
        () => {
            // Making a GET request to fetch all books data
            axios.get('http://localhost:4000/api/books')
            .then((response) => {
                // Updating the state with the fetched data
                setData(response.data)
            })
            .catch((error) => {
                // Handling any errors
                console.log(error);
            });
        }, [] // Empty dependency array to ensure the effect runs only once on mount
    );

    // Function to reload books data
    const ReloadData = () => {
        // Re-fetching all books data
        axios.get('http://localhost:4000/api/books')
        .then((response) => {
            // Updating the state with the new data
            setData(response.data)
        })
        .catch((error) => {
            // Handling any errors
            console.log(error);
        });
    }

    // JSX for rendering the Read component
    return (
        <div>
            <h2>Hello from Read Component!</h2>
            {/* Passing the books data and reload function to the Books component */}
            <Books myBooks={data} Reload={ReloadData}></Books>
        </div>
    );
}

export default Read; // Exporting the Read component for use in other parts of the app
