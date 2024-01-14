import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


function Add() {
    const [inputDatas,setInputDatas]=useState({title:"",coverImg:"",videoUrl:"",id:""})
    const setData=(e)=>{
    let {name,value}=e.target
    setInputDatas({...inputDatas,[name]:value})
    }
    const extractUrl=(e)=>{
        const {value,name}=e.target
        let urlCode=value.slice(-11,)
        //https://www.youtube.com/embed/PmdyY38g6Rg?autoplay=1 
        const finalUrl=`https://www.youtube.com/embed/${urlCode}?autoplay=1 `
        setInputDatas({...inputDatas,[name]:finalUrl})
    }
    console.log(inputDatas);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className='text-center'>
                <Link style={{ textDecoration: 'none' }}>
                    <img className='p-3 w-25' onClick={handleShow} src="https://i.postimg.cc/gjVQLcpS/white-upload-removebg-preview.png" alt="" />

                    <p>upload</p>
                </Link>
            </div>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header >
                    <Modal.Title>Upload Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Video Caption"
                        className="mb-3"
                    >
                        <Form.Control name='title' onChange={(e)=>setData(e)} type='text' />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Cover Image URL"
                        className="mb-3"
                    >
                        <Form.Control name='coverImg' onChange={(e)=>setData(e)} type='text' />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Youtube Video URL"
                        className="mb-3"
                    >
                        <Form.Control name='VideoUrl' onChange={(e)=>extractUrl(e)} type='text' />
                    </FloatingLabel>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        {/* we use a event e so that we can avoid infinite loop od onclick */}
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Add