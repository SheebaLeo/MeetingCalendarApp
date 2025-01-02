package com.example.meetingcalendarappbackend.domain.dto;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MeetingCalendarDTO {

    private Long meetingId;

    @NotBlank(message = "title is required")
    private String title;

    @NotBlank(message = "Date is required")
    @Pattern(
            regexp = "\\d{4}-\\d{2}-\\d{2}",
            message = "Date must be in the format YYYY-MM-DD"
    )
    String date;

    @NotBlank(message = "Start Time is required")
    @Pattern(
            regexp = "(?:[01]\\d|2[0-3]):[0-5]\\d",
            message = "Time must be in the 24Hrs format HH:MM"
    )
    String time;

    private String level;

    @NotBlank(message = "participants email is required")
    private String participants;

    private String description;
}
