import React from 'react';
import profile from '../../images/profile.png';

const About = () => {
    return (
        <div className='text-start'>
             <section className="container py-5">
            <div className="row gx-5 ">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="p-3">
                        <img className="img-fluid rounded" src={profile} alt="" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="p-3 mt-5">
                        <h2 className='text-success'>About Me</h2>
                        <p>My first goals is Web developer and to create and lead a dream team where everyone is playing to their strengths and to help project managers transform into impactful project leaders.Another one is to Become a good listener. The best listeners usually end up having good relationships in life.</p>
                        <button className='btn btn-success'>Read More</button>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default About;