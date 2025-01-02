import React from 'react';

const About = () => {
    return (
    <div className='container-fluid row my-5'>
        <div className='col-md-6 my-5 py-5 mx-1'>
            <h2>Meeting Calendar</h2>
            <p>Stay organized and on top of your schedule with our Meeting Calendar App. 
                Designed for professionals and teams, this app helps you manage your meetings efficiently and effectively.</p>
        </div>
        <div className='col-md-6 my-5' style={{width: "600px"}}>
            <img src='\src\assets\MeetingPlanner.png' alt="Meeting Planner" style={{width: "600px", height: "300px"}} />
        </div>
    </div>
    );
};

export default About;