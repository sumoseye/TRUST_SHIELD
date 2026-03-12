import { useEffect, useRef } from 'react';
import FeatureCard from './FeatureCard';
import './Home.css';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    // Scroll handler for parallax
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hero = document.querySelector('.hero-content');
      
      if (hero && scrollY < window.innerHeight) {
        hero.style.transform = `translateY(${scrollY * 0.4}px)`;
        hero.style.opacity = Math.max(1 - scrollY / 500, 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection observer for fade-in
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

  const features = [
    {
      icon: 'shield',
      title: 'Email Protection',
      description: 'Detect phishing attempts with AI-powered analysis.',
    },
    {
      icon: 'link',
      title: 'URL Scanner',
      description: 'Check website safety and identify threats instantly.',
    },
    {
      icon: 'scan',
      title: 'Deepfake Detection',
      description: 'Identify AI-generated and manipulated content.',
    },
    {
      icon: 'check',
      title: 'Fact Checker',
      description: 'Verify claims against trusted sources in real-time.',
    },
  ];

  return (
    <div className="home">
      {/* Aurora Background */}
      <div className="aurora">
        <div className="aurora-blob aurora-1"></div>
        <div className="aurora-blob aurora-2"></div>
        <div className="aurora-blob aurora-3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in">
            Protect Yourself from
            <span className="gradient-text"> Digital Threats</span>
          </h1>
          <p className="fade-in">
            Advanced AI security suite to detect phishing, malware,
            deepfakes, and misinformation.
          </p>
          <div className="button-group fade-in">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="fade-in">Powerful Features</h2>
            <p className="fade-in">Everything you need to stay safe online</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="fade-in">Ready to get started?</h2>
          <p className="fade-in">
            Join thousands of users protecting themselves online.
          </p>
          <button className="btn-primary fade-in">Start Free Trial</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            Trust<span>Shield</span>
          </div>
          <p>© 2024 TrustShield. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;