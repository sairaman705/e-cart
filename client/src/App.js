import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import TopBrands from './pages/topBrand';
import Favourites from './pages/Favourite';
import Contact from './pages/Contact';
import Carts from './pages/Carts'
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/top-brands' element={<TopBrands />} />
      <Route path='/favourites' element={<Favourites />} />
      <Route path='/carts' element={<Carts />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;