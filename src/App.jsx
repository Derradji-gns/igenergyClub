import './App.css'
import Nav from './compenants/nav'
import Example from './compenants/NNAv'
import Header from './compenants/header'
import Events from './compenants/section1'
import Leaders from './compenants/leaders'
import Community from './compenants/com'
import Footer from './compenants/footer'
import Projects from './compenants/projects'
import BackgroundBeamsWithCollisionDemo from './compenants/comp'
import InfiniteMovingCardsDemo from './compenants/talks'


function App() {

  return (
    
    
      <div className='bg-gray-900'>

        <Example/>
        <BackgroundBeamsWithCollisionDemo/>
        <Events/>
        <Leaders/>
        <Projects/>
        <InfiniteMovingCardsDemo/>
        <Footer/>

    

      </div>
        
  
  )
}

export default App;