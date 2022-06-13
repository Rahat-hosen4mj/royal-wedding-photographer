import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block h-50 w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption className='text-info'>
            <h3>Wedding Package</h3>
            <p>Beginning at 6 hours coverage. Professional image processing</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
  
          <Carousel.Caption className='text-info'>
            <h3>Couple Package</h3>
            <p>Beginning at 4 hours coverage. Professional image processing</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Second slide"
          />
  
          <Carousel.Caption className='text-info'>
            <h3>PreWedding Package</h3>
            <p>Beginning at 2 hours coverage. Professional image processing</p>
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    );
};

export default Banner;