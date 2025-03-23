import React from "react";
import EventCard from "./EventCard";
import event1Img from "../../assets/event1Img.jpeg";
import event2Img from "../../assets/event2Img.jpeg";

const AllEvents = () => {
  const event1Rules = [
    "Max 3 UG/PG members per team, same institute",
    "Mentor allowed (optional)",
    "Register by 01 April 2025, 5:00 PM",
    "Demo info by 02 April 2025, 8:00 PM",
    "Open to all visitors for interaction",
    "Judging: Idea novelty, robot capability, prototype completeness",
    "Top 2 teams awarded",
  ];

  const event2Rules = [
    "Max 3 UG/PG members per team, same institute",
    "Autonomous robot must carry tennis ball through obstacles",
    "Register by 01 April 2025, 5:00 PM",
    "Demo info by 02 April 2025, 8:00 PM",
    "Track length: 3–5 meters, width: 1 meter",
    "Robot must use vision/sensors, no remote/manual control",
    "Max size: 25cm × 25cm × 20cm, no weight limit",
    "2 attempts/team, each max 10 minutes",
    "No manual intervention during run",
    "Top 2 teams awarded",
  ];

  return (
    <div>
      <EventCard
        title="Event 1: Project Exhibition"
        imageSrc={event1Img}
        description="Theme: Robotics for a Better Future"
        rules={event1Rules}
        prize="₹25,000 (1st), ₹15,000 (2nd)"
      />

      <EventCard
        title="Event 2: Robotic Competition - Autonomous Delivery Robot"
        imageSrc={event2Img}
        rules={event2Rules}
        prize="₹25,000 (1st), ₹15,000 (2nd)"
      />
    </div>
  );
};

export default AllEvents;
