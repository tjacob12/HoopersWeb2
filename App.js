 import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
  return (
    <div className="App">
        <footer>
        <Container fluid>
        <div className = 'hoopersorange'>
          {/* <Row xs={5}>
            <Col xs={4}> */}
              <div className='email-address'>
             <b>get in touch</b><br></br>
            info@hoopers.club 
              </div>
        

              <div className = 'location'>
            <p><b> address</b> <br></br>
              Rus da Prata,80,1, 1100-420 <br></br>
              Lisboa,Portugal
              </p> 
              </div>
            {/* </Col>
          </Row> */}
         {/* <Row className = 'social media text-center'>
           <Col xs={8}> */}
        <div className= 'social-media'>
           <b>follow us</b><br></br>
          <nav>
            <a href='#instagram'>instagram</a><br></br>
            <a href='#youtube'>youtube</a><br></br>
            <a href='#twitter'>twitter</a><br></br>
            <a href='#facebook'>facebook</a><br></br>
            <a href='#spotify'>spotify</a>
          </nav>
         </div>

                {/* <div className ='other'>
                    <p>
                      careers at hoopers <br></br>
                      terms and conditions <br></br>
                      privacy policy <br></br>
                      cookies policy <br></br>
                      about us
                    </p>
               </div> */}

              {/* <div className='subscribe'>
                <p>
                join our mailing list <br></br></p>
              </div> */}
            </Container>
            </div>
          </footer>
          </div>


          
          
        
        
);
}

export default App;
