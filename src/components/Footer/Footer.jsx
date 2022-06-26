import React from 'react'

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container has-text-centered">
        <div className='columns is-mobile is-marginless'>
          <div className='column center buttons'>
            <button class="button is-black">Github</button>
            <button class="button is-black">LinkedIn</button>
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