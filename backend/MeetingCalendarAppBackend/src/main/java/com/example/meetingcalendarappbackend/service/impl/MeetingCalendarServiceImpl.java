package com.example.meetingcalendarappbackend.service.impl;


import com.example.meetingcalendarappbackend.converter.MeetingCalendarConverter;
import com.example.meetingcalendarappbackend.domain.dto.MeetingCalendarDTO;
import com.example.meetingcalendarappbackend.domain.entity.MeetingCalendar;
import com.example.meetingcalendarappbackend.repoistory.MeetingCalendarRepository;
import com.example.meetingcalendarappbackend.service.MeetingCalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MeetingCalendarServiceImpl implements MeetingCalendarService {

    private final MeetingCalendarRepository meetingCalendarRepository;
    private final MeetingCalendarConverter meetingCalendarConverter;

    @Autowired
    public MeetingCalendarServiceImpl(MeetingCalendarRepository meetingCalendarRepository, MeetingCalendarConverter meetingCalendarConverter) {
        this.meetingCalendarRepository = meetingCalendarRepository;
        this.meetingCalendarConverter = meetingCalendarConverter;
    }

    @Override
    public MeetingCalendarDTO createAdvertisement(MeetingCalendarDTO meetingCalendarDTO) {

        MeetingCalendar meetingCalendar = meetingCalendarConverter.toMeetingCalendar(meetingCalendarDTO);
        MeetingCalendar createdMeeting = meetingCalendarRepository.save(meetingCalendar);
        return meetingCalendarConverter.toMeetingCalendarDTO(createdMeeting);
    }

    @Override
    public List<MeetingCalendarDTO> getMeetingCalendar() {
        List<MeetingCalendar> meetingCalendars = meetingCalendarRepository.findAll();

        List<MeetingCalendarDTO> meetingCalendarList = new ArrayList<>();
        for (MeetingCalendar entity : meetingCalendars) {
            MeetingCalendarDTO dtoView = meetingCalendarConverter.toMeetingCalendarDTO(entity);
            meetingCalendarList.add(dtoView);
        }
        return meetingCalendarList;
    }

    @Override
    public MeetingCalendarDTO updateMeeting(MeetingCalendarDTO meetingCalendarDTO) {
        MeetingCalendar meetingCalendar = meetingCalendarConverter.toMeetingCalendar(meetingCalendarDTO);
        MeetingCalendar updatedMeeting = meetingCalendarRepository.save(meetingCalendar);
        return meetingCalendarConverter.toMeetingCalendarDTO(updatedMeeting);
    }

    @Override
    public void deleteMeeting(Long meetingId) {
        meetingCalendarRepository.deleteById(meetingId);
    }
}