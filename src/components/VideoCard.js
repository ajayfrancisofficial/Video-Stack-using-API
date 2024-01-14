import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function VideoCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Link style={{ textDecoration: 'none' }}>
                <Card className='border border-success' bg='dark' style={{ width: '18rem' }}>
                    <Card.Img onClick={handleShow} className='' style={{ height: '200px' }} variant="top" src="https://i.postimg.cc/HsBH8vZm/Luminar-logo.jpg" />
                    <Card.Body>
                        <Card.Title className='text-white text-center'>Luminar Technolab</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
                centered
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Luminar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="400px" 
                    src="https://www.youtube.com/embed/PmdyY38g6Rg?autoplay=1"   // ?autoplay=1  makes it autoplay
                    title="ANIMAL: ABRAR’S ENTRY - JAMAL KUDU(Full Video) |Ranbir Kapoor,Bobby Deol |Sandeep Vanga |Bhushan K" 
                    frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen>
                      </iframe>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default VideoCard