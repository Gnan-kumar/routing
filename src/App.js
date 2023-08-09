import Empolyeeinfo from './Componets/Empolyeeinfo';
import Aboutpage from './Componets/aboutpage';
import Contactpage from './Componets/contactpage';
import Homepage from './Componets/homepage';
import Lognipage from './Componets/lognipage';
import Userpage from './Componets/userpage';
import logo from './logo.svg';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'



function App() {
  return (
   <div>
    
    <BrowserRouter>
    <Link to="/"><h1>Dell</h1></Link>
     {/*<a href="/Contact">contactpage</a>*/}
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
      <Link to="/login">login</Link>
      <Link to ="/user">userpage</Link>
       
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path= '/about' element={<Aboutpage/>}/>
        <Route path='/contact'elem ent={<Contactpage/>}/>
        <Route path='/login'element={<Lognipage/>}/>
        <Route path='/User'element={<Userpage/>}/>
        <Route path="/users/:userid" element={<Empolyeeinfo/>}/>
        

      </Routes>
    
    
    </BrowserRouter>
   </div>
  );
}

export default App;
