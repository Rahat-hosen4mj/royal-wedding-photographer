import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div className="text-center">
      <h2>Welcome to service detail page</h2>
      <p>Your service id number is : {serviceId}</p>
      <div>
        <Link to="/checkout">
          <button className="btn btn-primary">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;