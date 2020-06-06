import React, { Component } from 'react';
import {Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Form}from 'react-bootstrap'
import './sell.css'
const initialState ={
    Email:'',
    password:'',
    errorEmail:'',
    errorpassword:''

};




class Sell extends Component{
    constructor(props){
        super(props)
        this.state={
            initialState
         
            
        }
        
    };
    handlepasswordchange=(event)=> {
        this.setState
        ({password:event.target.value})
    }
    handleemailchange=(event) =>{
        this.setState({
            Email:event.target.value
        })
    }

    validate=()=>{
    
        let errorEmail=''
        let errorpassword=''
        
       
    
        if (!this.state.Email.includes("@")) {
          errorEmail = "invalid email";
        }
        if(!this.state.password.length >10){
            errorpassword="invalid password";
        }   
        if (errorEmail||errorpassword) {
            this.setState({ errorEmail,errorpassword});
            return false;
          }
      
          return true;
    }
    handleSubmit=(event) =>{
        event.preventDefault();
        const isvalid=this.validate();
        if(isvalid){
            
            console.log(this.state)
            this.setState(initialState);
        }
     
        
    }
    
    render(){
        return(
            <div className="sell">
                <h4>BIG STORE</h4>
                <h6>Sell with us</h6>
               
                <div className="container">
                  
                    <div className="row">
                     <div className="col-sm-5 col-md-6">
                    <Image src="Assets/images/sell1.jpg" thumbnail/>
                </div>
                <div className="col-sm-5 col-md-6">
                    <Form onSubmit={this.handleSubmit}className="form1">
                        <h5>WELCOME USER</h5><br/>
                        <Form.Control defaultValue={this.state.Email} onChange={this.handleemailchange}type="email" placeholder="Email"/><br/>
                        <div style={{color:'red'}}>{this.state.errorEmail}</div>
               
                        <Form.Control defaultValue={this.state.password} onChange={this.handlepasswordchange}type="password" placeholder="password"/><br/>
                        <div style={{color:'red'}}>{this.state.errorpassword}</div>
               
                        <button onClick={this.handleSubmit} id="btn1">LOGIN</button>
                        <Link  id="link4" to="/forgetpassword">ForgetPassword</Link>
                        <Link id="link5" to="/createone">Create an Merchant Account</Link>
                    </Form>
                </div>
            </div>
            </div>
            </div>

        )
    }
}
export default Sell
