
import React, { useState } from 'react';
import Chart from "react-apexcharts";
import { Link } from 'react-scroll';
import analysispic from '../Assets/analysis.png';
import dashboardpic from '../Assets/dashboard-gray.png';
import logo from '../Assets/detailed-travel-logo.png';
import logoutpic from '../Assets/logout.png';
import messagepic from '../Assets/message.png';
import settingspic from '../Assets/settings.png';
import transportpic from '../Assets/truck.png';
import '../StylingComponents/UserDashboard.css';

export default function UserDashboard() {
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
                <img src='https://img.freepik.com/free-vector/happy-salesman-character-with-flat-design_23-2147875825.jpg?uid=R107950263&ga=GA1.2.303249494.1719822068&semt=ais_user' alt='userimg' width={40} height={40}></img>
                <div style={{display:'flex',justifyContent:'center',alignItems:'start',flexDirection:'column'}}>
                    <h3>Patrick</h3>
                    <h4>User</h4>
                </div>
            </div>
            <h3 style={{paddingTop:'30px'}}>Menu</h3>
            {/* <div onClick={a("dashboard")}> */}
                <Link to='userdashboard' smooth={true} offset={-100} className={navdashboard ? 'userbox userboxclicked' : 'userbox'} onClick={()=>{a("dashboard")}}>
                    <img src={dashboardpic} alt='dashboard'></img>
                    <h3 >Dashboard</h3>
                </Link>
            {/* </div> */}
            <Link to='useranalytics' smooth={true} offset={-100} className={navanalysis ? 'userbox userboxclicked' : 'userbox'} onClick={()=>{a("analysis")}}>
                <img src={analysispic} alt='analysis'></img>
                <h3>Analytics</h3>
            </Link>
            <Link to='usershipments' smooth={true} offset={-100} className={navtransport ? 'userbox userboxclicked' : 'userbox'} onClick={()=>{a("transport")}}>
                <img src={transportpic} alt='transport'></img>
                <h3>Shipments</h3>
            </Link>
            <Link to='usermessage' smooth={true} offset={-100} className={navmessage ? 'userbox userboxclicked' : 'userbox'} onClick={()=>{a("message")}}>
                <img src={messagepic} alt='message'></img>
                <h3>Message</h3>
            </Link>
            <h3 style={{paddingTop:'30px'}}>Accounts</h3>
            <Link to='settings' smooth={true} offset={-100} className='userbox'>
                <img src={settingspic} alt='settings'></img>
                <h3>Settings</h3>
            </Link>
            <Link className='userbox'>
                <img src={logoutpic} alt='logout'></img>
                <h3>LogOut</h3>
            </Link>
        </div>
        {/* adminsidebar ends */}
        <div className='usercontent'>
            <h2>Dashboard</h2>
            <div className='userboxsection' id='userdashboard'>
                <div className='usercontentbox'>
                    <div style={{display:'flex',gap:'40px',justifyContent:'space-around',alignItems:'center'}}>
                        <div className='usercontentboxvalues'>
                            <h4>My Shipments</h4>
                            <h2>13423</h2>
                        </div>
                        <img src='https://cdn-icons-png.flaticon.com/128/411/411763.png' alt='shipment'></img>
                    </div>
                    <h4>Vs Life Time</h4>
                </div>

                <div className='usercontentbox'>
                    <div style={{display:'flex',gap:'70px',justifyContent:'space-around',alignItems:'center'}}>
                        <div className='usercontentboxvalues'>
                            <h4>My Order</h4>
                            <h2>13423</h2>
                        </div>
                        <img src='https://cdn-icons-png.flaticon.com/128/411/411763.png' alt='shipment'></img>
                    </div>
                    <h4>Vs Life Time</h4>
                </div>
                
                <div className='usercontentbox'>
                    <div style={{display:'flex',gap:'90px',justifyContent:'center',alignItems:'center'}}>
                        <div className='usercontentboxvalues'>
                            <h4>My Bills</h4>
                            <h2>13423</h2>
                        </div>
                        <img src='https://cdn-icons-png.flaticon.com/128/411/411763.png' alt='shipment'></img>
                    </div>
                    <h4>Vs Life Time</h4>
                </div>

                <div className='usercontentbox'>
                    <div style={{display:'flex',gap:'90px',justifyContent:'center',alignItems:'center'}}>
                        <div className='usercontentboxvalues'>
                            <h4>Delivered</h4>
                            <h2>13423</h2>
                        </div>
                        <img src='https://cdn-icons-png.flaticon.com/128/411/411763.png' alt='shipment'></img>
                    </div>
                    <h4>Vs Life Time</h4>
                </div>

            </div>
            {/* adminstats ends */}
            <h2>Analytic View</h2>
            <div id='useranalytics' className='analyticsportion'>

            <Chart options={options} series={series} type="area" />


            
            </div>
            {/* analystics ends */}
            <div className='usertrackorder' id='usershipments'>
                <div style={{paddingLeft:'20px',paddingTop:'20px',display:'flex',alignItems:'center',gap:'20px',paddingBottom:'20px'}}>
                    <img src='https://cdn-icons-png.flaticon.com/128/7480/7480410.png' alt='order' width={50} height={50}></img>
                    <h2>Tracking Order</h2>
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
        </div>
    </div>
    )
}
