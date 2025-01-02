import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar.jsx';
import Footer from './components/shared/Footer.jsx';
import MeetingCalendar from './components/meeting/MeetingCalendar.jsx';
import About from './components/shared/NavbarFiles/About.jsx';
import Contact from './components/shared/NavbarFiles/Contact.jsx';
import Service from './components/shared/NavbarFiles/Service.jsx';
import Analytics from './components/shared/Dashboard/Analytics.jsx';
import Manage from './components/shared/Dashboard/Manage.jsx';
import UserPermission from './components/shared/Dashboard/UserPermission.jsx';
import Notification from './components/shared/Dashboard/Notification.jsx';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      
      <Routes>
            <Route path="/" element={<MeetingCalendar />} />
            <Route path="/home/*" element={<MeetingCalendar />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/schedule/*" element={<MeetingCalendar />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/userPermission" element={<UserPermission/>} />
            <Route path="/notification" element={<Notification/>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Router>
      <Footer />
    </>
  );
};

const PageNotFound = () => {
  return(
      <div className='container-fluid'>
          <h2>Page Not Found Component</h2>
      </div>
  );
};

export default App;