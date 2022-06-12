import React from 'react';

const Service = ({service}) => {
    const {name, price, description,img } = service;
    return (
    
    <div className='service'>
    <img className='w-75 border border-primary' src={img} alt="" />
    <h5 className='text-secondary mt-4'>{name}</h5>
    <h6 className='text-success'>{price}</h6>
    <p><small>{description}</small></p>
   <button className='btn btn-primary'>Book : {name}</button>
    
</div>
);
};

export default Service;