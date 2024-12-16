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

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @Column(name = "_date")
    private LocalDateTime date;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @Column(name = "_time")
    private LocalDateTime time;

    @Column(name= "level")
    private String level;

    @Column(name="_participants_Email", nullable = false)
    private String participantsEmail;

    @Column(name="_description")
    private String description;
}
