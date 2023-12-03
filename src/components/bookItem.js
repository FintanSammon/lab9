// Importing necessary components and modules
import Card from 'react-bootstrap/Card'; // Bootstrap Card component for displaying each book item
import Button from 'react-bootstrap/Button'; // Bootstrap Button component for actions
import { Link } from 'react-router-dom'; // Link component from react-router-dom for navigation
import axios from 'axios'; // Axios for making HTTP requests

// Defining a functional component to display individual book items
function BookItem(props) {
    // Render method for the component
    return (
        <div>
            {/* Using Card from Bootstrap to display book details */}
            <Card>
                {/* Displaying the book title in Card Header */}
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    {/* Blockquote for styling, and displaying book cover and author */}
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBook.cover} alt={props.myBook.title}></img> {/* Book cover image */}
                        <footer>
                            {props.myBook.author} {/* Author's name */}
                        </footer>
                    </blockquote>
                </Card.Body>
                {/* Link to the edit page for the book */}
                <Link to={"/edit/" + props.myBook._id} className='btn btn-primary'> Edit </Link>
                <br></br>
                {/* Button for deleting the book */}
                <Button onClick={(e) => {
                    e.preventDefault(); // Preventing default form submission behavior
                    axios.delete('http://localhost:4000/api/book/' + props.myBook._id) // Axios call to delete book
                    .then(() => {
                        props.reload(); // Reloading the parent component to reflect deletion
                    })
                    .catch(); // Handling potential errors
                }} className='btn-danger'> Delete </Button>
                <br></br>
            </Card>
            {/* Commented out code for alternative display of book details */}
            {/* <h3>{props.myBook.title}</h3>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors[0]}</p> */}
        </div>
    );
}

export default BookItem; // Exporting the BookItem component for use in other parts of the app
