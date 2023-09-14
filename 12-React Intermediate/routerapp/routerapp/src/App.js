import './App.css';
import { Link, NavLink, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Lab from './components/Lab';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';


function App() {
  return (
    <div className="App">
      
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/Support'>Support</NavLink>
          </li>
          <li>
            <NavLink to='/lab'>Lab</NavLink>
          </li>
        </ul>
        


      </nav>


      
      <Routes>
        <Route path='/' element={<MainHeader/>} >

          {/* default route */}
          <Route index element={<Home />} />
          <Route path='/support' element={<Support/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/lab' element={<Lab />} />
          <Route path='*' element={<NotFound/>} />
        </Route>
  


      </Routes>

    </div>
  );
}

export default App;
