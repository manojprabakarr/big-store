import React, { Component } from 'react'
import './createone.css'
import {Form} from 'react-bootstrap'




class Createone extends Component{
    render(){
        return( 
            <div className="account">
                 <h4>BIG STORE</h4>
                 <h6>We always with you</h6>
                 <div className="container" >
                     <div className="row">
                             
                              <div className="col-sm-5 col-md-6">
                                  <img   className="d-block w-100 " src="Assets/images/account2.jpg" alt=""/>
                                                             
                            </div>    <br/>
                            <div className="col-sm-6 col-md-6">   
                            <div className="form2">
                                  <Form>
                                  <h4>Create Seller Account</h4><br/>
                                      <Form.Control type="text" style={{textAlign:"center"}} placeholder="FirstName"/><br/>
                                      <Form.Control type="text" style={{textAlign:"center"}} placeholder="LastName"/><br/>
                                      <Form.Control type="email" style={{textAlign:"center"}}placeholder="Email"/><br/>
                                      <Form.Control type="number" style={{textAlign:"center"}}placeholder="Ph Number"/><br/>
                                      <Form.Control type="password" style={{textAlign:"center"}}placeholder="password"/><br/>
                                      <Form.Control type="password" style={{textAlign:"center"}} placeholder="confirm password"/><br/>
                                      <button id="btn3">SIGNIN</button>
                       

                                  </Form></div>
                                
  
                              </div>
                        </div>
              </div>
                    
             
            </div>
        )
    }
}
export default Createone