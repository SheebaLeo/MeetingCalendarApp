import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom';
import {FaCalendarAlt, FaUsers, FaBell, FaChartBar, FaTachometerAlt } from 'react-icons/fa';
import { RiCalendarScheduleFill } from "react-icons/ri";
import Manage from './Dashboard/Manage';
import Analytics from './Dashboard/Analytics';
import MeetingCalendar from '../meeting/MeetingCalendar';
import UserPermission from './Dashboard/UserPermission';
import Notification from './Dashboard/Notification';
function Aside() {

  return (
    
    <div class="card border-dark mb-3" style={{ marginLeft:'30px', marginRight:'10px', marginTop:'10px'}}>
    <div class="card-header bg-dark border-success text-white">
        <h3>
            <FaTachometerAlt /> Dashboard
        </h3>
    </div>
  
    <div class="card-body text-success mb-3 d-flex flex-column" >
        
            <Link to="/schedule" className="text-dark">
            <RiCalendarScheduleFill className="me-2" />
            Schedule Meeting
          </Link>
          <Link to="/manage" className="text-dark">
            <FaCalendarAlt className="me-2" />
            Manage Meetings</Link>
          <Link to="/userPermission" className="text-dark">
            <FaUsers className="me-2" />
            Users & Permissions</Link>
          <Link to="/notification" className="text-dark"> 
            <FaBell className="me-2" />
            Notifications</Link>
          <Link to="/analytics" className="text-dark">
            <FaChartBar className="me-2" />
            Analytics</Link>

  </div>
  </div>
  
  );
};






//     return (
//         <div className="d-flex flex-column bg-white text-dark p-3" style={{ height: '60vh' }}>
//           <h4>Dashboard</h4>
//           <Link to="/schedule" className="text-dark">
//             <RiCalendarScheduleFill className="me-2" />
//             Schedule Meeting
//           </Link>
//           <Link to="/manage" className="text-white">
//             <FaCalendarAlt className="me-2" />
//             Manage Meetings</Link>
//           <Link to="/userPermission" className="text-white">
//             <FaUsers className="me-2" />
//             Users & Permissions</Link>
//           <Link to="/notification" className="text-white"> 
//             <FaBell className="me-2" />
//             Notifications</Link>
//           <Link to="/analytics" className="text-white">
//             <FaChartBar className="me-2" />
//             Analytics</Link>
//           {/* Add more links */}
//         </div>
//       );
    
// }

export default Aside;