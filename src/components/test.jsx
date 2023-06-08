import React, { useState } from 'react';

function Test() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    } else if (currentPage === 'about') {
      return <About />;
    } else if (currentPage === 'contact') {
      return <Contact />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => handleButtonClick('home')}>Home</button>
        <button onClick={() => handleButtonClick('about')}>About</button>
        <button onClick={() => handleButtonClick('contact')}>Contact</button>
      </nav>

      {renderPage()}
    </div>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

export default Test;
