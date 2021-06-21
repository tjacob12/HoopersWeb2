 import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 //import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className="App">
        <footer>
          <Container fluid className = 'hoopersorange pt-4 fixed-bottom'>
          <Row xs={4}>
            <Col xs={4} className='sec1'>
              get in touch<br></br>
              <p className='font-weight-light'>info@hoopers.club</p>

              
                address<br></br>
                <p className='font-weight-light'>Rua da Prata,80,1,1100-420<br></br>
                Lisboa,Portugal
              </p>
            </Col>
            <Col xs={1} className = 'sec2'>
              <p>follow us<br></br>
              
                instagram<br></br>
                youtube<br></br>
                twitter<br></br>
                facebook<br></br>
                spotify
              </p>
            </Col>
            <Col className='sec3'>
              <p>
                careers at hoopers<br></br>
                terms and conditions<br></br>
                privacy policy<br></br>
                cookies policy<br></br>
                about us
              </p>
            </Col>
            <Col className='sec4'>
              <p>join our mailing list</p>
              <div className='underline'>
                 <input className ='subscribe' type='text' placeholder='email'></input>
              </div>
              <p></p>
             
          <button type="button" className="btn btn-warning btn-md">SUBSCRIBE</button>
            </Col>
            <Col xs={11} className='text-center'>
                <b>&copy;2021 Hoopers - All Rights Reserved</b>
            </Col>
          </Row>

          </Container>
        </footer>
          </div>


          
          
        
        
);
}

export default App;
