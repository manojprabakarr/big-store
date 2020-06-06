import React from 'react'
import {Carousel} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import {CardGroup} from 'react-bootstrap' 
import './Home.css'




function Home(){
    return(
        <div className="content">
             

            <Carousel>
                 <Carousel.Item>
                       <img
                         className="d-block w-100 "
                         src="Assets/images/images2.jpg"
                         alt="First slide" style={{height:"450px"}}/>
  
                  </Carousel.Item>
                 
                  <Carousel.Item>
                         <img
                         className="d-block w-100 "
                         src="Assets/images/images3.jpg"
                         alt="second slide" style={{height:"450px"}} />

   
                   </Carousel.Item>
             </Carousel>
             <div className="content1">
                          <h4>BIG STORE</h4>
                          <h6>Bring Your Stores To online</h6>
                          </div>
                   <div className="main-content" style={{marginLeft:"5px",marginRight:"5px",marginTop:"20px",marginBottom:"80px"}}>
                   <CardGroup>
                       <Card border="secondary" >
   
                           <Card.Body>
                               <Card.Title style={{textAlign:"center",color:"red"}}>About Us</Card.Title>
                                  <Card.Text>
                                      Big store is an online e-commerce  website created to buy daily products.it was
                                           created by hat developers in Tamil Nadu. people can host their stores in this website from all over the 
                                      world.
                                   </Card.Text>
                            </Card.Body>
   
                          </Card>
                        

                          <Card border="secondary">
                              <Card.Body>
                              <Card.Title style={{textAlign:"center",color:"red"}}>Address</Card.Title>
                              <Card.Text style={{textAlign:"center"}}>
                                  Big store<br/>
                                  Coimbatore<br/>
                                  Tamil Nadu<br/>
                                 
                                  Bigstore@gmail.com<br/>

                              </Card.Text>
                              </Card.Body>
                          </Card>
                        
  
  
                    </CardGroup>
               
                    </div>

        </div>
    )
}
export default Home

