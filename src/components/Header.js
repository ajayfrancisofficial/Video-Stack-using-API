import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><i class="fa-solid fa-circle-play fa-2xl p-4" ></i>Video Uploader</Navbar.Brand>
          
        </Container>
      </Navbar>
   </div>
  )
}

export default Header