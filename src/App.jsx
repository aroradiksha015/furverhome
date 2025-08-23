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
import AddBreeds from './components/admin/breeds/AddBreeds';
import AddPet from './components/ngo/AddPet';
import ManageBreeds from './components/admin/breeds/ManageBreeds';
import ViewBreeds from './components/user/ViewBreeds';
import ViewPets from './components/user/ViewPets';
import ViewNG0 from './components/user/ViewNGO';
import ManagePets from './components/ngo/ManagePet';
import ManagePet from './components/admin/pets/ManagePet';
import AddNGO from './components/admin/ngos/AddNGO';
import ManageNGO from './components/admin/ngos/ManageNGO';
import UpdateBreed from './components/admin/breeds/UpdateBreeds';
import UpdatePet from './components/ngo/UpdatePet';
import UpdateNGO from './components/admin/ngos/UpdateNGO';
import { ManageUsers } from './components/admin/users/ManageUsers';
import { UpdateUsers } from './components/admin/users/UpdateUsers';
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Master/>}>
      <Route index element={<Home/>}></Route>
      <Route path="about" element = {<About/>}></Route>

      <Route path="contact" element={<Contact/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="register" element={<Register/>}></Route>
      <Route path="registerNGO" element={<RegisterNGO/>}></Route>
      <Route path="viewBreeds" element={<ViewBreeds/>}></Route>
      <Route path="viewPets" element={<ViewPets/>}></Route>
      <Route path="viewNGO" element = {<ViewNG0/>}></Route>
      </Route>
      <Route path="*" element={<Error/>}></Route>

      {/* {admin} */}
      <Route path="/admin" element={<MasterAdmin/>}>
      <Route path = "users" element ={<ManageUsers/>}></Route>
      <Route path="addBreeds" element={<AddBreeds/>}></Route>
      <Route path="manageBreeds" element={<ManageBreeds/>}></Route>
      <Route path="addNGO" element={<AddNGO/>}></Route>
      <Route path="manageNGO" element={<ManageNGO/>}></Route>
      <Route path="managePet"element={<ManagePet/>}></Route>
      <Route path="updateBreed/:id"element={<UpdateBreed/>}></Route>
      <Route path = "updateNGO/:id" element={<UpdateNGO/>}></Route>
      <Route path = "updateUsers/:id" element={<UpdateUsers/>}></Route>

      </Route>

      
      {/* {NGO} */}
      <Route path="/ngo" element={<MasterNGO/>}>
      {/* <Route path="/registerNGO" element={<RegisterNGO/>}></Route> */}
      <Route path="addPets" element={<AddPet/>}></Route>
      <Route path="managePets" element={<ManagePets/>}></Route>
      <Route path="updatePets/:id" element={<UpdatePet/>}></Route>

      </Route>

      

      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
    
  );
}

export default App;
