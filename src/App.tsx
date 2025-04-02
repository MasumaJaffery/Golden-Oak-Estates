import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header';
import HomePage from '../src/components/Pages/HomePage';
import PrivacyPolicy from '../src/components/Pages/Priavcy_Policy';
import TermsServices from '../src/components/Pages/TS_Page';
import Footer from '../src/components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-services' element={<TermsServices />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
