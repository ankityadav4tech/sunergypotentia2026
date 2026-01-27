import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP ScrollTrigger animations.
 * @param {Function} animationCallback - Function that creates the animation.
 * @param {Array} deps - Dependency array for the effect.
 */
export const useGsapScroll = (animationCallback, deps = []) => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Execute the animation callback
            animationCallback(containerRef.current);
        }, containerRef);

        return () => ctx.revert(); // Cleanup on unmount
    }, [animationCallback, ...deps]); // eslint-disable-line react-hooks/exhaustive-deps

    return containerRef;
};
