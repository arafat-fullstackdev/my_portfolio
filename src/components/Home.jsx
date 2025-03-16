import React from 'react';
import {Container, Row, Col, Button } from 'reactstrap';
import { ReactTyped } from "react-typed";
import './home.css';



function Home() {
  return (
     <section className='hero_section'>
      <Container fluid>
        <Row className='align-items-center'>
          <Col  xs="12" md="6" className="text-center text-md-start">
            <h4 className='sub-title'>Hello</h4>
            <h4 className='title'>Programmer!</h4>
            <h2 className='typed-text'>
              I'm {}
              <ReactTyped 
              strings={["Frontend Developer", "Backend Developer", "Fullstack Developer"]}
              typedSpeed={80}
              backSpeed={50}
              loop
              />

              
            </h2>
            <p className='description'>
              Passionate about developing and creating web application.
            </p>
            <Button className='btn-custom' color=' primary'>
              Get in Touch</Button>
            
          </Col>

          <Col  xs="12" md="6" className="text-center">

          <img src='/image/coder.png' alt='Coder'
          className='profile_img' img-fluid
          />
          </Col>

        </Row>
      </Container>
     </section>
     
  )
}

export default Home;