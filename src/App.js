// Importing necessary CSS and components
import './App.css'; // Importing custom CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
import Content from './components/content'; // Import Content component
import Footer from './components/footer'; // Import Footer component (currently not used)
import Header from './components/header'; // Import Header component (currently not used)
import Container from 'react-bootstrap/Container'; // Container component from React Bootstrap for layout
import Nav from 'react-bootstrap/Nav'; // Nav component for navigation links
import Navbar from 'react-bootstrap/Navbar'; // Navbar component for the header navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importing components from react-router-dom for routing
import Create from './components/create'; // Import Create component
import Read from './components/read'; // Import Read component
import Edit from './components/edit'; // Import Edit component

function App() {
  return (
    <BrowserRouter> {/* Using BrowserRouter for enabling routing */}
      <div className="App"> {/* Main app container */}
        {/* Navigation bar setup */}
        <Navbar bg="dark" data-bs-theme="dark"> {/* Dark-themed navbar */}
          <Container> {/* Bootstrap container for layout */}
            {/* Brand and navigation links */}
            <Navbar.Brand href="/">Navbar</Navbar.Brand> {/* Brand name */}
            <Nav className="me-auto"> {/* Navigation links */}
              <Nav.Link href="/">Home</Nav.Link> {/* Link to Home */}
              <Nav.Link href="/create">Create</Nav.Link> {/* Link to Create page */}
              <Nav.Link href="/read">Read</Nav.Link> {/* Link to Read page */}
            </Nav>
          </Container>
        </Navbar>
        {/* Defining Routes for different components */}
        <Routes> {/* Routes container */}
          <Route path='/' element={<Content></Content>}></Route> {/* Route for home page */}
          <Route path='/read' element={<Read></Read>}></Route> {/* Route for Read page */}
          <Route path='/create' element={<Create></Create>}></Route> {/* Route for Create page */}
          <Route path='/edit/:id' element={<Edit></Edit>}></Route> {/* Route for Edit page with dynamic ID */}
        </Routes>
        {/* Unused Header and Footer components */}
        {/* <Header></Header>
        <Content></Content>
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App; // Exporting the App component
