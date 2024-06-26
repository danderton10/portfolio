import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My name is Dan</h2>
        <div className='prompt'>
          <p>
            A software developer with a passion for learning.
          </p>
          <div className="icon-links">
            <a href="https://www.linkedin.com/in/daniel-anderton-4b195a194/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:danderton10@yahoo.co.uk" target="_blank" rel="noopener noreferrer">
              <EmailIcon />
            </a>
            <a href="https://github.com/danderton10" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>
              ReactJs, Angular, HTML, CSS
            </span>
          </li>
          <li className='item'>
            <h2> Back-End</h2>
            <span>
              NodeJS, .NET, MySQL, MS SQL
            </span>
          </li>
          <li className='item'>
            <h2> Languages</h2>
            <span>
              Javascript, Python, C#
            </span>
          </li>
        </ol>

      </div>
    </div>
  )
}

export default Home