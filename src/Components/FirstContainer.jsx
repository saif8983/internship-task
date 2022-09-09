import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import '../App.css'
import ListGroup from 'react-bootstrap/ListGroup';
import threeCardData from '../Utils/CardData';
const FirstContainer = () => {
    return (
       <>
       <div className='flex-card'>
       <div>
       <div className='text-first-container'>
            valite officia consequate
        </div>
        <div className='title-first-container'>
          Lorem ipsum dolor<br></br>
          amet ,consectetur<br></br>
          adipicing
        </div>
        </div>
       {threeCardData.map((data)=>(
        <Card style={{ width: '255px',height:'380px'}}>
<Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg" />
<Card.ImgOverlay>
<i class="bi bi-heart " style={{fontSize:'25px',marginLeft:'200px',color:'white'}} ></i>
</Card.ImgOverlay>
<Card.Body>
<div style={{display:'flex'}}>
<div className="card-profile-img" > </div>
<div>
<Card.Title className='card-title' style={{marginLeft:'10px'}}>{data.Card_Title}</Card.Title>
<Card.Text className='card-text-profile'>View Profile</Card.Text>
</div>
</div>
<div style={{display:'flex'}}>
<Card.Title className='card-title-rating' >{data.Card_Rating}</Card.Title>
<div style={{marginLeft:'10px'}}>
<i class="bi bi-star-fill" id='start-card'></i>
<i class="bi bi-star-fill" id='start-card'></i>
<i class="bi bi-star-fill" id='start-card'></i>
<i class="bi bi-star-fill" id='start-card'></i>
<i class="bi bi-star-half" id='start-card'></i>
</div>
</div>
<Card.Text className='card-text-description'>
Some quick example text to build on the card title and make up the
bulk of the card's content.
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

       ))}
        
        </div>
       </>
    );
}

export default FirstContainer;
