import React from 'react'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import './Footer.css'
import {Link} from 'react-router-dom'



function Footer(){
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h5>Features</h5>
                        <ul className="list-unstyled">
                            <li><Link id="link002"  to="/home">Home</Link></li>
                            <li><Link  id="link002"to="/shop">Shop</Link></li>
                            <li><Link id="link002" to="/youraccount">Your Account</Link></li>
                            <li><Link 
                            id="link002"to="/Login">Login</Link></li>

                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>Resources</h5>
                        <ul className="list-unstyled">
                            <li><Link id="link002"to="/sell">Sell on Bigstore</Link></li>
                            <li><a id="link002" href="/privacy">Privacy</a></li>
                            <li><a id="link002"href="/legal">Legal</a></li>
                            <li><a id="link002" href="/team">Team</a></li>

                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>Help</h5>
                        <ul className="list-unstyled">
                            <li><a id="link002" href="/support">Support</a></li>
                            <li><a id="link002" href="/helpcenter">Help Center</a></li>
                            <li><Link id="link002"to="/contact">Contact us</Link></li>
                            

                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6" >
                        <h5>Stay Connected</h5>
                        <a id="link003"className="ml-2"  href="/fb"><AiOutlineFacebook/></a>
                        <a id="link003"className="ml-4" href="/twitter"><AiFillTwitterSquare/></a>
                        <a id="link003"className="ml-4" href="/instagram"><FaInstagramSquare/></a>
                      
                      
                     </div>
                    

                </div>
            </div>

        </div>
    )
}
export default Footer  