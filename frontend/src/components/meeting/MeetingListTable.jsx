import React from 'react';
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const MeetingListTable = ({ meetings, editMeeting, deleteMeeting }) => {
    
  return (
    <div className="container" style={{}}>
      <h2 className="mb-4">List of Created Meetings</h2>
      <div style={{ maxHeight: '100px', overflowY: 'scroll' }}>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
            <th>#</th>
            <th>Meeting Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{meeting.title}</td>
              <td>{meeting.date}</td>
              <td>{meeting.time}</td>
              <td>{meeting.level}</td>
              <td>
                <button onClick={() => editMeeting(index)}  style={{backgroundColor: 'yellow'}}><MdEditSquare/></button>
                <button onClick={() => deleteMeeting(index)}  style={{backgroundColor: 'red'}}><RiDeleteBinLine/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default MeetingListTable;
