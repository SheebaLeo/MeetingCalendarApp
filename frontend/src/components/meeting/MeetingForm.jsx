import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { FaPlus } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { getAllMeetings } from '../../service/MeetingService';

const MeetingForm = ({addOrUpdateMeeting, meetingToEdit}) => {
    const [formData, setFormData] = useState({
      title: '',
      date: '',
      time: '',
      level: '',
      participants: '',
      description: ''
    });

    useEffect(() => {
        if (meetingToEdit) {
          setFormData(meetingToEdit);
        } else {
          setFormData({
            title: '',
            date: '',
            time: '',
            level: '',
            participants: '',
            description: ''
          });
        }
      }, [meetingToEdit]);

    const [errors, setErrors] = useState({});
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    
    const isFutureDate = (date) => {
      const today = new Date();
      const selectedDate = new Date(date);
      return selectedDate > today;
    };
    
    const validate = () => {
      const newErrors = {};
      if (!formData.title) newErrors.title = 'Meeting title is required';
      if (!formData.date) newErrors.date = 'Date is required';
      else if (!isFutureDate(formData.date)) {
        newErrors.date = 'Date must be in the future';
      }
      if (!formData.time) newErrors.time = 'Time is required';
      if (!formData.participants) newErrors.participants = 'Participants are required';
      else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(formData.participants)) {
        newErrors.participants = 'Invalid email format';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        if (addOrUpdateMeeting) {
            addOrUpdateMeeting(formData);
            setFormData({ title: '', date: '', time: '', level: '', participants: '', description: '' });
        } else {
            console.error('addOrUpdateMeeting function is not defined');
        }
      }
    };


    return (
        <div className="card" style={{width: '98%', padding:'10px'}}>
            <form onSubmit={handleSubmit}>
                <h3 className="mb-3 bg-primary text-white" style={{padding:'10px'}}><FaRegCalendarDays
                 className="text-white "/>{meetingToEdit ? 'Edit Meeting' : 'Schedule a New Meeting'}</h3>
                <div className="form-group">
                    <div>
                    <label>Meeting Title</label>
                    </div>
                    <input type="text" 
                        name='title'
                        className="form-control" 
                        value={formData.title}
                        onChange={handleChange} 
                        placeholder="Enter meeting title"
                    />
                    {errors.title && <span className="text-danger">{errors.title}</span>}
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label>Meeting Date</label>
                        <input type="date"
                            className="form-control"
                            name="date"
                            value={formData.date}
                            onChange={handleChange} 
                        />
                        {errors.date && <span className="text-danger">{errors.date}</span>}
                    </div>
                    <div class="form-group col-md-6">
                        <lable>Meeting Time</lable>
                        <input type="time" 
                            className="form-control"
                            name='time'
                            value={formData.time}
                            onChange={handleChange}
                            style={{paddingRight:'20px'}} 
                        />
                        {errors.time && <span className="text-danger">{errors.time}</span>}
                    </div>
                </div>
                <div className="form-group">
                    <label>Meeting Level</label>
                    <select name="level" className="form-control" value={formData.level} onChange={handleChange} >
                        <option value="">Choose level</option>
                        <option value="Team">Team</option>
                        <option value="Department">Department</option>
                        <option value="Company">Company</option>

                    </select>

                </div>
                <div className="form-group">
                    <div>
                        <label>Participants</label>
                    </div>
                    <input type="text" 
                        className="form-control" 
                        name="participants"
                        placeholder="Enter participant emails"
                        value={formData.participants}
                        onChange={handleChange}
                    />
                    {errors.participants && <span className="text-danger">{errors.participants}</span>}
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" 
                        className="form-control" 
                        placeholder="Enter meeting description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div  style={{paddingTop: '15px'}}>
                    <button type="submit" className="btn btn-primary">
                        <FaPlus /> {meetingToEdit ? 'Update Meeting' : 'Create Meeting'}
                    </button>
                </div>
            </form>
        </div>

    );
};

export default MeetingForm;