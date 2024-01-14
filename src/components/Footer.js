import React from 'react'
import { Col, Row } from 'react-bootstrap'


function Footer() {
  return (
    <div>
        <Row>
            <Col className='p-4'>
            <h4><i class="fa-solid fa-circle-play fa-sm p-4" ></i>Video Uploader</h4>
            <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi ex pariatur dolorem iste tempora quae esse beatae, exercitationem consequatur voluptatum sapiente debitis placeat sequi distinctio atque voluptatibus maiores rerum?</p>
            </Col>
            <Col className='p-4'>
            <h4 className='p-4'>Links</h4>
            <h6>Landing Page</h6>
            <h6>Home</h6>
            <h6>Watch History</h6>
            
            </Col>
            <Col>
            
            </Col>
            <Col>
            
            </Col>
        </Row>
    </div>
  )
}

export default Footer