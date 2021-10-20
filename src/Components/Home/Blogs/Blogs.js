import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className="my-4 text-center">Our Blogs</h2>

            <div className="row g-4 px-4 w-75 mx-auto">
                    <div className="col-sm-6">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4 g-0">
                                <img src="./images/blogs/2.png" className="img-fluid rounded-start g-0" alt="..."/>
                            </div>
                            <div className="col-md-8 d-flex align-items-center">
                                <div className="card-body">
                                    <h5 className="card-title text-info">Oxyjet is ready for use</h5>
                                    <p className="card-text">At its core, OxyJet is a precision venturi-based system that uses the pressure of the medical oxygen source to generate a high-flow of air and oxygen mixture by the jet-mixing principle.</p>
                                    </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src="./images/blogs/3.png" className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8 d-flex align-items-center">
                            <div className="card-body">
                                <h5 className="card-title text-info">Useful and Helpful too</h5>
                                <p className="card-text">Bangladesh Medical Research Council (BMRC) we have performed clinical trial phase I on healthy volunteers (n=5) to evaluate the preliminary safety of the device. No statistically significant changes were observed on the physiological measurements of the volunteers before and after the trial.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4 g-0">
                                <img src="./images/blogs/4.png" className="img-fluid rounded-start g-0" alt="..."/>
                            </div>
                            <div className="col-md-8 d-flex align-items-center">
                                <div className="card-body">
                                    <h5 className="card-title text-info">Cheap but Useful</h5>
                                    <p className="card-text">OxyJet, is a low-cost non-invasive ventilator to designed to treat Covid-19 patients. The device can provide 60 L/min of oxygen with up to 100% concentration without any electricity.</p>
                                    </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src="./images/blogs/1.png" className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8 d-flex align-items-center">
                            <div className="card-body">
                                <h5 className="card-title text-info">Situation in CORONA</h5>
                                <p className="card-text">The Covid-19 pandemic has strained the hospital systems in many countries in the world, especially in the developing countries. Most hospital wards in developing countries cannot provide more than 15 liters/min of oxygen.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Blogs;