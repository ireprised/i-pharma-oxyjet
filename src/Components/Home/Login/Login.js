import React, { useState } from 'react';
import { Link, useLocation, useHistory, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const Login = () => {
    const { signInUsingGoogle,singnUser } = useAuth();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {serviceID} = useParams();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || `/services/${serviceID}`;
    
        
        const handleEmailChange = e => {
            setEmail(e.target.value)
        }
        const handlePasswordChange = e => {
            setPassword(e.target.value)
        }
        const handleUserLogin = (e) => {
            
            singnUser(email,password)
            .then(result=>{
                history.push(redirect_uri)
            })
            
            
        } 

        const handleGoogleLogin = (e) => {
            signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
        }

     return (
        <div>
            <section className="vh-100" style={{backgroundColor: '#eee'}}>
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black"style={{borderRadius: '25px'}} >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>

                                        <form className="mx-1 mx-md-4" >

                                    

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                            <input type="email" onBlur={handleEmailChange} id="form3Example3c" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                            <input type="password" onBlur={handlePasswordChange} id="form3Example4c" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                                            </div>
                                        </div>



                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="button" onClick={handleUserLogin} className="btn btn-primary btn-lg">Login</button>
                                        </div>

                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button onClick={handleGoogleLogin} type="button" className="btn btn-primary btn-lg"><i className="fab fa-google">OOGLE</i></button>
                                        </div>

                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <Link to="/register">New here</Link>
                                        </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="kl"/>

                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </section>
        </div>
    );
};

export default Login;