import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>Welcome to service detail page</h2>
      <h3>Service Details are now under constructing...!</h3>
      <h3>But I can ensure that My Work will appriciate You</h3>
      <div>
        <Link to="/booking">
          <button className="btn btn-primary">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;