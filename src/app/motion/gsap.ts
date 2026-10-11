import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Plugins are registered once here instead of inside individual components.
// That keeps the motion layer predictable as more sections are added later.
gsap.registerPlugin(ScrollTrigger);

export const motionPreference = '(prefers-reduced-motion: no-preference)';

export { gsap, ScrollTrigger };
