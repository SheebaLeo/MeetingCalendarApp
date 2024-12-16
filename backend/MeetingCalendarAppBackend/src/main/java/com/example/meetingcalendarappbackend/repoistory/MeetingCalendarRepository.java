package com.example.meetingcalendarappbackend.repoistory;

import com.example.meetingcalendarappbackend.domain.entity.MeetingCalendar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeetingCalendarRepository extends JpaRepository<MeetingCalendar, Long> {

}
