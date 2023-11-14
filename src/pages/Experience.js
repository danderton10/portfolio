import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className='experience'> 
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2011 - 2018' 
        iconStyle={{background: '#3e497a', color: '#fff'}} 
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Stanwell School, Penarth</h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2018 - 2022' 
        iconStyle={{background: '#3e497a', color: '#fff'}} 
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Imperial College London</h3>
          <h4 className="vertical-timeline-element-subtitle"> MEng Mechanical Engineering</h4>
          <p> 1st Class Honours</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--work' 
        date='2022 - present' 
        iconStyle={{background: '#e9d35b', color: '#fff'}} 
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Backend Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle"> London, UK</h4>
          <p> Worked on some cool stuff!</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience