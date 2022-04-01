import React from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import myNavBar from '../Components/myNavBar';
import '../App.css';
import objPho from '../Images/Objective Photo.jpg'
import info1 from '../Images/Info1.png'
import info2 from '../Images/Info2.png'
import info3 from '../Images/Info3.png'
import sky from '../Images/Goal Photo.jpg'

export default function SecoPage() {
  return (
    <Container fluid className='heroImage2'>
        <Row>
            <Col>
                {myNavBar()}
            </Col>
        </Row>
        <Row>
            <Col md={3}></Col>
            <Col md={6} className='mt-2'>
                <h1 className='objecti'>Objective</h1>
            </Col>
            <Col md={3}></Col>
        </Row>
        <Row>
            <Col md={3}></Col>
            <Col md={6} className='objBox'>
                <Row className='mt-2'>
                <Col md={6}>
                    <h3 className='vioText'>Location</h3>
                    <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h6>
                </Col>
                <Col md={6}>
                    <img src={objPho} className='img-fluid'></img>
                </Col>
                </Row>
                
            </Col>
            <Col md={3}></Col>
        </Row>
        <Row className='mt-5'>
            <Col md={3}></Col>
            <Col md={6}>
            <h2 className='navWord'>Task Choices</h2>
            </Col>
            <Col md={3}></Col>
        </Row>
        <Row className='mt-2'>
            <Col md={3}></Col>

            <Col md={2}>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={info1} />
                        <Card.Title className='cardTitle'>
                        <div className='mt-1 mb-1'>Aerial</div>
                        </Card.Title>
                        <Card.Body>
                            
                            <Card.Text>
                            <h6>Clear Drones</h6>
                            <h7>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </h7>
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
            </Col>
            <Col md={2} >
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={info2} />
                        <Card.Title className='cardTitle'>
                        <div className='mt-1 mb-1'>Ground</div>
                        </Card.Title>
                        <Card.Body>
                            
                            <Card.Text>
                            <h6>Remove Stone Barriers</h6>
                            <h7>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </h7>
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
            </Col>
            <Col md={2}  >
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={info3} />
                        <Card.Title className='cardTitle'>
                            <div className='mt-1 mb-1'>Subterranean</div>
                            </Card.Title>
                        <Card.Body>
                            
                            <Card.Text>
                            <h6>Tunnel to Checkpoint</h6>
                            <h7>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </h7>
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
            </Col>
            
            

            <Col md={3}></Col>
        </Row>

        <Row className='mt-5'>
        <Col md={3}></Col>
        <Col md={6} className='objBox'>
            <Row>
                <Col>
                <h2 className='vioText'>Goal</h2></Col>
            </Row>
            <Row>
                <Col md={6}>
                   
                    
                </Col>
                <Col md={6}></Col>
            </Row>
        </Col>
        <Col md={3}></Col>
        </Row>

    </Container>
  )
}
