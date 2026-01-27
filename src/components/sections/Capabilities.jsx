import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../ui/Container';
import styles from '../../styles/modules/Capabilities.module.css';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    id: 1,
    value: '50+',
    label: 'Projects Executed Across Industrial & Commercial Sites'
  },
  {
    id: 2,
    value: 'MW-Scale',
    label: 'Solar, Wind & Hybrid Capacity Enabled'
  },
  {
    id: 3,
    value: 'Multi-Model',
    label: 'CAPEX · OPEX · Group Captive · PPA'
  },
  {
    id: 4,
    value: 'Pan-India',
    label: 'Execution Through Proven Delivery Partners'
  },
  {
    id: 5,
    value: 'End-to-End',
    label: 'Engineering · EPC · O&M · Performance Monitoring'
  }
];

const Capabilities = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(itemsRef.current,
        {
          y: 20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%', // Animate when section is near view
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef} id="capabilities">
      <Container>
        <div className={styles.grid}>
          {metrics.map((item, index) => (
            <div
              key={item.id}
              className={styles.metricItem}
              ref={el => itemsRef.current[index] = el}
            >
              <div className={styles.value}>{item.value}</div>
              <div className={styles.label}>{item.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Capabilities;
