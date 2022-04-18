import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import CheckOut from './components/CheckOut/CheckOut';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Header from './components/Header/Header';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';
import RequireAuth from './components/Login/RequireAuth';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Thankyou from './components/Thankyou/Thankyou';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/thankyou' element={<Thankyou></Thankyou>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
