import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    navWrapper: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      padding: scrolled ? '10px 20px' : '20px 20px',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    navOuter: {
      position: 'relative',
      borderRadius: '30px',
      padding: '1px',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
      boxShadow: scrolled
        ? '0 10px 40px rgba(0, 0, 0, 0.4), 0 0 100px rgba(59, 130, 246, 0.15)'
        : '0 5px 30px rgba(0, 0, 0, 0.25)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: scrolled ? 'scale(0.97)' : 'scale(1)',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      minWidth: '700px',
      padding: '14px 28px',
      borderRadius: '30px',
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.6) 100%)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
    },
    // Inner highlight
    innerHighlight: {
      position: 'absolute',
      top: '1px',
      left: '20%',
      right: '20%',
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      borderRadius: '100%',
    },
    logo: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#ffffff',
      textDecoration: 'none',
      letterSpacing: '-0.5px',
      position: 'relative',
      zIndex: 1,
    },
    logoAccent: {
      background: 'linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    menu: {
      display: 'flex',
      gap: '6px',
      alignItems: 'center',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      position: 'relative',
      zIndex: 1,
    },
    link: {
      color: 'rgba(255, 255, 255, 0.6)',
      textDecoration: 'none',
      fontSize: '13px',
      fontWeight: '500',
      padding: '8px 16px',
      borderRadius: '20px',
      transition: 'all 0.25s ease',
      cursor: 'pointer',
      background: 'transparent',
      border: 'none',
      position: 'relative',
    },
    button: {
      padding: '9px 20px',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.2) 100%)',
      border: '1px solid rgba(59, 130, 246, 0.25)',
      borderRadius: '20px',
      color: '#60a5fa',
      fontSize: '13px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.25s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    buttonShine: {
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      transition: 'left 0.5s ease',
    },
  };

  return (
    <div style={styles.navWrapper}>
      <div style={styles.navOuter}>
        <div style={styles.innerHighlight} />
        <nav style={styles.nav}>
          <a href="#" style={styles.logo}>
            Trust<span style={styles.logoAccent}>Shield</span>
          </a>

          <ul style={styles.menu}>
            <li>
              <a 
                href="#features" 
                style={styles.link}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.6)';
                  e.target.style.background = 'transparent';
                }}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                style={styles.link}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.6)';
                  e.target.style.background = 'transparent';
                }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                style={styles.link}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.6)';
                  e.target.style.background = 'transparent';
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <button 
                style={styles.button}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.5) 0%, rgba(37, 99, 235, 0.4) 100%)';
                  e.target.style.borderColor = 'rgba(96, 165, 250, 0.5)';
                  e.target.style.color = '#93c5fd';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.2) 100%)';
                  e.target.style.borderColor = 'rgba(59, 130, 246, 0.25)';
                  e.target.style.color = '#60a5fa';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Get Started
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;