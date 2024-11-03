import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar , Collapse} from 'react-bootstrap';
import React, { useState } from 'react';
import { TbMenuOrder } from 'react-icons/tb';
const Navb = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="container-fluid">
        <div className="col-6 d-flex justify-content-center" >
      <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
      </div>
      <div className="col-md-6 d-none d-md-block">
        <div className="d-flex justify-content-center gap-4">
      <Button variant="danger"className="text-light">Home</Button>
      <Button variant="link"className="text-light">About</Button>
      <Button variant="link"className="text-light">Projects</Button>
      <Button variant="link" className="text-light">Contact</Button>
        </div>
      </div>
      <div className="col-6 d-md-none d-block ">
        <div className="d-flex justify-content-center mx-5" >
        <TbMenuOrder className="text-light" 
      onClick={toggleMenu} 
      style={{ cursor: 'pointer' , fontSize: '30px'}} />
        </div>
      </div>
      <Collapse in={isMenuOpen}>
  <div className="d-md-none justify-content-center align-items-end col-12">
    <div className="bg-dark p-3 mx-4 d-flex flex-column ">
      <Button variant="danger" className="text-light mb-2">Home</Button>
      <Button variant="link" className="text-light mb-2">About</Button>
      <Button variant="link" className="text-light mb-2">Projects</Button>
      <Button variant="link" className="text-light">Contact</Button>
    </div>
  </div>
</Collapse>
    </Navbar>
  )
}

export default Navb