import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'


const App = () => {

  return (
    <>
      <Header />
        <div className='container'>
      <Routes>
        <Route path='my-react-portfolio/' element={<About />}/>
        <Route path='my-react-portfolio/about' element={<About />} />
        <Route path='my-react-portfolio/portfolio' element={<Portfolio />} />
        <Route path='my-react-portfolio/contact' element={<Contact />} />
        <Route path='my-react-portfolio/resume' element={<Resume />} />
      </Routes>
        </div>
      <Footer />
    </>
  )
}

export default App
