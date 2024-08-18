
import './App.css'
import Contact from './components/Contact/Contact'
import DealSection from './components/DealSection/DealSection'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Properties from './components/Properties/Properties'
import VideoContainer from './components/VideoContainer/VideoContainer'

function App() {


  return (
    <>
    <NavBar/>
    <Hero/>
    <Features/>
    <VideoContainer/>
    <DealSection/>
    <Properties/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
