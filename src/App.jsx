import Master from './components/layouts/Master';
import About from './components/pages/About';
import Blog  from './components/pages/Blog';
import  Blogsingle from './components/pages/Blogsingle';
import Contact from './components/pages/Contact';
// import Pricing from './components/Pricing';
// import Services from './components/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Error from './components/pages/Error';

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
      </Route>
      <Route path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
