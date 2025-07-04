import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Videos } from './components/Videos';
import { Synopsis } from './components/Synopsis';
import { Gallery } from './components/Gallery';

function App() {
  const videoRef = useRef(null);
  const synopsisRef = useRef(null);
  const galleryRef = useRef(null);
  const location = useLocation();

  // scroll to section when URL changes
  useEffect(() => {
    const section = location.pathname.replace('/', '').toLowerCase();
    if (section === 'videos') videoRef.current?.scrollIntoView({ behavior: 'smooth' });
    else if (section === 'synopsis') synopsisRef.current?.scrollIntoView({ behavior: 'smooth' });
    else if (section === 'gallery') galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  return (
    <>
      <Hero />
      <div ref={videoRef}><Videos /></div>
      <div ref={synopsisRef}><Synopsis /></div>
      <div ref={galleryRef}><Gallery /></div>
    </>
  );
}

export default App;
