import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Drinks from './components/Drinks';
import Homepage from './components/Homepage';
import Addmenu from './components/Addmenu';
import Viewfood from './components/Viewfood';
function App() {
  return (
   
   <BrowserRouter>
   <Routes>
    <Route path='/navbar' element={<Navbar/>}/>
    <Route path='/footer' element={<Footer/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/drinks' element={<Drinks/>}/>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/addmenu' element={<Addmenu/>}/>
    <Route path ='/viewfood' element={<Viewfood/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
