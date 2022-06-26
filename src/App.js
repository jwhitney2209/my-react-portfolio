import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <>
    <Header />
    <div className='container'>
      <Routes>
        <Route exact path='/' element={<About />}/>
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
