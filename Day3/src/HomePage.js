import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Homepage.css';
export default function HomePage() {
    const navigate = useNavigate()
  return (
    <div className='body'>
        <div className='navbar'>
        <div className='webname'>
            <p>Logzz</p>
        </div>
        <div className='navlinks'>
          <Link to='home' smooth={true} offset={-100} className='links' >Home</Link>
          <Link to='about' smooth={true} offset={-100} className='links'>About</Link>
          <Link to='service' smooth={true} offset={-100} className='links'>Service</Link>
          <Link to='menu' smooth={true} offset={-100} className='links'>Menu</Link>
          <Link smooth={true} offset={-100} className='links' onClick={()=>{navigate("/login")}}>Login</Link>
        </div>
      </div>

      <div className='home' id='home'>
        <div className='homecontent'>
          <h1>Trusted Global <br/>Logistics Service</h1>
          <h4>Focused on Delivery specially for E-Commerce <br/>Strategic Patnership Carrier Relationships</h4>
          <div className='homeorder'>
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className='homeimg'>
          <img src='https://c0.wallpaperflare.com/preview/232/530/323/logistics-truck-frachtschiff-group.jpg' alt='fastfoodimg'></img>
        </div>
      </div>

      <div className='about' id='about'>
        <div className='aboutimg'>
        <img src='https://img.freepik.com/premium-photo/happy-construction-crew-posing-group-photo-highquality-4k-image_27525-25542.jpg' alt='chef'></img>
        </div>
        <div className='aboutcontent'>
          <h1>About us</h1>
          <h4>Discover our Logistics Service</h4>
          <p>Welcome to Logzz, where innovation meets logistics. Our comprehensive management system is designed to streamline your supply chain operations, ensuring timely deliveries, reduced costs, and enhanced customer satisfaction. Join us in transforming logistics management for the better</p>
        </div>
      </div>

      <div className='footer'>
        <div className='name'>
          <h1>Logzz</h1>
        </div>
        <div className='footermenu'>
          <h1>Links</h1>
          <Link to='home' smooth={true} className='footerlinks'>Home</Link>
          <Link to='about' smooth={true} className='footerlinks'>About</Link>
          <Link to='service' smooth={true} className='footerlinks'>Service</Link>
          <Link to='menu' smooth={true} className='footerlinks'>Menu</Link>
        </div>
        <div className='contact'>
          <h1>Contact</h1>
          <h3>+123456789</h3>
          <h3>Explore</h3>
          <h3>Info@Logzz.com</h3>
          <h3>Hosur,India</h3>
        </div>
      </div>
    </div>
  )
}
