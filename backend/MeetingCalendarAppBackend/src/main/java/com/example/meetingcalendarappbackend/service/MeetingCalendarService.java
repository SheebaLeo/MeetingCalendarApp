package com.example.meetingcalendarappbackend.service;

import com.example.meetingcalendarappbackend.domain.dto.MeetingCalendarDTO;
import jakarta.validation.Valid;

import java.util.List;

public interface MeetingCalendarService {


    MeetingCalendarDTO createAdvertisement(MeetingCalendarDTO meetingCalendarDTOForm);

    List<MeetingCalendarDTO> getMeetingCalendar();

    MeetingCalendarDTO updateMeeting(MeetingCalendarDTO meetingCalendarDTO);

    void deleteMeeting(Long meetingId);
}
