import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../ui/Container';
import styles from '../../styles/modules/BusinessModels.module.css';

gsap.registerPlugin(ScrollTrigger);

const models = [
    {
        id: 1,
        title: 'CAPEX Model',
        subtitle: 'Asset Ownership',
        bullets: [
            'Client invests upfront capital for the power plant',
            'Significant reduction in electricity cost over system life',
            'Accelerated depreciation and tax benefits',
            'Full operational control and long-term support'
        ]
    },
    {
        id: 2,
        title: 'OPEX / PPA Model',
        subtitle: 'Zero Upfront',
        bullets: [
            'No upfront investment by the client',
            'Client pays per unit of energy consumed',
            'Tariffs from ~₹4.5 per unit*',
            'Predictable energy costs for 15–25 years'
        ]
    },
    {
        id: 3,
        title: 'Group Captive / Open Access Model',
        subtitle: 'Offsite Power',
        bullets: [
            'Offsite renewable power for large energy consumers',
            'Mandated ~26% client equity participation',
            'PPAs from ~₹3.0–₹3.7 per unit*',
            '30–50% reduction in electricity cost'
        ]
    }
];

const BusinessModels = () => {
    const sectionRef = useRef(null);
    const panelsRef = useRef([]);
    const headerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current.children,
                { y: 20, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    }
                }
            );

            gsap.fromTo(panelsRef.current,
                { y: 30, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.7,
                    stagger: 0.05,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 65%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.section} ref={sectionRef} id="business-models">
            <Container>
                {/* Section Header - Centered */}
                <div className={styles.header} ref={headerRef}>
                    <h2 className={styles.heading}>Flexible Ways to Go Renewable</h2>
                    <p className={styles.subheading}>
                        Commercial models tailored to your financial and operational goals
                    </p>
                </div>

                {/* Three-Column Comparison Layout */}
                <div className={styles.panelsGrid}>
                    {models.map((model, index) => (
                        <div
                            key={model.id}
                            className={styles.panel}
                            ref={el => panelsRef.current[index] = el}
                        >
                            {/* Model Title & Subtitle */}
                            <h3 className={styles.modelTitle}>{model.title}</h3>
                            <p className={styles.modelSubtitle}>{model.subtitle}</p>

                            {/* Bullet List */}
                            <ul className={styles.bulletList}>
                                {model.bullets.map((bullet, i) => (
                                    <li key={i} className={styles.bullet}>{bullet}</li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button className={styles.ctaButton}>
                                Understand This Model
                            </button>
                        </div>
                    ))}
                </div>

                {/* Supporting Note */}
                <p className={styles.disclaimer}>
                    *Tariffs and savings are indicative and subject to site conditions, state policies, and regulatory approvals.
                </p>
            </Container>
        </section>
    );
};

export default BusinessModels;
