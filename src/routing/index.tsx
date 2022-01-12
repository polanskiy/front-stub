import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/components/app/app';
import Home from '@/pages/home';
import Test from '@/pages/test';

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
};

export default Routing;
