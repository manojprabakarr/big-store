import React from 'react'

import './contact.css'
import { Form } from 'react-bootstrap'



class Contact extends React.Component{
    render(){
        return(
            <div className="contact">
                <h4>BIG STORE</h4>
                <h6>We Always With You</h6>
                <div className="contact2">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <img  className="d-block w-100 " src="Assets/images/contact1.jpg" alt="contact"/><br/>
                        </div>
                            <div className="col-sm-6 col-md-6">
                                <Form className="form3">
                                    <h5>Contact Us</h5><br/>
                                    <Form.Control type="text" placeholder="Name"/><br/>
                                    <Form.Control type="email" placeholder="Email"/><br/>
                                     <Form.Control as="textarea" placeholder=" Type Your message" rows="4"/><br/><br/>
                                    <button id="btn4">Submit</button>
                                    
                                </Form>
                            </div>
                        </div>
                    </div>
              

                    </div>    
            </div>


        )
    }
}
export default Contact