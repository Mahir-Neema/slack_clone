import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Routes>
            <Route path='/'element={<p>home</p>} />
            <Route path='/about'element={<p>about</p>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
