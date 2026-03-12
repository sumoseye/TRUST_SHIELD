import { useEffect, useRef } from 'react';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const styles = {
    hero: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '120px 24px 80px',
      position: 'relative',
      zIndex: 1,
    },
    heroTitle: {
      fontSize: 'clamp(40px, 8vw, 72px)',
      fontWeight: '700',
      lineHeight: '1.1',
      marginBottom: '24px',
    },
    heroSubtitle: {
      fontSize: '18px',
      color: 'rgba(255, 255, 255, 0.5)',
      lineHeight: '1.6',
      maxWidth: '500px',
      marginBottom: '40px',
    },
    buttonGroup: {
      display: 'flex',
      gap: '16px',
    },
    primaryBtn: {
      padding: '14px 32px',
      background: '#2563eb',
      border: 'none',
      borderRadius: '8px',
      color: '#ffffff',
      fontSize: '15px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    secondaryBtn: {
      padding: '14px 32px',
      background: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      color: '#ffffff',
      fontSize: '15px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    section: {
      padding: '100px 24px',
      position: 'relative',
      zIndex: 1,
    },
    darkSection: {
      background: 'linear-gradient(180deg, #000000 0%, #0a1628 100%)',
    },
    darkerSection: {
      background: '#0a1628',
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '60px',
    },
    sectionTitle: {
      fontSize: '36px',
      fontWeight: '700',
      marginBottom: '16px',
    },
    sectionSubtitle: {
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.5)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
    },
    card: {
      background: 'rgba(15, 23, 42, 0.5)',
      border: '1px solid rgba(59, 130, 246, 0.1)',
      borderRadius: '16px',
      padding: '32px',
      transition: 'all 0.3s ease',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '12px',
      color: '#ffffff',
    },
    cardDesc: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.5)',
      lineHeight: '1.6',
    },
    footer: {
      background: '#0f172a',
      padding: '40px 24px',
      borderTop: '1px solid rgba(59, 130, 246, 0.1)',
      position: 'relative',
      zIndex: 1,
    },
    footerContent: {
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    footerLogo: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#ffffff',
    },
    footerText: {
      fontSize: '13px',
      color: 'rgba(255, 255, 255, 0.4)',
    },
  };

  const features = [
    {
      title: 'Email Protection',
      description: 'Detect phishing attempts and malicious emails with AI-powered analysis.',
    },
    {
      title: 'URL Scanner',
      description: 'Check website safety and identify security threats instantly.',
    },
    {
      title: 'Deepfake Detection',
      description: 'Identify AI-generated and manipulated content across all media types.',
    },
    {
      title: 'Fact Checker',
      description: 'Verify claims and news against trusted sources in real-time.',
    },
  ];

  return (
    <>
      {/* Aurora Background - Multiple Layers */}
      <div className="aurora-container">
        <div className="aurora" />
        <div className="aurora-2" />
        <div className="aurora-3" />
        <div className="aurora-4" />
        <div className="aurora-5" />
      </div>

      {/* Hero */}
      <section style={styles.hero}>
        <h1 className="fade-in" style={styles.heroTitle}>
          Protect Yourself from<br />
          <span className="gradient-text">Digital Threats</span>
        </h1>

        <p className="fade-in" style={styles.heroSubtitle}>
          Advanced AI security suite to detect phishing, malware, 
          deepfakes, and misinformation.
        </p>

        <div className="fade-in" style={styles.buttonGroup}>
          <button 
            style={styles.primaryBtn}
            onMouseEnter={(e) => {
              e.target.style.background = '#1d4ed8';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#2563eb';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Get Started
          </button>
          <button 
            style={styles.secondaryBtn}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'rgba(59, 130, 246, 0.5)';
              e.target.style.background = 'rgba(59, 130, 246, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.background = 'transparent';
            }}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ ...styles.section, ...styles.darkSection }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 className="fade-in" style={styles.sectionTitle}>Features</h2>
            <p className="fade-in" style={styles.sectionSubtitle}>
              Everything you need to stay safe online
            </p>
          </div>

          <div style={styles.grid}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="fade-in"
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3 style={styles.cardTitle}>{feature.title}</h3>
                <p style={styles.cardDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...styles.section, ...styles.darkerSection, textAlign: 'center' }}>
        <h2 className="fade-in" style={styles.sectionTitle}>Ready to get started?</h2>
        <p className="fade-in" style={{ ...styles.sectionSubtitle, marginBottom: '32px' }}>
          Join thousands of users protecting themselves online.
        </p>
        <button 
          className="fade-in" 
          style={styles.primaryBtn}
          onMouseEnter={(e) => {
            e.target.style.background = '#1d4ed8';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#2563eb';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Start Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLogo}>
            Trust<span style={{ color: '#3b82f6' }}>Shield</span>
          </div>
          <p style={styles.footerText}>© 2024 TrustShield. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;