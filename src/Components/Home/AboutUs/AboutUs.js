import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h2 className="my-5 text-center">About US</h2>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <p className="fs-4 text-justify">I-PHARMA is happily introduced their first ever ventilation machine developed by OXYJET team from BUET.  We are ready for all kinds of shipping and deliver all kinds of medical eqipment from over the world. There are several things we are going to introduce to whole world which are more important and innovative tech in medical field.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="fluid w-75" src="./images/aboutus/aboutus.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;