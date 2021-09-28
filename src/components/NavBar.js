import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import '../style.css';

const NavBar = () => {
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Navbar.Brand>
                    <h1>Tracker-C19 | by Enrique Donaire </h1>
                </Navbar.Brand>
            </Navbar>
        
        </div>
    )
}



export default NavBar
