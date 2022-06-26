import React from 'react'
import AnimatePage from '../AnimatePage/AnimatePage'

const Resume = () => {
  return (
    <AnimatePage>
      <div className='my-4 is-fluid'>
        <div className='content'>
          <h2>Resume</h2>
          <p>Download my resume below</p>
          <a href="https://drive.google.com/file/d/10KNc_-kTcN9SMV1Tsu54TkSJqzFbcjU5/view?usp=sharing" target="_blank" rel="noreferrer" className="button is-danger">Download CV</a>
          <h3>Front-End Proficiencies</h3>
          <h3>Back-End Proficiencies</h3>
        </div>
      </div>
    </AnimatePage>
    
  )
}

export default Resume