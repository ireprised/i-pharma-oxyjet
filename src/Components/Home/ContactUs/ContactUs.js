import React from 'react';

const ContactUs = () => {
    return (
        <div className="w-50 mx-auto my-4">
            <h2 className="my-4 text-center">Contact Us</h2>
         <form>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name"/>
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}}></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>  
                    
                    <div className="text-center">
                        <button type="submit" className="btn btn-info text-white fs-5 m-4 mx-auto w-25">Submit</button>
                    </div>
            </form>
        </div>
    );
};

export default ContactUs;