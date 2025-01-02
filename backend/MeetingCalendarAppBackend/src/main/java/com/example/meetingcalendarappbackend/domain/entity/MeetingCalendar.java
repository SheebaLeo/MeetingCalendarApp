package com.example.meetingcalendarappbackend.domain.entity;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
public class MeetingCalendar{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long meetingId;

    @Column(name="_title", nullable= false)
    private String title;

    @Column(name = "_date")
    private String date;

    @Column(name = "_time")
    private String time;

    @Column(name= "level")
    private String level;

    @Column(name="_participants_Email", nullable = false)
    private String participants;

    @Column(name="_description")
    private String description;
}
