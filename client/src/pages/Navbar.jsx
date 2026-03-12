import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '16px 0',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(59, 130, 246, 0.1)' : 'none',
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#ffffff',
      textDecoration: 'none',
    },
    logoAccent: {
      color: '#3b82f6',
    },
    menu: {
      display: 'flex',
      gap: '32px',
      alignItems: 'center',
      listStyle: 'none',
    },
    link: {
      color: 'rgba(255, 255, 255, 0.6)',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'color 0.2s ease',
      cursor: 'pointer',
    },
    button: {
      padding: '10px 24px',
      background: '#2563eb',
      border: 'none',
      borderRadius: '8px',
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background 0.2s ease',
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <a href="#" style={styles.logo}>
          Trust<span style={styles.logoAccent}>Shield</span>
        </a>

        <ul style={styles.menu}>
          <li>
            <a href="#features" style={styles.link}>Features</a>
          </li>
          <li>
            <a href="#about" style={styles.link}>About</a>
          </li>
          <li>
            <a href="#contact" style={styles.link}>Contact</a>
          </li>
          <li>
            <button style={styles.button}>Get Started</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;