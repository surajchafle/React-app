import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './style.css'
import Message from "./Message";
import ListGroup from './components/ListGroup';
import Counts from './components/Counts';
import { Link } from 'react-router-dom';
import Error from "./components/Error";
import Login from "./components/LoginForm";
import Signup from "./components/SignUp";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="App"> 
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div><Message></Message></div>
      <div><ListGroup></ListGroup></div>
      <div><Counts/></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

