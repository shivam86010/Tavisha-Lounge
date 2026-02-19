



// src/components/Layout.jsx (create this new file)
import React, { useState, useEffect } from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        const height = header.offsetHeight;
        setHeaderHeight(height);
        // Set CSS variable for global use
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    // Initial update
    updateHeaderHeight();

    // Update on resize and scroll
    window.addEventListener('resize', updateHeaderHeight);
    
    // Create observer for header changes
    const observer = new ResizeObserver(updateHeaderHeight);
    const header = document.querySelector('header');
    if (header) {
      observer.observe(header);
    }

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main style={{ marginTop: headerHeight }}>
        {children}
      </main>
    </>
  );
};

export default Layout;