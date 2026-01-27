import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../../styles/modules/Industries.module.css';
import Container from '../../styles/ui/Container.module.css';

// Import images
import imgManufacturing from '../../assets/images/industries/industry_manufacturing.png';
import imgMsme from '../../assets/images/industries/industry_msme.png';
import imgHealthcare from '../../assets/images/industries/industry_healthcare.png';
import imgHospitality from '../../assets/images/industries/industry_hospitality.png';
import imgEducation from '../../assets/images/industries/industry_education.png';
import imgDatacenters from '../../assets/images/industries/industry_datacenters.png';

gsap.registerPlugin(ScrollTrigger);

const industriesData = [
  {
    id: 'manufacturing',
    title: 'Manufacturing & Process Industries',
    tagline: 'High-load operations with zero tolerance for downtime.',
    description: 'Energy-intensive manufacturing facilities require stable, cost-efficient power to maintain productivity and margins. Our solutions are designed to align with continuous load profiles, shift-based consumption, and long operating hours while reducing long-term energy costs.',
    focus: 'Cost reduction · Load stability · Long-term reliability',
    image: imgManufacturing
  },
  {
    id: 'msme',
    title: 'MSMEs & Industrial Parks',
    tagline: 'Scalable energy solutions for growing businesses.',
    description: 'MSMEs and industrial clusters need flexible renewable models that reduce energy costs without stressing capital. We design systems that scale with business growth while simplifying approvals, execution, and long-term operations.',
    focus: 'Zero upfront options · Scalability · Ease of execution',
    image: imgMsme
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Hospitals',
    tagline: 'Reliable power for mission-critical environments.',
    description: 'Hospitals and healthcare facilities demand uninterrupted power with strict compliance requirements. Our renewable and hybrid systems are engineered to support critical infrastructure, backed by monitoring and maintenance strategies that prioritize reliability.',
    focus: 'High uptime · Compliance · Backup integration',
    image: imgHealthcare
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Commercial Complexes',
    tagline: 'Energy efficiency without compromising guest experience.',
    description: 'Hotels, malls, and commercial complexes operate on variable load patterns and high daytime consumption. Our solutions help reduce operating costs while maintaining comfort, aesthetics, and brand standards.',
    focus: 'Daytime optimization · Cost predictability · Sustainability goals',
    image: imgHospitality
  },
  {
    id: 'education',
    title: 'Education & Institutional Campuses',
    tagline: 'Long-term savings for large, distributed campuses.',
    description: 'Educational institutions benefit from predictable energy costs and long asset life. We deliver campus-wide renewable solutions that align with academic schedules, funding models, and sustainability objectives.',
    focus: 'Long-term savings · Campus-wide deployment · Low operational complexity',
    image: imgEducation
  },
  {
    id: 'datacenters',
    title: 'IT, Data Centers & Warehousing',
    tagline: 'Power systems built for consistency and scale.',
    description: 'Data centers and logistics facilities require dependable energy to support digital and supply-chain operations. Our hybrid and storage-integrated solutions help manage peak demand, improve reliability, and support expansion plans.',
    focus: 'Consistent supply · Peak management · Future-ready infrastructure',
    image: imgDatacenters
  }
];

const Industries = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const [activeIndustry, setActiveIndustry] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop: Pinned Scrollytelling
        "(min-width: 1024px)": function () {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=400%", // Pin for 4 screens height
              scrub: true,
              pin: true,
              anticipatePin: 1,
              onUpdate: (self) => {
                // Calculate active index based on scroll progress
                const progress = self.progress;
                const index = Math.min(
                  Math.floor(progress * industriesData.length),
                  industriesData.length - 1
                );
                setActiveIndustry(index);
              }
            }
          });
        },
        // Mobile: Normal scroll (handled by CSS, no JS needed for logic strictly)
        "(max-width: 1023px)": function () {
          // No pinning on mobile
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef} id="industries">
      <div className={`${Container.container} ${styles.container}`} ref={containerRef}>

        {/* Desktop Layout */}
        <div className={styles.splitLayout}>

          {/* Left Column: List */}
          <div className={styles.leftColumn} ref={leftColRef}>
            <div className={styles.header}>
              <h2 className={styles.sectionTitle}>Industries We Serve</h2>
              <p className={styles.sectionSubtitle}>Renewable energy solutions designed around real operational needs</p>
            </div>

            <div className={styles.industryList}>
              {industriesData.map((item, index) => (
                <div
                  key={item.id}
                  className={`${styles.industryItem} ${index === activeIndustry ? styles.activeItem : ''}`}
                  onClick={() => {
                    // Start scroll to that point if clickable? (Optional enhancement)
                    // For now, it's driven by scroll.
                  }}
                >
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescriptor}>{item.tagline}</p>
                </div>
              ))}
            </div>

            <p className={styles.reinforcement}>
              Each solution is customized to sector-specific load behavior, regulatory frameworks, and operational priorities.
            </p>
          </div>

          {/* Right Column: Visual Panel */}
          <div className={styles.rightColumn}>
            {industriesData.map((item, index) => (
              <div
                key={`${item.id}-img`}
                className={`${styles.imagePanel} ${index === activeIndustry ? styles.activePanel : ''}`}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className={styles.overlay}>
                  <div className={styles.overlayNotch}></div>
                  <span className={styles.overlayTitle}>{item.title}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile Layout (Visible only on mobile via CSS) */}
        <div className={styles.mobileLayout}>
          <div className={styles.header}>
            <h2 className={styles.sectionTitle}>Industries We Serve</h2>
            <p className={styles.sectionSubtitle}>Renewable energy solutions designed around real operational needs</p>
          </div>

          <div className={styles.mobileStack}>
            {industriesData.map((item) => (
              <div key={`mob-${item.id}`} className={styles.mobileCard}>
                <div className={styles.mobileImageWrapper}>
                  <img src={item.image} alt={item.title} className={styles.mobileImage} />
                </div>
                <div className={styles.mobileContent}>
                  <h3 className={styles.mobileTitle}>{item.title}</h3>
                  <p className={styles.mobileTagline}>{item.tagline}</p>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.reinforcement}>
            Each solution is customized to sector-specific load behavior, regulatory frameworks, and operational priorities.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Industries;
