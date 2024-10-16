import React from 'react';
import Login from './component/voter/Login';
import Signup from "./component/voter/Signup"
import Advice from './component/Advice';
import Voting from './component/voter/Voting';
import Result from './component/voter/Result';
import Instruction from './component/voter/Instruction';
import Home from './component/voter/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Voting" element={<Voting />} />
          <Route path="/Advice" element={<Advice />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/Instruction" element={<Instruction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
