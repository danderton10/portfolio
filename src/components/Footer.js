import React from 'react'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
          <a href="https://www.linkedin.com/in/daniel-anderton-4b195a194/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:danderton10@yahoo.co.uk" target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a>
          <a href="https://github.com/danderton10" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </div>
        <p> &copy; 2022 danderton.com</p>
    </div>
  );
}

export default Footer