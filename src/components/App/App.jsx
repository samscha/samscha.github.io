import React from 'react';
import './App.scss';

export default ({ About, Contact, Four04, Home, Route, Routes, init }) => {
  init();

  return () => (
    <div className="app">
      <Routes>
        {/* <Route exact path="/about" element={<About />} />  */}
        {/* <Route exact path="/contact" element={<Contact />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Four04 />} />
      </Routes>
    </div>
  );
};
