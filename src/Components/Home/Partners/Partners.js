import React from 'react';


const Partners = () => {
    return (
        <div>
            <h2 className="my-4 text-center">Our Partners</h2>
            <div id="carouselExampleControls" className="carousel slide g-4 px-4 w-75 mx-auto" data-bs-ride="carousel">
                
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-3">
                                <img src="./images/partners/1.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-3">
                                <img src="./images/partners/2.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-3">
                                <img src="./images/partners/3.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-3">
                                <img src="./images/partners/4.jpg" className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    
                    </div>


                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-3">
                                <img src="./images/partners/5.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-3">
                                <img src="./images/partners/6.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-3">
                                <img src="./images/partners/7.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-3">
                                <img src="./images/partners/8.jpg" className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    
                    </div>
                    
                    
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
                </div>
        </div>
    );
};

export default Partners;