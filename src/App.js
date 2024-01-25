import Index from './components/Index.js'
import Doctors from './components/doctors'
import Contact from './components/contact'
import About from './components/about'
import Blog from './components/blog'
import Details from './components/blog-details'
import './components/extra.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './assets/css/maicons.css'
import './assets/css/theme.css'
import './assets/css/bootstrap.css'
function App() {
  return (
    
    <div className="App">
      
      <Router>
        <Routes>
        <Route exact path='/' element={< Index />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
        <Route exact path='/doctors' element={< Doctors />}></Route>
        <Route exact path='/details' element={< Details />}></Route>
        <Route exact path='/blog' element={< Blog />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
