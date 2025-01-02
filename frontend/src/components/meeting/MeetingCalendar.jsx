import React, { useState, useEffect } from "react";
import Aside from "../shared/Aside";
import MeetingForm from "./MeetingForm";
import MeetingListTable from "./MeetingListTable";
import { getAllMeetings, updateMeeting, createMeeting, deleteMeeting } from "../../service/MeetingService";

const MeetingCalendar = () => {

    const [meetings, setMeetings] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [reload, setReload] = useState(false); // To track if we are editing a meeting
  
    useEffect(() => {
      getAllMeetings().then(response => {
        if (response.data != null) {
          setMeetings(response.data);
        }       
      });
    }, [reload]);

    // Add a new meeting or update an existing one
    const addOrUpdateMeeting = (meeting) => {
      console.log(editingIndex);
      if (editingIndex !== null) {
        updateMeeting(meeting).then(() => {
          console.log(meeting);
          alert('Meeting updated successfully!');
          if(response.status === 204) {
            setReload(!reload);
        }
          navigate('/');
      });
        setEditingIndex(null); // Reset editing state
      } else {
        createMeeting(meeting).then(() => {
          alert('Meeting created successfully!');
          setReload(reload);
        })
        
      }
    };
  
    // Load a meeting into the form for editing
    const editMeeting = (index) => {
      setEditingIndex(index);
    };
  
    // Delete a meeting
    const deleteMeeting = (id) => {
      if (window.confirm('Are you sure you want to delete this meeting?')) {
        deleteMeeting(id).then(() => {
            alert('Meeting deleted successfully!');
            getAllMeetings();
        });
      }
    };
  
    return (
      <div className="d-flex" style={{overflowY: 'scroll', maxHeight:'650px'}}>
        <div className="col-3">
          <Aside />
        </div>
        <div className="col-9">
          <MeetingForm
            addOrUpdateMeeting={addOrUpdateMeeting}
            meetingToEdit={editingIndex !== null ? meetings[editingIndex] : null}
          />
          <MeetingListTable
            meetings={meetings}
            editMeeting={editMeeting}
            deleteMeeting={deleteMeeting}
          />
        </div>
      </div>
    );
  };

  export default MeetingCalendar;
  