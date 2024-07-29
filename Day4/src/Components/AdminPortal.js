
import React from 'react';
import Chart from "react-apexcharts";
import { Link } from 'react-scroll';
import analysis from '../Assets/analysis.png';
import dashboard from '../Assets/dashboard-gray.png';
import logo from '../Assets/detailed-travel-logo.png';
import logout from '../Assets/logout.png';
import message from '../Assets/message.png';
import settings from '../Assets/settings.png';
import transport from '../Assets/truck.png';
import '../StylingComponents/AdminPortal.css';

export default function AdminPortal() {


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
    <div className='adminbody'>
        <div className='adminsidebar'>
            <div className='adminlogo'>
                <img src={logo} alt='logoimg'></img>
                <div>
                <h1>Logzz</h1>
                <h4>Admin Panel</h4>
                </div>
            </div>
            <hr style={{width:'150px'}}></hr>
            <div className='adminpic'>
                <img src='https://img.freepik.com/free-vector/happy-salesman-character-with-flat-design_23-2147875825.jpg?uid=R107950263&ga=GA1.2.303249494.1719822068&semt=ais_user' alt='userimg' width={40} height={40}></img>
                <div style={{display:'flex',justifyContent:'center',alignItems:'start',flexDirection:'column'}}>
                    <h3>Patrick</h3>
                    <h4>Head Manager</h4>
                </div>
            </div>
            <h3 style={{paddingTop:'30px'}}>Menu</h3>
            <Link to='dashboard' smooth={true} offset={-100} className='adminbox'>
                <img src={dashboard} alt='dashboard'></img>
                <h3>Dashboard</h3>
            </Link>
            <Link to='analytics' smooth={true} offset={-100} className='adminbox'>
                <img src={analysis} alt='analysis'></img>
                <h3>Analytics</h3>
            </Link>
            <Link to='shipments' smooth={true} offset={-100} className='adminbox'>
                <img src={transport} alt='transport'></img>
                <h3>Shipments</h3>
            </Link>
            <Link to='message' smooth={true} offset={-100} className='adminbox'>
                <img src={message} alt='message'></img>
                <h3>Message</h3>
            </Link>
            <h3 style={{paddingTop:'30px'}}>Accounts</h3>
            <Link to='settings' smooth={true} offset={-100} className='adminbox'>
                <img src={settings} alt='settings'></img>
                <h3>Settings</h3>
            </Link>
            <Link className='adminbox'>
                <img src={logout} alt='logout'></img>
                <h3>LogOut</h3>
            </Link>
        </div>
        {/* adminsidebar ends */}
        <div className='admincontent'>
            <h2>Dashboard</h2>
            <div className='adminboxsection' id='dashboard'>
                <div className='admincontentbox'>
                    <div style={{display:'flex',gap:'40px',justifyContent:'space-around',alignItems:'center'}}>
                        <div className='admincontentboxvalues'>
                            <h4>Total Shipments</h4>
                            <h2>13423</h2>
                        </div>
                        <img src='https://cdn-icons-png.flaticon.com/128/411/411763.png' alt='shipment'></img>
                    </div>
                    <h4>Vs Life Time</h4>
                </div>

                <div className='admincontentbox'>
                    <div style={{display:'flex',gap:'70px',justifyContent:'space-around',alignItems:'center'}}>
                        <div className='admincontentboxvalues'>
                            <h4>Total Order</h4>
                            <h2>13423</h2>
                        </div>
                        <img src='https://cdn-icons-png.flaticon.com/128/411/411763.png' alt='shipment'></img>
                    </div>
                    <h4>Vs Life Time</h4>
                </div>
                
                <div className='admincontentbox'>
                    <div style={{display:'flex',gap:'90px',justifyContent:'center',alignItems:'center'}}>
                        <div className='admincontentboxvalues'>
                            <h4>Revenue</h4>
                            <h2>13423</h2>
                        </div>
                        <img src='https://cdn-icons-png.flaticon.com/128/411/411763.png' alt='shipment'></img>
                    </div>
                    <h4>Vs Life Time</h4>
                </div>

                <div className='admincontentbox'>
                    <div style={{display:'flex',gap:'90px',justifyContent:'center',alignItems:'center'}}>
                        <div className='admincontentboxvalues'>
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
            <div id='analytics' className='analyticsportion'>

            <Chart options={options} series={series} type="area" />
            
            {/* <Chart
                palette="Violet"
                dataSource={sharingStatisticsInfo}
                title="Sales Graph"
            >
            <CommonSeriesSettings
                argumentField="week"
            type='spline'
            />
            <CommonAxisSettings>
                <Grid visible={true} />
            </CommonAxisSettings>
            {
                architectureSources.map((item) => <Series
                key={item.value}
                valueField={item.value}
                name={item.name} />)
            }
            <Margin bottom={20} />
            <ArgumentAxis
                allowDecimals={false}
                axisDivisionFactor={60}
            >
            <Label>
                <Format type="decimal" />
            </Label>
            </ArgumentAxis>
            <Legend
                verticalAlignment="top"
                horizontalAlignment="right"
            />
            <Export enabled={true} />
            <Tooltip enabled={true} />
            </Chart> */}


            
            </div>
            {/* analystics ends */}
            <div className='trackorder' id='shipments'>
                <div style={{paddingLeft:'20px',paddingTop:'20px',display:'flex',alignItems:'center',gap:'20px',paddingBottom:'20px'}}>
                    <img src='https://cdn-icons-png.flaticon.com/128/7480/7480410.png' alt='order' width={50} height={50}></img>
                    <h2>Tracking Order</h2>
                </div>
                <div className='ordertablehead'>
                    <div className='ordercheckbox'>
                        <input type='checkbox' style={{width:'15px',height:'15px',borderRadius:'20px'}}></input>
                    </div>
                    <div className='orderId'>
                        <h5>ORDER ID</h5>
                    </div>
                    <div className='ordercategory'>
                        <h5>CATEGORY</h5>
                    </div>
                    <div className='orderarrivaltime'>
                        <h5>ARRIVAL TIME</h5>
                    </div>
                    <div className='orderweight'>
                        <h5>WEIGHT</h5>
                    </div>
                    <div className='orderroute'>
                        <h5>ROUTE</h5>
                    </div>
                    <div className='orderfee'>
                        <h5>FEE</h5>
                    </div>
                    <div className='orderstatus'>
                        <h5>STATUS</h5>
                    </div>
                </div>

                <div className='ordertablevalue'>
                    <div className='ordercheckbox'>
                        <input type='checkbox' style={{width:'15px',height:'15px',borderRadius:'20px'}}></input>
                    </div>
                    <div className='orderId'>
                        <h5>#01234ABCD</h5>
                    </div>
                    <div className='ordercategory'>
                        <h5>Electronic</h5>
                    </div>
                    <div className='orderarrivaltime'>
                        <h5>7/1/2024</h5>
                    </div>
                    <div className='orderweight'>
                        <h5>25Kg</h5>
                    </div>
                    <div className='orderroute'>
                        <h5>Hosur to Chennai</h5>
                    </div>
                    <div className='orderfee'>
                        <h5>$1000</h5>
                    </div>
                    <div className='orderstatus'>
                        <h5>STATUS</h5>
                    </div>
                </div>

                <div className='ordertablevalue'>
                    <div className='ordercheckbox'>
                        <input type='checkbox' style={{width:'15px',height:'15px',borderRadius:'20px'}}></input>
                    </div>
                    <div className='orderId'>
                        <h5>#ABCD1234</h5>
                    </div>
                    <div className='ordercategory'>
                        <h5>Furniture</h5>
                    </div>
                    <div className='orderarrivaltime'>
                        <h5>7/1/2024</h5>
                    </div>
                    <div className='orderweight'>
                        <h5>50Kg</h5>
                    </div>
                    <div className='orderroute'>
                        <h5>Coimbatore to Chennai</h5>
                    </div>
                    <div className='orderfee'>
                        <h5>$2500</h5>
                    </div>
                    <div className='orderstatus'>
                        <h5>STATUS</h5>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}
