import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import { styled } from 'styled-components';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <AppBody>
          <Sidebar/>
          <Routes>
            <Route path='/'element={<h1>ok</h1>} />
          </Routes>
        </AppBody>
      </div>
    </BrowserRouter>
  );
}

export default App;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;