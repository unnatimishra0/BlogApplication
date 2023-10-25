import React from 'react'
import {Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand
} from 'reactstrap'

const Header = () => {
  return (
    <div className='ui  menu'>
        <div className='ui container-fluid center'>
        <Navbar
    className="my-1"
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      Blog App
    </NavbarBrand>
   <Link to= 'addblog'><Button color="primary" > Add </Button></Link>  
  </Navbar>
    

        </div>
      
    </div>
  )
}

export default Header
