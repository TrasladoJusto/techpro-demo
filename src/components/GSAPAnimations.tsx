"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimations() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Small delay to ensure all DOM elements are painted
    const timer = setTimeout(() => {
      const allReveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
      if (!allReveals.length) return;

      if (prefersReduced) {
        gsap.set(allReveals, { autoAlpha: 1, y: 0 });
        return;
      }

      const heroThreshold = window.innerHeight * 0.85;
      const heroEls: HTMLElement[] = [];
      const scrollEls: HTMLElement[] = [];

      allReveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < heroThreshold) {
          heroEls.push(el);
        } else {
          scrollEls.push(el);
        }
      });

      // Hero: immediate staggered fade-up
      if (heroEls.length) {
        gsap.fromTo(
          heroEls,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            stagger: (i) => {
              const d = heroEls[i].getAttribute('data-reveal-delay');
              return d ? Number(d) * 0.1 : i * 0.1;
            },
          }
        );
      }

      // Scroll: individual ScrollTrigger per element (more reliable than batch)
      scrollEls.forEach((el) => {
        const delay = el.getAttribute('data-reveal-delay');
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: delay ? Number(delay) * 0.08 : 0,
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
