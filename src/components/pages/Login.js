import React from 'react'
import {Image, Form} from 'react-bootstrap'
import './login.css'
import {Link}from 'react-router-dom'





class Login extends React.Component{
    render(){
        return(
            <div className="Login">
               
                <h4>BIG STORE</h4>
                <h6>Stay Happy With Us</h6>
                
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 col-md-5">
                            <Image src="Assets/images/avatar.jpg" thumbnail roundedCircle/>
                        </div>
                        <div className=" ml-auto col-sm-5 col-md-5">
                            <Form className="manoj"> 
                                <h5>SHOP HAPPILY</h5><br/><br/>
                                <Form.Control type="email" placeholder="Email"/><br/>
                                <Form.Control typr="password" placeholder="password"/><br/>
                                <button id="btn5">LOGIN</button>
                                <a id="link7" href="/forgetpassword">forgetpassword</a>
                                <Link id="link8" to="/Creataccount">CreateAccount</Link>
                                
                            </Form>
                        </div>
                    </div>
                </div>
                       
              
            </div>
        )
    }
}
export default Login