import './App';
import React from 'react';
import Nav from './Nav';
import Login from './loginpage';
import Home from './homepage';
import Contact from './contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
         <Routes>
         <Route path="/" element={<Nav />}>
                <Route index element={<Login/>}/>
                <Route path="home"element={<Home/>}/>
                <Route path="contact"element={<Contact />}/>
            </Route>
         </Routes>
    </BrowserRouter>
  );
}
export default App;
