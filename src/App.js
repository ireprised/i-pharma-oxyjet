import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/Home/AboutUs/AboutUs';
import Blogs from './Components/Home/Blogs/Blogs';
import ContactUs from './Components/Home/ContactUs/ContactUs';
import Home from './Components/Home/Home';
import Login from './Components/Home/Login/Login';
import Register from './Components/Home/Register/Register';
import Service from './Components/Home/Service/Service';
import Services from './Components/Home/Services/Services';
import NotFound from './Components/NotFound/NotFound';
import PrivacyAndPolicy from './Components/Others/PrivacyAndPolicy/PrivacyAndPolicy';
import TermsAndCondition from './Components/Others/TermsAndCondition/TermsAndCondition';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/service/:serviceID'>
            <Service></Service>
          </Route>
          <Route path='/blogs'>
            <Blogs></Blogs>
          </Route>
          <Route path='/about-us'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/contact-us'>
            <ContactUs></ContactUs>
          </Route>
          <Route path='/terms'>
            <TermsAndCondition></TermsAndCondition>
          </Route>
          <Route path='/privacy'>
            <PrivacyAndPolicy></PrivacyAndPolicy>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
