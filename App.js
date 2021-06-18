import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import Container from 'react-bootstrap/Container';
//  import  Row from 'react-bootstrap/Row';
//  import Col from 'react-bootstrap/Col';
import Video from './backgroundvideo.mp4';

import './App.css';



class App extends Component {
  render() {
    return (
<div className = 'App'>
       
          
        <video autoPlay loop muted
        style= {{
            position:'absolute',
            width:'100vw',
            left:'50%',
             top:'50%',
            height:'100vh',
            objectFit:'cover',
            transform:'translate(-50%,-50%)',
            zIndex:'-1'
        }}>
          <source src={Video} type='video/mp4' />
          </video>
          <div className = 'VideoButton'>
          <button type="button" className="btn btn-warning btn-lg">WATCH VIDEO</button>
          </div>
          <div className='ShopLink '>
          <a href="#" className="link">SHOP</a>
          </div>
          <div className = 'PTLink'>
          <a href="#" className="link">PT</a>
          </div>
        <div className = 'container'>
          {/* <form>
            <div className= 'input-group'>
              <input type ='text' className='box' placeholder='Search'></input>
                <button className='btn btn-dark' type = 'button'>
                  Button
                </button>
               
              
            </div>
          </form> */}
          <div className='search'>
            
          </div>

        </div>
          
</div>
    )
  }
}





export default App;
