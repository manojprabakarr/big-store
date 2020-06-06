import React,{Component} from 'react'
import {Navbar, FormControl} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import{FiSearch}from 'react-icons/fi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'
import {Button} from 'react-bootstrap'
import './Header.css'
import {Link} from 'react-router-dom'

  



class Header extends Component{
    render(){
        return(
            <div>
                 <Navbar bg="white" expand="lg">
                    <Navbar.Brand href="/">BIG STORE</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                             <Navbar.Collapse id="basic-navbar-nav">
   
                                 <Form inline>
                                        <FormControl  type="text" placeholder="Store Name(or)Products"  className="ml-5"/>
                                        <Button  className="ml-1"variant="outline-dark"><FiSearch/></Button>
                                        <FormControl type="text" placeholder="Locations"  className="ml-5"/>  
                                        <Button  className="ml-1"variant="outline-dark"><FiSearch/></Button>
                                    </Form>
                                    <Nav className="ml-auto">
                                       <Link className="Nav.Link"  id="link0033"  to="/home">HOME</Link>
                                       <Link className="Nav.Link" id="link0033" to="/shop">SHOP</Link>
                                       <Link className="Nav.Link" id="link0033"  to="/cart"><AiOutlineShoppingCart/></Link>
                                         <Link className="Nav.Link"id="link0033" to="/orders">ORDERS</Link>
                                        <Link className="Nav.Link"  id="link0033" to="/login"><MdAccountCircle/>HELLO,SIGNIN</Link>
     
                                    </Nav>
                             </Navbar.Collapse>
                   </Navbar>
            </div>
        )
    }
}
export default Header