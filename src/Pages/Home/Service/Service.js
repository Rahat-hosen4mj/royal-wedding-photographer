import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {name, price, description,img,id } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
    return (
    
    <div className='service'>
    <img className='w-75 border border-primary' src={img} alt="" />
    <h5 className='text-primary mt-4'>{name}</h5>
    <h6 className='text-success'>{price}</h6>
    <p><small>{description}</small></p>
   <button onClick={() =>navigateToServiceDetail(id)} className='btn btn-success'>Service Details</button>
    
</div>
);
};

export default Service;