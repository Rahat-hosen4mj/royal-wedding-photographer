import React from 'react';
import Banner from '../Banner/Banner';
import PreviousTasks from '../PreviousTasks/PreviousTasks';
import Services from '../Services/Services';

const Home = () => {
  
    return (
        <div>
            <Banner />
           <Services />
           <PreviousTasks />
        </div>
    );
};

export default Home;