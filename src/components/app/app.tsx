import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/test.png';
import './app.css';

const App: React.FC = ({ children }) => (
  <div className="app">
    <img src={logo} alt="" />
    <nav className="app__nav">
      <Link to="/">Home</Link>
      <Link to="test">Test</Link>
    </nav>
    <h1 className="app__title">This is react-stub</h1>
    {children}
  </div>
);

export default App;
