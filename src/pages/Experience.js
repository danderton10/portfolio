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
          <p> GCSEs: 10A*s & 3As</p>
          <p> A Levels: 4A*s in Maths, Further Maths, Physics, Welsh Baccalaureate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2018 - 2022' 
        iconStyle={{background: '#3e497a', color: '#fff'}} 
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Imperial College London</h3>
          <h4 className="vertical-timeline-element-subtitle"> MEng Mechanical Engineering</h4>
          <p> 1st Class Honours (75%)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--work' 
        date='2021 June - 2021 August' 
        iconStyle={{background: '#e9d35b', color: '#fff'}} 
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Rewnewable Engineering Internship</h3>
          <h4 className="vertical-timeline-element-subtitle"> Equinor</h4>
          <p> Worked on some cool stuff!</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--work' 
        date='October 2022 - April 2023' 
        iconStyle={{background: '#e9d35b', color: '#fff'}} 
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Pre Sales Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle"> Eliq AB</h4>
          <p> Worked on some more cool stuff!</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--work' 
        date='April 2023 - Present' 
        iconStyle={{background: '#e9d35b', color: '#fff'}} 
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'> Backend Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle"> Eliq AB</h4>
          <p> Worked on some more cool stuff!</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience