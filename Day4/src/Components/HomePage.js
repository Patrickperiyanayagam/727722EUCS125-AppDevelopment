import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import facebook from '../Assets/fb.png';
import homeimage from '../Assets/homeimage.jpg';
import instagram from '../Assets/insta.png';
import twitter from '../Assets/twitter.png';
import '../StylingComponents/HomePage.css';
// import PlayWrite from '..\\Fonts\\Playfair_Display,Playwrite_AR,Sedan\\Playwrite_AR\\static\\PlaywriteAR-Regular.ttf';
export default function HomePage() {
  const navigate = useNavigate()
    return (
    <>
    <div className='home_body'>
        <div className='home_navbar'>
        <div className='home_webname'>
            {/* <p style={{fontFamily:{PlayWrite}}}>Logzz</p> */}
            <p>Logzz</p>
        </div>
        <div className='home_navlinks'>
          <Link to='home' smooth={true} offset={-100} className='home_links' >Home</Link>
          <Link to='about' smooth={true} offset={-100} className='home_links'>About</Link>
          <Link to='service' smooth={true} offset={-100} className='home_links'>Service</Link>
          <Link smooth={true} offset={-100} className='home_links' onClick={()=>{navigate("/login")}}>Login</Link>
        </div>
      </div>

      <div className='home' id='home'>
        <div className='homecontent'>
          <h1>Unlocking Logistics <br/>Excellence For Your <br/>Bussiness Success</h1>
          <h4>Focused on Delivery specially for E-Commerce <br/>Strategic Patnership Carrier Relationships</h4>
          <div className='homeorder'>
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className='homeimg'>
          <img src={homeimage} alt='homeimage'></img>
        </div>
      </div>

      <div className='about' id='about'>
        <div className='aboutimg'>
          <img src='https://img.freepik.com/premium-photo/front-view-delivery-male-with-package_23-2148590744.jpg' alt='aboutimage'></img>
        </div>
        <div className='aboutmsg'>
          <h1>Our Mission</h1>
          <h5>We have been on a mission to redefine the logistics landscape.What we have began as a vision to simplify complex 
            supply chain challenges has evolved into a dynamic force that powers the movement of goods across borders, oceans 
            and continents. Our journey is marked by a commitment to excellence, a passion for innovation and a relentless 
            pursuit of customer satisfaction</h5>
        </div>
      </div>

      <div className='benefits'>
        <div className='benefitscontent'>
          <h1>Benefits of Choosing Us</h1>
          <div className='benefitbox'>  
            <h1>Global Search</h1>
            <h3>With a network that spans the globe we bring the world closer to your bussiness</h3>
          </div>
          <div className='benefitbox'>  
            <h1>Technology Integration</h1>
            <h3>We leverage the lastest technology to bring transparency and visibility to your support chain</h3>
          </div>
          <div className='benefitbox'>  
            <h1>Customer-Centric Approach</h1>
            <h3>We prioritize understanding your unique logistics needs tailoring our services to meet your specific requirements</h3>
          </div>
        </div>
        <div className='benefitsimage'>
          <img src='https://media.istockphoto.com/id/1367106352/photo/a-warehouse-worker-takes-inventory-in-the-storage-room.jpg?s=612x612&w=0&k=20&c=l4GTpUKwcj7LM09WJx3--Z056vXIEgl6rEjmlEE8FfE=' alt='benefitimage'></img>
        </div>
      </div>
      <div className='homecat' id='service'>
        <h1>Elevating Your Logistics Experience<br/>With a Spectrum Of Tailored Services</h1>
        <h3>Unleash the full potential of your supply chain with our diverse of logistics
          <br/>services designed to seamlessly integrate with your bussiness  objectives
        </h3>
        <div className='homecatbox'>
          <div className='catbox'>
            <img src='https://w7.pngwing.com/pngs/949/554/png-transparent-business-logo-logistics-transport-business-blue-hat-text-thumbnail.png' style={{borderRadius:'50%',width:'50px',height:'50px'}} alt='frieghttransportation'></img>
            <h1>Freight Transportation</h1>
            <h3>Whether by land, sea and air, our transportation solutions are designed for reliability and speed.From local deliveries to international shipments,we connect your bussiness to the world</h3>
          </div>
          <div className='catbox'>
            <img src='https://e7.pngegg.com/pngimages/208/61/png-clipart-computer-icons-warehouse-box-logistics-logistics-miscellaneous-blue.png' style={{borderRadius:'50%',width:'50px',height:'50px'}} alt='warehouseimage'></img>
            <h1>WareHouse and Distribution</h1>
            <h3>Our state of the art warehouses are strategically located to ensure storage and distribution.We provide end-to-end solutions for inventory management and order fulfilment</h3>
          </div>
          <div className='catbox'>
            <img src='https://w7.pngwing.com/pngs/664/689/png-transparent-supply-chain-management-operations-management-organization-others-miscellaneous-blue-text.png' style={{borderRadius:'50%',width:'50px',height:'50px'}} alt='supplychainmanagement'></img>
            <h1>Supply Chain Management</h1>
            <h3>Navigate the complexities of the supply chain is our expertise , from procurement to delivery. We optimize each stage to enhance the overall efficiency of your supply chain</h3>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='name'>
          <h1>Logzz</h1>
          <h1>Follow us on</h1>
          <div className='logo'>
            <img className='img' src={instagram} alt='instagram'></img>
            <img className='img' src={facebook} alt='instagram'></img>
            <img className='img' src={twitter} alt='instagram'></img>
          </div>
        </div>
        <div className='footermenu'>
          <h1>Links</h1>
          <Link to='home' smooth={true} className='footerlinks'>Home</Link>
          <Link to='about' smooth={true} className='footerlinks'>About</Link>
          <Link to='service' smooth={true} className='footerlinks'>Service</Link>
          <Link to='/login' smooth={true} className='footerlinks' onClick={()=>{navigate("/login")}}>Login</Link>
        </div>
        <div className='footercontact'>
          <h1>Contact</h1>
          <h3>+123456789</h3>
          <h3>Explore</h3>
          <h3>Info@Logzz.com</h3>
          <h3>Hosur,India</h3>
        </div>
      </div>
    </div>
    </>
    )
}
