import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fourCardData } from '../Utils/CardData';
const SecondContainer = () => {
    return (
        <>

            <div class="d-flex justify-content-between" style={{ marginTop: '50px',padding:'0px 50px 0px 70px'}}>
                <div className='text-title-container' style={{marginRight:'30px'}}>
                    <div className='text-second-container'>
                        valite officia consequate
                    </div>
                    <div className='title-second-container' >
                        Lorem ipsum dolor sit amet
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: "center", marginTop: "40px" }}>
                        <div className='second-seemore' >Seemore</div>
                        <i class="bi bi-arrow-right" style={{ fontSize: '25px' }}></i>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-around"  style={{ marginTop: '90px' ,padding:'0px 40px 0px 40px'}}>
                {
                    fourCardData.map((data) => (
                        <Card style={{ width: '200px', height: '380px' }} id='second-container-card'>
                            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg" />
                            <Card.ImgOverlay>
                                <i class="bi bi-heart " style={{ fontSize: '25px', marginLeft: '150px', color: 'white' }} ></i>
                            </Card.ImgOverlay>
                            <Card.Body>
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
                                Amet minim mollit non deserunt ullamco est sit.
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
                    ))
                }
            </div>

        </>
    );
}

export default SecondContainer;
