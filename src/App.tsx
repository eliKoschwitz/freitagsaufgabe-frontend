import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OpenTodos from "./OpenTodos";
import Home from "./Home";

function App () {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path ="/" element={<Home/>} />
                  <Route path ="/OpenTodos">
                      <Route index element={<OpenTodos/>} />
                      <Route path=":number" element={<OpenTodos/>} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  )
}
export default App;