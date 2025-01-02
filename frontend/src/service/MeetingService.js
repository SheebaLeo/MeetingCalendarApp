import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/calendar';

export const getAllMeetings = async () => {
    return axios.get(API_URL+"/getMeetings");
};

export const createMeeting = async (meeting) => {
    return axios.post(API_URL, meeting);
    // await fetch( API_URL+"/createMeeting", {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(meeting),
    //   });
};

export const updateMeeting = async (meeting) => {
    return axios.put(`${API_URL}+"/updateMeeting"/${meeting.meetingId}`, meeting);
};

export const deleteMeeting = async (meetingId) => {
    return axios.post(`${API_URL}+"/deleteMeeting"/${meetingId}`, meetingId);
};