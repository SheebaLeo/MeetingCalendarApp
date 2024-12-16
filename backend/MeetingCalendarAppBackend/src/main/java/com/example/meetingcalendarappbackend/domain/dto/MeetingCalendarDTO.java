package com.example.meetingcalendarappbackend.domain.dto;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import jakarta.validation.constraints.NotBlank;
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

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime date;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime time;

    private String level;

    @NotBlank(message = "participants email is required")
    private String participantsEmail;

    private String description;
}
