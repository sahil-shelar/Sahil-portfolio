import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // <--- 1. Import createPortal
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BentoGrid: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<{ name: string; image: string } | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCert]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 lg:px-20 py-24 relative z-10 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-white">
        Knowledge <span className="text-electric-violet">Matrix</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        {/* Education 1 */}
        <div className="bento-item glass-card col-span-1 md:col-span-2 p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <GraduationCap size={120} />
          </div>
          <span className="text-sm text-cyber-lime font-mono mb-2 block">{EDUCATION[0].year}</span>
          <h3 className="text-2xl font-bold mb-1">{EDUCATION[0].degree}</h3>
          <p className="text-gray-400 mb-4">{EDUCATION[0].school}</p>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {EDUCATION[0].details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div className="bento-item glass-card col-span-1 row-span-2 p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={200} />
            </div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-cyber-lime" /> Certifications
            </h3>
            <div className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => setSelectedCert(cert)}
                        className="border-l-2 border-white/10 pl-4 py-1 hover:border-cyber-lime hover:bg-white/5 transition-all cursor-pointer"
                    >
                        <p className="text-sm text-gray-300">{cert.name}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Education 2 */}
        <div className="bento-item glass-card col-span-1 md:col-span-2 p-8 rounded-3xl relative overflow-hidden hover:bg-white/5 transition-colors">
            <span className="text-sm text-neon-blue font-mono mb-2 block">{EDUCATION[1].year}</span>
            <h3 className="text-xl font-bold mb-1">{EDUCATION[1].degree}</h3>
            <p className="text-gray-400 mb-4">{EDUCATION[1].school}</p>
            <p className="text-sm text-gray-300">{EDUCATION[1].details[0]}</p>
        </div>
      </div>

      {/* POPUP MODAL - Using Portal to render at body level */}
      {selectedCert && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="glass-card max-w-4xl w-full rounded-3xl overflow-hidden relative shadow-[0_0_50px_rgba(204,255,0,0.1)] animate-in fade-in zoom-in duration-300 border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
              <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                <Award className="text-cyber-lime" size={24} />
                {selectedCert.name}
              </h3>
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 md:p-8 bg-black/40 flex justify-center items-center min-h-[300px]">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.name}
                className="max-w-full max-h-[70vh] w-auto h-auto rounded-lg shadow-2xl border border-white/10 object-contain"
              />
            </div>
          </div>
        </div>,
        document.body // <--- Target DOM node
      )}
    </section>
  );
};

export default BentoGrid;