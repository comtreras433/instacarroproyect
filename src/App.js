import React, { Component } from 'react';
import LogoTipo from './assets/logo.png';
import Phone from './assets/phone.png';
import User from './assets/user.png';
import Caret from './assets/caret.png';
import './App.css';
import View from './components/view';
import  data  from './DB.json';

class App extends Component {
  render() {
      data.all.sort( function(a,b) {
     return a.remainingTime - b.remainingTime
    })
    return (
      <div className="App">
      <nav className="navbar">
        <div className="container">
           <div className="grid">
               <div className="logo-phone">
               <div className="logo">
                   <img src={LogoTipo} alt="logo"/>
               </div>
               <div className="phone">
                 <img src={Phone} alt="phone"/>
                 <span>(11) 3569-3465</span>
               </div>
               </div>
               <div className="user">
               <div className="userid">
                 <div className="userdata">
                   <img src={User} alt="user" />
                   <div className="span">
                     <span>User Test</span>
                   </div>
                 </div>
               </div>
               <img src={Caret} alt="caret"/>
               </div>
             </div>
          </div>
        </nav>
        <View data={data} />
      </div>
    );
  }
}

export default App;
