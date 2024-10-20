
import Input from './components/input'
import Header from './components/header'
import Hero from './components/hero'
import Content from './components/content'
import Footer from './components/footer'
import { useState } from 'react'
// import ContactForm from './components/contact'


function App() {
  const [isopen ,setisopen]=useState(false)
  return (
    <>
    <Header setisopen={setisopen} isopen={isopen}/>
    <Hero />
    <Content isopen={isopen}/>
    <Footer />
    </>
  )
}

export default App
