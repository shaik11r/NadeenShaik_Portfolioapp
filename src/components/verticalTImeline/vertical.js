import React from "react";
import "./vertical.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import data from "./constants";

function Vertical() {
  return (
    <VerticalTimeline>
      {data.map((val, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "black", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid lime" }}
          date={val.date}
          iconStyle={{ background: "#192f73", color: "lime" }}
          icon={<img src={val.icon} alt={val.title} />}>
          <h3 className="vertical-timeline-element-title">{val.title}</h3>
          <p className="vertical-para">{val.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default Vertical;
