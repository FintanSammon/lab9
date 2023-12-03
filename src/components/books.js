// Importing the BookItem component
import BookItem from "./bookItem"; // Importing BookItem to use for displaying each book

// Defining the Books functional component
function Books(props) {
    // The render part of the component
    return props.myBooks.map( // Mapping over the array of books passed in through props
        (book) => {
            // For each book in the myBooks array, a BookItem component is rendered
            return (
                <BookItem 
                    myBook={book} // Passing the current book object to the BookItem component
                    key={book._id} // Using the book's _id as a key for React's rendering performance
                    reload={() => { props.Reload() }} // Passing a reload function to each BookItem
                ></BookItem>
            );
        }
    );
}

export default Books; // Exporting the Books component for use in other parts of the app
