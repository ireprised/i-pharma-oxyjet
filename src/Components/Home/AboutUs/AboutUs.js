import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h2 className="my-5 text-center">About US</h2>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <p className="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam aut quis numquam accusamus aspernatur mollitia vel beatae! Totam illo consequuntur sapiente, ex distinctio, ullam repellat cupiditate dolorem minus quasi assumenda quas fugit similique iste incidunt eius culpa numquam pariatur!</p>
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