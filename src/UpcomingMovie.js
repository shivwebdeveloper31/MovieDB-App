import { Modal, show, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Cast from './Cast';
import './MovieBox.css';
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const UpcomingMovie = ({ title, poster_path, vote_average, release_date, overview }) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="card text-center bg-dark mb-3">
            <div className="card-body">
                <img className="card-img-top" onClick={handleShow} src={API_IMG + poster_path} />
                <div className="card-body">
                    <h6 style={{ color: "white" }} onClick={handleShow}>{title} </h6>
                    <p style={{ color: "white" }}>Rating: {vote_average}</p>
                    {/* <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button> */}
                    <Modal className='special_modal' size="lg" aria-labelledby="example-modal-sizes-title-lg" show={show} onHide={handleClose}>
                        {/* <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header> */}
                        <Modal.Body >
                            <div className='Main_box' style={{display: "flex"}}>
                                <div className='IMG'>
                                    <img className='cardimg-top' style={{ width: "200px", height: "200px", padding: "20px" }} src={API_IMG + poster_path} />
                                </div>
                                <div className='text' style={{padding: "15px"}}>
                                    <h5>{title}</h5>
                                    <p style={{ color: "blue" }}>Rating: {vote_average} </p>
                                    <p>Release Date: {release_date}</p>

                                </div>
                            </div>
                            <div className='overview'>
                                <h5>Overview</h5>
                                <p>{overview}</p>
                            </div>
                            <div className='cast'>
                                <Cast/>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default UpcomingMovie;