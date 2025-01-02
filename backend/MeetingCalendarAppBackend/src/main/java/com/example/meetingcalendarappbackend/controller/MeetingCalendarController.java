package com.example.meetingcalendarappbackend.controller;

import com.example.meetingcalendarappbackend.domain.dto.MeetingCalendarDTO;
import com.example.meetingcalendarappbackend.service.MeetingCalendarService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1/calendar")
@RestController
@Validated

public class MeetingCalendarController {

    private final MeetingCalendarService meetingCalendarService;

    @Autowired
    public MeetingCalendarController(MeetingCalendarService meetingCalendarService) {
        this.meetingCalendarService = meetingCalendarService;
    }

    @PostMapping
    public ResponseEntity<MeetingCalendarDTO> doCreateMeeting(@RequestBody MeetingCalendarDTO meetingCalendarDTO) {

        MeetingCalendarDTO responseBody = meetingCalendarService.createAdvertisement(meetingCalendarDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(responseBody);
    }

    @GetMapping("/getMeetings")
    public ResponseEntity<List<MeetingCalendarDTO>> getMeetingCalendar() {
        List<MeetingCalendarDTO> responseBody = meetingCalendarService.getMeetingCalendar();
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    @PutMapping("/updateMeeting/{meetingId}")
    public ResponseEntity<MeetingCalendarDTO> updateMeeting(@PathVariable Long meetingId, @RequestBody @Valid MeetingCalendarDTO meetingCalendarDTO) {
        MeetingCalendarDTO responseBody = meetingCalendarService.updateMeeting(meetingCalendarDTO);
        return ResponseEntity.status(HttpStatus.OK).body(responseBody);
    }

    @DeleteMapping("/deleteMeeting{meetingId}")
    public ResponseEntity<Void> deleteMeeting(@PathVariable Long meetingId) {
        meetingCalendarService.deleteMeeting(meetingId);
        return ResponseEntity.noContent().build();
    }
}

