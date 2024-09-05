import React from 'react';
import Header from './pages/header/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './pages/header/footer';
import Yig from './pages/main/homepage/yig\'adigan';

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Yig/>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
