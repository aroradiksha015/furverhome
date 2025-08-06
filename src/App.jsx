import Master from './components/layouts/Master';
import About from './components/pages/About';
import Blog  from './components/pages/Blog';
import  Blogsingle from './components/pages/Blogsingle';
import Contact from './components/pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import Login from './components/auth/login';
import Register from './components/auth/Regsiter';
import { ToastContainer } from 'react-toastify';
import RegisterNGO from './components/auth/RegisterNGO';
import MasterAdmin from './components/layouts/MasterAdmin';
import MasterNGO from './components/layouts/MasterNGO';


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Master/>}>
      <Route index element={<Home/>}></Route>
      <Route path="about" element = {<About/>}></Route>
      <Route path="blog" element={<Blog/>}></Route>
      <Route path="blogsingle" element={<Blogsingle/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="register" element={<Register/>}></Route>
      <Route path="registerNGO" element={<RegisterNGO/>}></Route>
      </Route>
      <Route path="*" element={<Error/>}></Route>

      {/* {admin} */}
      <Route path="/admin" element={<MasterAdmin/>}></Route>

      
      {/* {NGO} */}
      <Route path="/ngo" element={<MasterNGO/>}></Route>

      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
    
  );
}

export default App;
