package com.example.meetingcalendarappbackend.converter;


import com.example.meetingcalendarappbackend.domain.dto.MeetingCalendarDTO;
import com.example.meetingcalendarappbackend.domain.entity.MeetingCalendar;
import org.springframework.stereotype.Component;

@Component
public class MeetingCalendarConverterImpl implements MeetingCalendarConverter {

    @Override
    public MeetingCalendarDTO toMeetingCalendarDTO(MeetingCalendar entity) {

        return MeetingCalendarDTO.builder()
                .meetingId(entity.getMeetingId())
                .title(entity.getTitle())
                .description(entity.getDescription())
                .date(entity.getDate())
                .time(entity.getTime())
                .level(entity.getLevel())
                .participantsEmail(entity.getParticipantsEmail())
                .build();
    }

    @Override
    public MeetingCalendar toMeetingCalendar(MeetingCalendarDTO dto) {
        return MeetingCalendar.builder()
                .meetingId(dto.getMeetingId())
                .title(dto.getTitle())
                .description(dto.getDescription())
                .date(dto.getDate())
                .time(dto.getTime())
                .level(dto.getLevel())
                .participantsEmail(dto.getParticipantsEmail())
                .build();
    }


}
