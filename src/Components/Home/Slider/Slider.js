import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
          <Carousel fade>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="./images/1.png"
                alt="First slide"
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="./images/2.png"
                alt="Second slide"
                />
                
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="./images/3.png"
                alt="Third slide"
                />
                
            </Carousel.Item>
            <Carousel.Item interval={1800}>
                <img
                className="d-block w-100"
                src="./images/4.png"
                alt="fourth slide"
                />
                
            </Carousel.Item>
         </Carousel>
        </div>
    );
};

export default Slider;