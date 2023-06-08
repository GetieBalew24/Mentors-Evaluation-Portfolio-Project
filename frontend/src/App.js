import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ContactsList from './pages/ContactsList';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
 
//components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts-list' element={<ContactsList/>}/>
      <Route path='/contact/:name' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
       <Route path='*' element={<NotFound/>}/>
            </Routes>
    </div>
     </Router>
  );
}
export default App;