import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import Blogs from './Blogs/Blogs';
import ContactUs from './ContactUs/ContactUs';
import Partners from './Partners/Partners';
import Services from './Services/Services';
import Slider from './Slider/Slider';


const Home = () => {
    return (
        <div>
        
         
         <Slider></Slider>
         <Services></Services>
         <Blogs></Blogs>
         <Partners></Partners>
         <AboutUs></AboutUs>
         <ContactUs></ContactUs> 
         
      
        </div>
    );
};

export default Home;