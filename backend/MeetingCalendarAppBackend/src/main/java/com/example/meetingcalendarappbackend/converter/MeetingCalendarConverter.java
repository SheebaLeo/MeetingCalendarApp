package com.example.meetingcalendarappbackend.converter;


import com.example.meetingcalendarappbackend.domain.dto.MeetingCalendarDTO;
import com.example.meetingcalendarappbackend.domain.entity.MeetingCalendar;
import org.springframework.stereotype.Component;

@Component
public interface MeetingCalendarConverter {
    MeetingCalendarDTO toMeetingCalendarDTO(MeetingCalendar meetingCalendar);

    MeetingCalendar toMeetingCalendar(MeetingCalendarDTO meetingCalendarDTOForm);
}
