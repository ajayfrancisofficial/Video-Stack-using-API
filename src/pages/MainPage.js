import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Add from '../components/Add'
import Videos from '../components/Videos'
import Categories from '../components/Categories'


function MainPage() {
    return (
        <div className='bg-black p-5'>
            <Row>
                <Col> <h1 className='p-4 text-white'>Start Uploading videos for free</h1> 
                <h3 className='p-3'><Link style={{textDecoration:'none'}}><i class="fa-solid fa-clock-rotate-left me-3" ></i>View Watch History</Link></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt velit ipsa recusandae similique perspiciatis odit possimus vero, ducimus ab repudiandae veniam ipsum quas. At nulla dolores reiciendis! Accusantium, dignissimos autem.</p>
                
                <Add></Add>
                </Col>
                <Col className='text-center mt-5'>
                <img src="https://i.postimg.cc/FKDMG65G/png-transparent-black-video-logo-video-icon-video-icon-angle-white-text-thumbnail-removebg-preview.png" alt="" />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <Videos></Videos>
                </Col>
                <Col>
                   <Categories></Categories>
                </Col>
            </Row>

        </div>
    )
}

export default MainPage