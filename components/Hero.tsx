import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import MagneticButton from './MagneticButton';
import { ArrowDownRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-text-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        skewY: 7
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
      .from(".hero-btn", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.3");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 lg:px-20 z-10">
      <div className="max-w-5xl">
        <h1 ref={titleRef} className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
          <div className="overflow-hidden"><span className="hero-text-line block text-white">FULL</span></div>
          <div className="overflow-hidden"><span className="hero-text-line block text-white/50">STACK</span></div>
          <div className="overflow-hidden"><span className="hero-text-line block text-gradient">DEVELOPER</span></div>
        </h1>
        
        <div 
          ref={subtitleRef} 
          className="max-w-3xl mb-12 border-l-2 border-green-500 pl-6 opacity-90"
        >
          {PERSONAL_INFO.summary.map((paragraph, index) => (
            <p 
              key={index} 
              className="text-base md:text-lg text-gray-300 leading-7 mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="hero-btn relative z-50">
          <MagneticButton href="#contact">
            HIRE ME <ArrowDownRight className="ml-2 w-5 h-5" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;