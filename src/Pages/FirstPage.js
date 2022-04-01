import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import myNavBar from '../Components/myNavBar'
import bigImage from '../Images/Logo_Full.png'
import SecoPage from './SecoPage';


export default function FirstPage() {

  return (
    <Container fluid className='heroImage1 lrpad'>
      <Row>
        <Col>
        {myNavBar()}
        </Col>
      </Row>
      {/* center image */}
      <Row>
        <Col md={3}></Col>
        <Col md={6} className='text-center mt-3'>
        <img src={bigImage}  className='secImg '></img>
        </Col>
        <Col md={3}></Col>

      </Row>
      {/* welcome */}
      <Row>
        <Col className='text-center navWord'> 
        <h1>
          Welcome Pilot # 972
        </h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}></Col>
        <Col md={4}  className='text-center navWord '>
          <h5 className='smallF'>You have been selected to particaipate in our simulation project. Please read the terms of your contract before moving forward to the objective page</h5>
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row className='mt-4'>
        <Col md={3}></Col>
        <Col md={6} className='scrollBox'>
          <div className='textBold'> Deployment Contract</div>
          <div className='scroll'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
          <div className='text-center mt-2'>
            <Button className='purBtn' href='/secoPage'>Accept</Button>
          </div>

        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  )
}
