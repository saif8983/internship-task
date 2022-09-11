import React from 'react';
import { Button } from 'react-bootstrap';

const ThirdContainer = () => {
    return (
        <>
            <div class="d-flex justify-content-between  " style={{ margin: '20px 100px 20px 100px', marginTop: '20px' }}>
                <div><img src='images/image-third.png' style={{ borderRadius: "6px" }}></img></div>
                <div class="d-flex flex-column mt-5">
                    <div className='text-third-container'>valite officia consequate</div>
                    <div className='title-third-container'>Lorem ipsum dolor,<br></br>
                        amet consectetur<br></br>
                        adipicing elit.
                    </div>
                    <div className='button-third-container'>Start Your Journey as <Button variant="outline-dark">Freelancer <i class="bi bi-arrow-right "></i></Button></div>
                </div>
            </div>

        </>
    );
}

export default ThirdContainer;
