import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageCircle } from 'lucide-react';
import styles from '../../styles/modules/Contact.module.css';
import Container from '../../styles/ui/Container.module.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Gentle fade in for the whole section
            gsap.fromTo(
                [leftColRef.current, rightColRef.current],
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.section} ref={sectionRef} id="contact">
            <div className={`${Container.container} ${styles.container}`}>

                {/* Left Side: Thought & Assurance */}
                <div className={styles.leftColumn} ref={leftColRef}>
                    <h2 className={styles.headline}>
                        Make renewable energy work for your operations.
                    </h2>
                    <p className={styles.description}>
                        Whether you need Solar, Wind, or a Hybrid mix, we structure solutions around your load profile and financial goals. From CAPEX to OPEX and Group Captive models, we focus on what makes the most commercial sense for your industry.
                    </p>

                    <div className={styles.trustSignals}>
                        <span className={styles.signal}>Feasibility-first approach</span>
                        <span className={styles.separator}>•</span>
                        <span className={styles.signal}>Industry-specific designs</span>
                        <span className={styles.separator}>•</span>
                        <span className={styles.signal}>Transparent commercial models</span>
                    </div>
                </div>

                {/* Right Side: Action Without Friction */}
                <div className={styles.rightColumn} ref={rightColRef}>

                    <div className={styles.actionGroup}>
                        <button className={styles.primaryCta}>
                            Request a Feasibility Assessment
                            <ArrowRight className={styles.ctaIcon} size={20} />
                        </button>

                        <button className={styles.secondaryCta}>
                            <MessageCircle className={styles.ctaIcon} size={20} />
                            Talk to an Energy Expert
                        </button>
                    </div>

                    <div className={styles.microReassurance}>
                        <span>No obligation</span>
                        <span>Confidential discussion</span>
                        <span>Industry-focused assessment</span>
                    </div>

                    {/* Optional: What Happens Next Flow */}
                    <div className={styles.nextSteps}>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>01</span>
                            <span className={styles.stepText}>Share basic details</span>
                        </div>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>02</span>
                            <span className={styles.stepText}>Technical & commercial assessment</span>
                        </div>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>03</span>
                            <span className={styles.stepText}>Receive clear recommendation</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
