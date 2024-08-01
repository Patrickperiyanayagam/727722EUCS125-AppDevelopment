
import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import analyticsblue from '../Assets/analyticsblue.png';
import analyticsgray from '../Assets/analyticsgray1.png';
import dashboardblue from '../Assets/dashboardblue.png';
import dashboardgray from '../Assets/dashboardgray.png';
import delivered from '../Assets/delivered.png';
import deliveryblue from '../Assets/delivery-truck blue.png';
import delivergray from '../Assets/delivery-truckgray.png';
import logo from '../Assets/logoimg.png';
import logout from '../Assets/logout.png';
import messageblue from '../Assets/messageblue.png';
import messagegray from '../Assets/messagegray.png';
import money from '../Assets/money.png';
import order from '../Assets/order.png';
import profilelogo from '../Assets/profilelogo.png';
import settings from '../Assets/settings.png';
import shipmentbox from '../Assets/shipmentbox.png';
import { useStateContext } from '../Context/ContextProvider';
import '../StylingComponents/UserDashboard.css';
import UserFeedback from './UserFeedback';
import UserNotifications from './UserNotification';

export default function UserDashboard() {
    useEffect(()=>{
        document.title = 'User Dashboard';

    })
    const {userdetails} = useStateContext()
    const navigate = useNavigate();
    const [navdashboard,setdashboard] = useState(false)
    const [navanalysis,setanalysis] = useState(false)
    const [navtransport,settransport] = useState(false)
    const [navmessage,setmessage] = useState(false)


    const a = (value)=>{
        setdashboard(false)
        setanalysis(false)
        settransport(false)
        setmessage(false)
        if(value === "dashboard"){
            setdashboard(true)
        }
        if(value === "analysis"){
            setanalysis(true)
        }
        if(value === "transport"){
            settransport(true)
        }
        if(value === "message"){
            setmessage(true)
        }
    }

    const options = {
        xaxis: {
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        }
        };
    const series = [
        {
            name: "series-1",
            data: [30, 40, 25, 50, 49, 21, 70, 51]
        }
    ];


return (
    <div className='userbody'>
        <div className='usersidebar'>
            <div className='userlogo'>
                <img src={logo} alt='logoimg'></img>
                <div>
                <h1>Logzz</h1>
                <h4>User Panel</h4>
                </div>
            </div>
            <hr style={{width:'150px'}}></hr>
            <div className='userpic'>
                <img src={profilelogo} alt='userimg' width={40} height={40}></img>
                <div style={{display:'flex',justifyContent:'center',alignItems:'start',flexDirection:'column'}}>
                    <h3>{userdetails.name}</h3>
                    <h4>User</h4>
                </div>
            </div>
            <h3 style={{paddingTop:'15px',color:'gray',fontFamily:"Poppins sans-serif",fontSize:'24px',fontWeight:'600'}}>Menu</h3>
            <hr style={{width:'150px'}}></hr>
            {/* <div onClick={a("dashboard")}> */}
                <Link to='userdashboard' smooth={true} offset={-100} className={navdashboard ? 'userbox userboxclicked' : 'userbox'} onClick={()=>{a("dashboard")}}>
                { navdashboard ? <img src={dashboardblue} alt='dashboard'></img> : <img src={dashboardgray} alt='dashboard'></img>}
                    <h3 >Dashboard</h3>
                </Link>
            {/* </div> */}
            <Link to='useranalytics' smooth={true} offset={-100} className={navanalysis ? 'userbox userboxclicked' : 'userbox'} onClick={()=>{a("analysis")}}>
            { navanalysis ? <img src={analyticsblue} alt='dashboard'></img> : <img src={analyticsgray} alt='dashboard'></img>}
                <h3>Analytics</h3>
            </Link>
            <Link to='usershipments' smooth={true} offset={-100} className={navtransport ? 'userbox userboxclicked' : 'userbox'} onClick={()=>{a("transport")}}>
            { navtransport ? <img src={deliveryblue} alt='dashboard'></img> : <img src={delivergray} alt='dashboard'></img>}
            <h3>Shipments</h3>
            </Link>
            <Link to='usermessage' smooth={true} offset={-100} className={navmessage ? 'userbox userboxclicked' : 'userbox'} onClick={()=>{a("message")}}>
            { navmessage ? <img src={messageblue} alt='dashboard'></img> : <img src={messagegray} alt='dashboard'></img>}
                <h3>Message</h3>
            </Link>
            <h3 style={{paddingTop:'15px',color:'gray',fontFamily:"Poppins sans-serif",fontSize:'24px',fontWeight:'600'}}>Accounts</h3>
            <hr style={{width:'150px'}}></hr>
            <Link to='settings' smooth={true} offset={-100} className='userbox'>
            <img src={settings} alt='settings'></img>
                <h3>Settings</h3>
            </Link>
            <Link className='userbox' onClick={()=>{navigate("/")}}>
            <img src={logout} alt='logout'></img>
                <h3>LogOut</h3>
            </Link>
        </div>
        {/* adminsidebar ends */}
        <div className='usercontent'>
            <h2 style={{fontFamily:"Poppins,sans-serif",fontSize:'30px',fontWeight:'600'}}>Dashboard</h2>
            <div className='userboxsection' id='userdashboard'>
                <div className='usercontentbox'>
                    <div style={{display:'flex',gap:'20px',justifyContent:'space-around',alignItems:'center'}}>
                        <div className='usercontentboxvalues'>
                            <h4>My Shipments</h4>
                            <h2>32</h2>
                        </div>
                        <img src={shipmentbox} alt='shipment'></img>
                    </div>
                    <h4>Vs Life Time</h4>
                </div>

                <div className='usercontentbox'>
                    <div style={{display:'flex',gap:'55px',justifyContent:'space-around',alignItems:'center'}}>
                        <div className='usercontentboxvalues'>
                            <h4>My Order</h4>
                            <h2>65</h2>
                        </div>
                        <img src={order} alt='shipment'></img>
                    </div>
                    <h4>Vs Life Time</h4>
                </div>
                
                <div className='usercontentbox'>
                    <div style={{display:'flex',gap:'45px',justifyContent:'center',alignItems:'center'}}>
                        <div className='usercontentboxvalues'>
                            <h4>My Bills</h4>
                            <h2>$935</h2>
                        </div>
                        <img src={money} alt='shipment'></img>
                    </div>
                    <h4>Vs Life Time</h4>
                </div>

                <div className='usercontentbox'>
                    <div style={{display:'flex',gap:'70px',justifyContent:'center',alignItems:'center'}}>
                        <div className='usercontentboxvalues'>
                            <h4>Delivered</h4>
                            <h2>45</h2>
                        </div>
                        <img src={delivered} alt='shipment'></img>
                    </div>
                    <h4>Vs Life Time</h4>
                </div>

            </div>
            {/* adminstats ends */}
            <h2 style={{fontFamily:"Poppins,sans-serif",fontSize:'30px',fontWeight:'600'}}>Analytic View</h2>
            <div id='useranalytics' className='analyticsportion'>

            <Chart options={options} series={series} type="area" />


            
            </div>
            {/* analystics ends */}
            <div className='usertrackorder' id='usershipments'>
                <div style={{paddingLeft:'20px',paddingTop:'20px',display:'flex',alignItems:'center',gap:'20px',paddingBottom:'20px'}}>
                    <img src='https://cdn-icons-png.flaticon.com/128/7480/7480410.png' alt='order' width={50} height={50}></img>
                    <h2 style={{fontFamily:"Poppins,sans-serif",fontSize:'24px',fontWeight:'600'}}>Tracking Order</h2>
                </div>
                <div className='userordertablehead'>
                    <div className='userordercheckbox'>
                        <input type='checkbox' style={{width:'15px',height:'15px',borderRadius:'20px'}}></input>
                    </div>
                    <div className='userorderId'>
                        <h5>ORDER ID</h5>
                    </div>
                    <div className='userordercategory'>
                        <h5>CATEGORY</h5>
                    </div>
                    <div className='userorderarrivaltime'>
                        <h5>ARRIVAL TIME</h5>
                    </div>
                    <div className='userorderweight'>
                        <h5>WEIGHT</h5>
                    </div>
                    <div className='userorderroute'>
                        <h5>ROUTE</h5>
                    </div>
                    <div className='userorderfee'>
                        <h5>FEE</h5>
                    </div>
                    <div className='userorderstatus'>
                        <h5>STATUS</h5>
                    </div>
                </div>

                <div className='userordertablevalue'>
                    <div className='userordercheckbox'>
                        <input type='checkbox' style={{width:'15px',height:'15px',borderRadius:'20px'}}></input>
                    </div>
                    <div className='userorderId'>
                        <h5>#01234ABCD</h5>
                    </div>
                    <div className='userordercategory'>
                        <h5>Electronic</h5>
                    </div>
                    <div className='userorderarrivaltime'>
                        <h5>7/1/2024</h5>
                    </div>
                    <div className='userorderweight'>
                        <h5>25Kg</h5>
                    </div>
                    <div className='userorderroute'>
                        <h5>Hosur to Chennai</h5>
                    </div>
                    <div className='userorderfee'>
                        <h5>$1000</h5>
                    </div>
                    <div className='userorderstatus'>
                        <h5>STATUS</h5>
                    </div>
                </div>

                <div className='userordertablevalue'>
                    <div className='userordercheckbox'>
                        <input type='checkbox' style={{width:'15px',height:'15px',borderRadius:'20px'}}></input>
                    </div>
                    <div className='userorderId'>
                        <h5>#ABCD1234</h5>
                    </div>
                    <div className='userordercategory'>
                        <h5>Furniture</h5>
                    </div>
                    <div className='userorderarrivaltime'>
                        <h5>7/1/2024</h5>
                    </div>
                    <div className='userorderweight'>
                        <h5>50Kg</h5>
                    </div>
                    <div className='userorderroute'>
                        <h5>Coimbatore to Chennai</h5>
                    </div>
                    <div className='userorderfee'>
                        <h5>$2500</h5>
                    </div>
                    <div className='userorderstatus'>
                        <h5>STATUS</h5>
                    </div>
                </div>

            </div>
            <UserNotifications/>
            <UserFeedback/>
        </div>
    </div>
    )
}
