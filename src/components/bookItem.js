
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import axios from 'axios';


function BookItem(props) {

    return (
        <div>
            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBook.cover}></img>
                        <footer>
                            {props.myBook.author
                           
                            }
                        </footer>
                    </blockquote>
                </Card.Body>
                 <Link to={"/edit/"+ props.myBook._id} className='btn btn-primary'> Edit </Link> 
                 <br></br>

                <Button onClick={(e) => {
                    e.preventDefault()
                    axios.delete('http://localhost:4000/api/book/' + props.myBook._id)
                    .then(()=>{
                        props.reload();
                    })
                    .catch();
                    }} className='btn-danger'> Delete </Button>
                                <br></br>

            </Card>
            {/* <h3>{props.myBook.title}</h3>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors[0]}</p> */}
        </div>
    );

}

export default BookItem;