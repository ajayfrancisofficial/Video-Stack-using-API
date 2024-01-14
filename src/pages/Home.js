import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='bg-black p-5'>
            <div className='bg-black'>
                <Container >
                    <Row>
                        <Col>
                            <h1 className='text-white'>Video Uploader</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore alias quaerat eum officiis et dicta sapiente ipsum sit id. Obcaecati, porro? Accusantium reiciendis non pariatur dicta sapiente dolorum quod provident.</p>
                            <Link to={'/main'}>
                                <button className='btn btn-success '>Get Started</button>

                            </Link>
                        </Col>
                        <Col >
                            <img className='w-50 container' src="https://i.postimg.cc/9fVKwg90/c5f815d13a3ad373bf44bae116bc84d9.gif" alt="" />
                        </Col>

                    </Row>
                </Container>
            </div>
            <hr className='container w-50' />

            <Container >
                <h1 className='text-center'>Features</h1>
                <Row>
                    <Col>
                        <Card style={{ width: '100%', height: '500px' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title><h1 className='p-3'>Managing Videos</h1></Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio maiores, quisquam suscipit quos iste, ea voluptatem esse necessitatibus blanditiis accusamus eligendi ipsum, corrupti neque nobis assumenda illo consectetur molestias?
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '100%', height: '500px' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title><h1 className='p-3'>Categorise Videos</h1></Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae sed ut dolorum quidem nemo vel deserunt sequi cum dolorem ea pariatur cupiditate quam atque, aliquid expedita incidunt omnis ratione! Deleniti.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '100%', height: '500px' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title><h1 className='p-3'>Watch History</h1></Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consectetur quasi, eaque voluptatem asperiores laudantium pariatur. Reiciendis ipsum ipsam dicta esse asperiores laborum error delectus doloremque distinctio! Ullam, quo libero!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Home