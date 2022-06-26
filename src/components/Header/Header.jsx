import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Header = () => {
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
      <Link to={to} className={isActive ? "button is-danger" : "button is-black"} {...props}>{children}</Link>
    )
  }
  return (
    <div>
      <nav class="navbar is-black is-fixed-top">
        <div class="container">
          <div id="navMenu" class="navbar-menu">
            <div className='navbar-item'>
              <div class="buttons">
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/portfolio'>Portfolio</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section class="hero is-black is-medium-with-navbar">
        <div class="hero-body">
          <div className='container has-text-centered'>
          <p class="">
            Hello I'm
          </p>
          <p class="title">
            Jason Whitney
          </p>
          <p class="subtitle">
            Fullstack Developer
          </p>
          <a href="https://drive.google.com/file/d/10KNc_-kTcN9SMV1Tsu54TkSJqzFbcjU5/view?usp=sharing" target="_blank" rel="noreferrer" class="button is-danger">Download CV</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header