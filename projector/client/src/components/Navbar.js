import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar as Nav } from 'react-bootstrap';

const Navbar = props => {
  return (
    <Nav className='nav justify-content-end' bg='primary'>
      <Nav.Brand>
        <Link to='/'>Home</Link>
      </Nav.Brand>
      <Nav.Brand>
        <Link to='/projects'>Projects</Link>
      </Nav.Brand>
    </Nav>
  )
}


export default Navbar;