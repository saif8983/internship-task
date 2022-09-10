import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fourCardData } from '../Utils/CardData';
const FourthContainer = () => {
    return (
        <div>

            <Row style={{ marginTop: '30px' }}>
                <Col md={{ span: 3, offset: 5 }}><div className="text-fourth-container">valite officia consequate</div></Col>
            </Row>
            <Row class='mt-2'>
                <Col md={{ span: 5, offset: 4 }}><div className="title-fourth-container">Lorem ipsum sit amet</div></Col>
            </Row>
            <Row class='mt-3'>
                <Col md={{ span: 3, offset: 10 }}><div style={{ display: 'flex' }}>
                    <div className='seemore-fourth-container' >Seemore</div>
                    <i class="bi bi-arrow-right" style={{ fontSize: '25px', color: 'white' }}></i>
                </div></Col>
            </Row>
            <Row className="justify-content-md-center mt-3">
                {
                    fourCardData.map((data) => (
                        <>
                            <Col sm={2}>
                                <Card style={{ width: '200px', height: '350px' }} id='second-container-card'>
                                    <Card.Img variant="top"  src="https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg" />
                                    <Card.ImgOverlay>
                                        <i class="bi bi-heart " style={{ fontSize: '25px', marginLeft: '150px', color: 'white' }} ></i>
                                    </Card.ImgOverlay>
                                    <Card.Body style={{ borderRadius: '2em' }}>
                                        <div style={{ display: 'flex' }}>
                                            <div className="card-profile-img" > </div>
                                            <div>
                                                <Card.Title className='card-title' style={{ marginLeft: '10px' }}>{data.Card_Title}</Card.Title>
                                                <Card.Text className='card-text-profile'>View Profile</Card.Text>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <Card.Title className='card-title-rating' >{data.Card_Rating}</Card.Title>
                                            <div style={{ marginLeft: '10px' }}>
                                                <i class="bi bi-star-fill" id='start-card'></i>
                                                <i class="bi bi-star-fill" id='start-card'></i>
                                                <i class="bi bi-star-fill" id='start-card'></i>
                                                <i class="bi bi-star-fill" id='start-card'></i>
                                                <i class="bi bi-star-half" id='start-card'></i>
                                            </div>
                                        </div>
                                        <Card.Text className='card-text-description'>
                                            Some quick example text to build on the card title
                                        </Card.Text>
                                        <hr></hr>
                                        <div className='card-price-section'>
                                            <div>
                                                <Card.Text className='card-text-rate'><i class="bi bi-currency-rupee"></i>{data.Card_Price} </Card.Text>
                                                <Card.Text className='card-text-price'> Starting Price</Card.Text>
                                            </div>
                                            <Button variant="dark">Select</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                    ))
                }

            </Row>

        </div>
    );
}

export default FourthContainer;
