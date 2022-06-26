import React from 'react'
import AnimatePage from '../AnimatePage/AnimatePage'


const Portfolio = () => {
  return (
    <AnimatePage>
    <div className='my-4 is-fluid m-4'>
      <div className=''>
        <h2>Portfolio</h2>
      </div>
      <div className='columns'>
        <div className='column'>
          <div className='card'>
            <div className='card-header'>
              <div className='card-header-title'>
                Project #1
              </div>
            </div>
            <div className='card-image'>
              <figure className='image is-4by3'>
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" /> 
              </figure>
            </div>
            <div className='card-content'>
              Description goes here...
            </div>
            <div className='card-footer'>
              <a href="/" className='card-footer-item'>Github</a>
              <a href="/" className='card-footer-item'>Deployed</a>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card'>
            <div className='card-header'>
              <div className='card-header-title'>
                Project #2
              </div>
            </div>
            <div className='card-image'>
              <figure className='image is-4by3'>
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" /> 
              </figure>
            </div>
            <div className='card-content'>
              Description goes here...
            </div>
            <div className='card-footer'>
              <a href="/" className='card-footer-item'>Github</a>
              <a href="/" className='card-footer-item'>Deployed</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    </AnimatePage>
  )
}

export default Portfolio