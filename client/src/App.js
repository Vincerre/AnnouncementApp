import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/layout/NavBar/NavBar';
import Register from './components/features/Register/Register';
import Login from './components/features/Login/Login';
import Logout from './components/features/Logout/Logout';
import Homepage from './components/pages/Homepage/Homepage';
import Ad from './components/pages/Ad/Ad';
import AddAd from './components/pages/AddAd/AddAd';
import AddEdit from './components/pages/AddEdit/AddEdit';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/ads/:id'} element={<Ad />} />
          <Route path={'/ads/add'} element={<AddAd />} />
          <Route path={'/ads/edit/:id'} element={<AddEdit />} />
          {/*<Route path={'/ads/remove/:id'} element={} />
          <Route path={'/search/searchPhrase'} element={} />*/}
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/logout'} element={<Logout />} />
          {/* <Route path={'*'} element={<NotFound />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Container>
    </BrowserRouter>
  );
}

export default App;
