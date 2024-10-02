import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import '../src/app.css';
import FormPage from './pages/form';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Router>
        <Toaster/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} index={true}/>
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
