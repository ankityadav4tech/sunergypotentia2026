import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import Container from '../ui/Container';
import styles from '../../styles/modules/Process.module.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: 'Feasibility & Site Assessment',
    description: 'Every project begins with a data-backed feasibility study.',
    bullets: [
      'Site inspection and technical due diligence',
      'Energy consumption and load profile analysis',
      'Solar irradiation / wind resource evaluation',
      'Preliminary yield and savings estimation'
    ],
    outcome: 'A clear understanding of technical viability and commercial potential.'
  },
  {
    id: 2,
    title: 'Engineering & System Design',
    description: 'Optimized designs tailored to site conditions and energy goals.',
    bullets: [
      'System sizing and technology selection',
      'Electrical and structural engineering',
      'Hybrid configuration planning',
      'Design optimization'
    ],
    outcome: 'A bankable, performance-oriented system design.'
  },
  {
    id: 3,
    title: 'Approvals & Regulatory Coordination',
    description: 'Smooth navigation of statutory and utility requirements.',
    bullets: [
      'DISCOM and utility coordination',
      'Net-metering / open access approvals',
      'Compliance with regulations',
      'Documentation and liaison support'
    ],
    outcome: 'Timely approvals with minimal client involvement.'
  },
  {
    id: 4,
    title: 'Procurement & Construction',
    description: 'Quality-driven execution through trusted delivery partners.',
    bullets: [
      'Equipment sourcing from approved vendors',
      'EPC coordination and site management',
      'Adherence to safety standards',
      'Progress monitoring and reporting'
    ],
    outcome: 'On-schedule construction with controlled risk.'
  },
  {
    id: 5,
    title: 'Testing & Commissioning',
    description: 'Ensuring systems perform exactly as designed.',
    bullets: [
      'System testing and quality checks',
      'Grid synchronization and trial runs',
      'Performance validation',
      'Handover documentation'
    ],
    outcome: 'A fully commissioned, grid-compliant power plant.'
  },
  {
    id: 6,
    title: 'O&M & Performance Monitoring',
    description: 'Long-term reliability through continuous monitoring.',
    bullets: [
      'Preventive and corrective maintenance',
      'SCADA-enabled performance tracking',
      'Generation analysis and reporting',
      'AMC and long-term support options'
    ],
    outcome: 'Sustained generation and predictable returns.'
  }
];

const Process = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const ribbonRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation (Left to Right)
      const headerElements = headerRef.current.children;
      gsap.fromTo(headerElements,
        { x: -50, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%', // Delayed start for better visibility
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate ribbon flowing
      gsap.fromTo(ribbonRef.current,
        { width: '0%' },
        {
          width: '100%',
          duration: 1.5,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          }
        }
      );

      // Animate steps Content (Text Fields)
      stepsRef.current.forEach((el, index) => {
        const content = el.querySelector(`.${styles.flipCard}`);
        const connector = el.querySelector(`.${styles.connectorNode}`);

        // Node pop in
        gsap.fromTo(connector,
          { scale: 0, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.5,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
            }
          }
        );

        // Text slide
        gsap.fromTo(content,
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: 'power2.out',
            delay: (index * 0.15) + 0.3,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef} id="how-we-deliver">
      <Container>
        <div className={styles.header} ref={headerRef}>
          <h2 className={styles.heading}>How We Deliver</h2>
          <p className={styles.subheading}>A disciplined, engineering-driven execution framework.</p>
        </div>

        <div className={styles.processContainer}>
          {/* Visual Ribbon Background Layer */}
          <div className={styles.ribbonTrack}>
            <div className={styles.ribbonFill} ref={ribbonRef} />
          </div>

          <div className={styles.stepsWrapper}>
            {steps.map((step, index) => (
              <div
                key={step.id}
                // Index 0 (Step 1): Above. Index 1 (Step 2): Below.
                className={`${styles.step} ${index % 2 === 0 ? styles.stepAbove : styles.stepBelow}`}
                ref={el => stepsRef.current[index] = el}
              >
                {/* Step Connector Node */}
                <div className={styles.connectorNode}>
                  <div className={styles.stepNumber}>0{step.id}</div>
                  <div className={styles.connectorArrow} />
                </div>

                {/* Flip Card Wrapper */}
                <div className={styles.flipCard}>
                  <div className={styles.flipCardInner}>

                    {/* Front Face: Title + Description */}
                    <div className={styles.cardFront}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.description}</p>
                      {/* Visual hint for interaction maybe? */}
                    </div>

                    {/* Back Face: Bullets */}
                    <div className={styles.cardBack}>
                      <ul className={styles.bulletList}>
                        {step.bullets.map((bullet, i) => (
                          <li key={i} className={styles.bullet}>
                            <Check size={12} className={styles.bulletIcon} />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
