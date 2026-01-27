import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Phone, Mail, MapPin, Sun } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import styles from '../../styles/modules/Hero.module.css';

// Assets (User Uploaded)
import imgIndustry from '../../assets/images/industry-grade-solar.png';
import imgHybrid from '../../assets/images/hybrid_solar-wind-bess.png';
import imgFinance from '../../assets/images/Flexible-Financing-Business-Models.png';
import imgDelivery from '../../assets/images/Delivery-Monitoring-Assurance.png';

const slides = [
  {
    id: 1,
    image: imgIndustry,
    headline: 'Power your needs with clean and reliable energy solutions',
    keyPoints: ['Project Development', 'EPC Expertise', 'O & M Expertise', 'AMC Services'],
  },
  {
    id: 2,
    image: imgHybrid,
    headline: '24/7 Green Power — Intelligently Combined',
    keyPoints: ['Wind-Solar Hybrid', 'BESS Integration', 'Grid Stability', 'Peak Shaving'],
  },
  {
    id: 3,
    image: imgFinance,
    headline: 'Flexible Financing & Business Models',
    keyPoints: ['Zero Upfront Cost', 'CAPEX / OPEX', 'Group Captive', 'PPA Models'],
  },
  {
    id: 4,
    image: imgDelivery,
    headline: 'Delivered on Time. Monitored for Performance.',
    keyPoints: ['Remote Monitoring', 'Predictive Maintenance', 'Performance Guarantees', 'Rapid Response'],
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const slideRefs = useRef([]);
  const textRefs = useRef([]);         // Headline
  const expertiseTitleRefs = useRef([]); // "Our Expertise" Title
  const expertiseListRefs = useRef([]);  // "Our Expertise" List wrapper

  // Navbar Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation Loop - Paused when hidden? No, simple interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Transition
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Image Fade
      slides.forEach((_, i) => {
        gsap.to(slideRefs.current[i], {
          autoAlpha: i === currentSlide ? 1 : 0,
          zIndex: i === currentSlide ? 2 : 1,
          duration: 1,
          ease: 'power2.inOut'
        });
      });

      // 2. Text Fade Up (Headline)
      gsap.fromTo(textRefs.current[currentSlide],
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 } // Reduced delay to 0.2s
      );

      // 3. Card Animations Matches below logic
      // Animate "Our Expertise" Title
      gsap.fromTo(expertiseTitleRefs.current[currentSlide],
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out', delay: 0.3 } // Matches closely with headline
      );

      // Animate List Items
      // We need to target the LIs inside the current slide's UL
      const currentListEl = expertiseListRefs.current[currentSlide];
      if (currentListEl) {
        const lis = currentListEl.querySelectorAll('li');
        gsap.fromTo(lis,
          { x: -10, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1, delay: 0.35 } // Start shortly after title
        );
      }

    });
    return () => ctx.revert();
  }, [currentSlide]);

  return (
    <section className={styles.hero}>
      {/* 1. Info Strip */}
      <div className={styles.infoStrip}>
        <Container>
          <div className={styles.infoContent}>
            <div className={styles.contactInfo}>
              <span className={styles.contactItem}><Phone size={14} className={styles.icon} /> 916692xxxx</span>
              <span className={styles.contactItem}><Mail size={14} className={styles.icon} /> info@sunergypotentia.com</span>
              <span className={styles.contactItem}><MapPin size={14} className={styles.icon} /> Pratap Nagar, Jaipur, Rajasthan, India</span>
            </div>
            <div className={styles.contactItem} style={{ cursor: 'pointer' }}>
              <Phone size={14} className={styles.icon} /> Connect with Us
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Navbar */}
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <Container>
          <div className={styles.navContent}>
            <a href="/" className={styles.logo}>
              <Sun className={styles.icon} color="var(--color-accent)" fill="var(--color-accent)" />
              Sunergy Potentia
            </a>
            <ul className={styles.navLinks}>
              <li><a href="#projects" className={styles.navLink}>Projects</a></li>
              <li><a href="#domains" className={styles.navLink}>Domains</a></li>
              <li><a href="#experience" className={styles.navLink}>Experience</a></li>
              <li><a href="#connections" className={styles.navLink}>Connections</a></li>
            </ul>
            <Button
              variant="primary"
              style={{
                background: 'transparent',
                border: '1px solid var(--color-accent)',
                color: 'var(--color-accent)', // Fixed contrast issue
                padding: '0.4rem 1rem'
              }}
            >
              Connect with Us
            </Button>
          </div>
        </Container>
      </nav>

      {/* 3. Slider */}
      <div className={styles.sliderContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            ref={el => slideRefs.current[index] = el}
          >
            <img src={slide.image} alt={slide.headline} className={styles.bgImage} />



            <Container style={{ height: '100%', position: 'relative' }}>
              {/* Headline Area */}
              <div
                className={styles.mainTextContent}
                style={{ position: 'absolute', top: '25%', left: '1rem', right: '1rem' }}
              >
                <h1 className={styles.headline} ref={el => textRefs.current[index] = el}>
                  {slide.headline}
                </h1>
              </div>

              {/* Glass Card: Shared position, content changes */}
              <div className={styles.glassCard}>
                <h3
                  className={styles.expertiseTitle}
                  ref={el => expertiseTitleRefs.current[index] = el}
                >
                  Our Expertise
                </h3>
                <ul
                  className={styles.expertiseList}
                  ref={el => expertiseListRefs.current[index] = el}
                >
                  {slide.keyPoints.map((point, i) => (
                    <li key={i} className={styles.expertiseItem}>
                      <span className={styles.bullet} /> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </div>
        ))}

        {/* Dots */}
        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
