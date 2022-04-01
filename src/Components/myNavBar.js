import React from 'react'
import { Route, Routes, Navigate} from 'react-router-dom';
import { Nav, Row, Col } from 'react-bootstrap';
import '../App.css';
import LogoSmall from '../Images/Logo_Small.png';
export default function myNavBar() {
  return (
    <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} className='navColor'>
  <Row >
    <Col md={3}></Col>
    <Col md={1}><img className='navImg' src={LogoSmall}></img></Col>
    <Col  md={2}>
    <Nav.Item>
    <Nav.Link href="/home" className='navWord'>Objective</Nav.Link>
  </Nav.Item>
  </Col>
  <Col  md={2}>
  <Nav.Item>
    <Nav.Link className='navWord'>Hangar</Nav.Link>
  </Nav.Item>
  </Col>
  <Col  md={2}>
  <Nav.Item>
    <Nav.Link className='navWord'>Deployment</Nav.Link>
  </Nav.Item>
  </Col>
  <Col md={2}></Col>

    
  </Row>
 
</Nav>
  )
}
