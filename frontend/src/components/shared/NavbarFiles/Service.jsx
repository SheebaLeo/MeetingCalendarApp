import React from 'react';

const Service = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center"> Our Services</h2>
      <div className="row">
        {/* Service 1 */}
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title"> Meeting Scheduling</h5>
              <p className="card-text">
                Easily schedule and manage your team and departmental meetings with our intuitive platform.
              </p>
            </div>
          </div>
        </div>
        {/* Service 2 */}
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title"> Notifications & Reminders</h5>
              <p className="card-text">
                Get timely notifications and reminders for upcoming meetings to stay on track.
              </p>
            </div>
          </div>
        </div>
        {/* Service 3 */}
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title"> Analytics</h5>
              <p className="card-text">
                View insightful analytics and reports on meeting schedules, attendance, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Additional Info */}
      <div className="text-center mt-4">
        <p className="lead">
          <strong>Enhance productivity</strong> with our comprehensive meeting management tools!
        </p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  );
};

export default Service;