import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Header = () => {
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
      <Link to={to} className={isActive ? "button is-danger" : "button is-black"} {...props}>{children}</Link>
    )
  }
    const [isNavActive, setisNavActive] = useState(false);
  return (
    <div>
      <nav className="navbar is-black is-fixed-top">
        <div className="container">
          <div className='navbar-brand'>
            <div className='navbar-item'>
              <div onClick={() => {setisNavActive(!isNavActive);
              }}
              role='button' 
              data-target='navMenu' 
              className={`navbar-burger has-text-centered ${isNavActive ? "is-active center" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div id="navMenu" className={`navbar-menu has-text-centered ${isNavActive ? "is-active center" : ""}`}>
            <div className='navbar-start'>
              <div className='navbar-item'>
                <div className="buttons">
                  <CustomLink to='/about'>About</CustomLink>
                  <CustomLink to='/portfolio'>Portfolio</CustomLink>
                  <CustomLink to='/contact'>Contact</CustomLink>
                  <CustomLink to='/resume'>Resume</CustomLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero is-black is-medium-with-navbar">
        <div className="hero-body">
          <div className='container has-text-centered'>
          <p className="">
            Hello I'm
          </p>
          <p className="title">
            Jason Whitney
          </p>
          <p className="subtitle">
            Fullstack Developer
          </p>
          <a href="https://drive.google.com/file/d/10KNc_-kTcN9SMV1Tsu54TkSJqzFbcjU5/view?usp=sharing" target="_blank" rel="noreferrer" className="button is-danger">Download CV</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header