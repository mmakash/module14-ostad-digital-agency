import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Team from './Pages/Team';
import Service from './Pages/Service';
import Project from './Pages/Project';
import Testimonials from './Pages/Testimonials';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/team' element={<Team />}>Team</Route>
        <Route path='/service' element={<Service />}>Service</Route>
        <Route path='/project' element={<Project />}>Project</Route>
        <Route path='/testimonial' element={<Testimonials />}>Testimonial</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;