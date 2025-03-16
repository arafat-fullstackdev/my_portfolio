// import React from 'react';
// import {Container, Row, Col, Button } from 'reactstrap';
// import { ReactTyped } from "react-typed";
// import './home.css';



// function Home() {
//   return (
//      <section className='hero_section'>
//       <Container fluid className="px-4">
//         <Row className='align-items-center'>
//           <Col  xs="12" md="6" className="text-center text-md-start">
//             <h4 className='sub-title'>Hello</h4>
//             <h4 className='title'>Programmer!</h4>
//             <h2 className='typed-text'>
//             <h2 className='typed-text'>
//   I'm <ReactTyped 
//     strings={["Frontend Developer", "Backend Developer", "Fullstack Developer"]}
//     typeSpeed={80}
//     backSpeed={50}
//     loop
//   />
// </h2>


              
//             </h2>
//             <p className='description'>
//               Passionate about developing and creating web application.
//             </p>
//             <Button className='btn-custom' color=' primary'>
//               Get in Touch</Button>
            
//           </Col>

//           <Col  xs="12" md="6" className="text-center">

//           <img src='/image/coder.png' alt='Coder'
//           className='profile_img' img-fluid
//           />
//           </Col>

//         </Row>
//       </Container>
//      </section>
     
//   )
// }

// export default Home;  

import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { ReactTyped } from "react-typed";
import './home.css';

function Home() {
  return (
    <section className='hero_section'>
      <Container fluid className="px-5 full-width">
        <Row className='align-items-center'>
          {/* Left Content Section */}
          <Col xs="12" md="6" className="text-center text-md-start">
            <h4 className='sub-title'>Hello</h4>
            <h4 className='title'>Programmer!</h4>
            <h2 className='typed-text'>
              I'm <ReactTyped
                strings={["Frontend Developer", "Backend Developer", "Fullstack Developer"]}
                typeSpeed={80}
                backSpeed={50}
                loop
              />
            </h2>

            <p className='description'>
              Passionate about developing and creating web applications.
            </p>

            <div className="buttons">
              <Button className='btn-custom' color='primary'>
                Get in Touch
              </Button>
              <Button className='btn-outline'>
                About Me
              </Button>
            </div>
          </Col>

          {/* Right Image Section with Floating Stats */}
          <Col xs="12" md="6" className="text-center profile_section">
            <img src='/image/coder.png' alt='Coder' className='profile_img img-fluid' />

            {/* Floating Info Boxes */}
            <div className="floating_box success_box">
              <span className="icon">🏆</span> 2 Years of Success
            </div>

            <div className="floating_box projects_box">
              <span className="icon">📈</span> 560+ Projects Completed
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
