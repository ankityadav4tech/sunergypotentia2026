import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sun, Wind, Battery, ArrowRight, X } from 'lucide-react';
import Container from '../ui/Container';
import styles from '../../styles/modules/Credibility.module.css';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
    {
        id: 1,
        title: 'Solar Energy Systems',
        icon: <Sun size={32} strokeWidth={1.5} />,
        value: 'Industrial solar solutions engineered for reliability, savings, and long-term performance.',
        bullets: [
            'Rooftop and ground-mounted solar power plants',
            'Custom system design based on load profile and site conditions',
            'CAPEX and OPEX / PPA execution models',
            'Turnkey EPC including engineering, procurement, installation, and commissioning',
            'Long-term O&M and performance monitoring'
        ]
    },
    {
        id: 2,
        title: 'Wind Energy Systems',
        icon: <Wind size={32} strokeWidth={1.5} />,
        value: 'Wind power solutions designed to complement solar and reduce energy cost volatility.',
        bullets: [
            'Utility-scale and captive wind project execution through experienced partners',
            'Site assessment, feasibility studies, and wind resource evaluation',
            'EPC coordination and regulatory support',
            'Integration with existing power infrastructure',
            'Operations and maintenance support'
        ]
    },
    {
        id: 3,
        title: 'Hybrid & Energy Storage Solutions',
        icon: <Battery size={32} strokeWidth={1.5} />,
        value: 'Intelligent hybrid systems combining solar, wind, and storage for round-the-clock power.',
        bullets: [
            'Solar + wind hybrid plant design',
            'Battery Energy Storage Systems (BESS) for peak shaving and backup',
            'Load balancing and demand optimization',
            'Grid-compliant system architecture',
            'SCADA-enabled monitoring and performance analytics'
        ]
    }
];

const Credibility = () => { // Implementing "What We Do" section here
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const headerRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCapability, setSelectedCapability] = useState(null);

    // Handle card click to open modal
    const handleCardClick = (capability) => {
        setSelectedCapability(capability);
        setModalOpen(true);
    };

    // Handle modal close
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    // Handle Escape key to close modal
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && modalOpen) {
                handleCloseModal();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [modalOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [modalOpen]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
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
                        start: 'top 70%', // Trigger later
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Card Animation
            gsap.fromTo(cardsRef.current,
                {
                    y: 40,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 65%', // Wait till closer
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.section} ref={sectionRef} id="what-we-do">
            <Container>
                {/* Section Header */}
                <div className={styles.header} ref={headerRef}>
                    <span className={styles.eyebrow}>Our Core Capabilities</span>
                    <h2 className={styles.heading}>What We Do</h2>
                    <p className={styles.subheading}>
                        Comprehensive renewable energy solutions tailored for industrial scale and performance.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className={styles.grid}>
                    {capabilities.map((item, index) => (
                        <div
                            key={item.id}
                            className={styles.card}
                            ref={el => cardsRef.current[index] = el}
                            onClick={() => handleCardClick(item)}
                        >
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>

                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.valueStatement}>{item.value}</p>

                            <div className={styles.cardHint}>Click to learn more</div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {modalOpen && selectedCapability && (
                    <div className={styles.modalOverlay} onClick={handleCloseModal}>
                        <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                            <button className={styles.closeButton} onClick={handleCloseModal} aria-label="Close modal">
                                <X size={24} />
                            </button>

                            <div className={styles.modalContent}>
                                <div className={styles.modalIconWrapper}>
                                    {selectedCapability.icon}
                                </div>

                                <h3 className={styles.modalTitle}>{selectedCapability.title}</h3>
                                <p className={styles.modalValue}>{selectedCapability.value}</p>

                                <div className={styles.modalDivider} />

                                <ul className={styles.modalBulletList}>
                                    {selectedCapability.bullets.map((bullet, i) => (
                                        <li key={i} className={styles.modalBulletItem}>
                                            <span className={styles.modalBulletDot} />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default Credibility;
