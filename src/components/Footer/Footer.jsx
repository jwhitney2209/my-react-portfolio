import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container has-text-centered">
        <div className='columns is-mobile is-marginless'>
          <div className='column center buttons'>
            <a href="https://github.com/jwhitney2209" target="_blank" rel="noreferrer" className="button is-black">Github</a>
            <a href="https://www.linkedin.com/in/jwhitney2209/" target="_blank" rel="noreferrer" className="button is-black">LinkedIn</a>
          </div>
        </div>
        <div>
          <p>
            Website by Jason Whitney 2022
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer