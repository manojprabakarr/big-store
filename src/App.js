import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Home from './Components/pages/Home'
import Footer from './Components/Footer'
import {Route,Switch} from 'react-router-dom'
import Cart from './Components/pages/cart'
import Login from './Components/pages/Login'
import Contact from './Components/pages/contact'
import Createone from './Components/pages/createone'
import Orders from './Components/pages/orders'
import Policy from './Components/pages/policy'
import Sell from './Components/pages/sell'
import Youraccount from './Components/pages/youraccount'
import Shop from './Components/pages/Shop'
import Forgetpassword1 from './Components/pages/Forgetpassword1'
import Createaccount from './Components/pages/CreateAccount'



function App() {
  return (
    <div className="App">
     <Header/>
     
     <Switch>
       <Route path="/home"><Home/></Route>
       <Route path="/cart"><Cart/></Route>
       <Route path="/contact"><Contact/></Route>
       <Route path="/createone"><Createone/></Route>
       <Route path="/login"><Login/></Route>
       <Route path="/orders"><Orders/></Route>
       <Route path="/policy"><Policy/></Route>
       <Route path="/sell"><Sell/></Route>
       <Route path="/shop"><Shop/></Route>
       <Route path="/youraccount"><Youraccount/></Route>
       <Route path="/forgetpassword1"><Forgetpassword1/></Route>
       <Route path="/Createaccount"><Createaccount/></Route>
     </Switch>
     
    <Footer/>
     
     
    

    
      
  
    </div>
  );
}

export default App;
