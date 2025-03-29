import './App.css'
import Nav from './compenants/nav'
import Header from './compenants/header'
import Events from './compenants/section1'
import Leaders from './compenants/leaders'
import Community from './compenants/com'
import Footer from './compenants/footer'
import Projects from './compenants/projects'


function App() {

  return (
    
    
      <div className="bg-gray-900">
        <Nav/>
        <Header/>
        <Events/>
        <Leaders/>
        <Projects/>
        <Community/>
        <Footer/>

    

      </div>
        
  
  )
}

export default App;