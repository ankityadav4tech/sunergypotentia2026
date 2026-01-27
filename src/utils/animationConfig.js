import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const EASINGS = {
    primary: 'power3.out',
    secondary: 'power2.inOut',
    smooth: 'expo.out',
};

export const DURATIONS = {
    fast: 0.3,
    base: 0.6,
    slow: 1.0,
    hero: 1.5,
};

export const defaultScrollTrigger = {
    start: 'top 85%',
    end: 'bottom 15%',
    toggleActions: 'play none none reverse',
    markers: false, // Set to true for debugging
};
