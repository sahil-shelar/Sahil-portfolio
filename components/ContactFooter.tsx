import { Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import MagneticButton from './MagneticButton';

const ContactFooter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formPayload = new FormData(event.currentTarget);
    formPayload.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });

      const data = await response.json();

      if (data.success) {
        alert("Form submitted successfully!");
        // Clear React state to visually clear the inputs
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Form submission failed: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="relative px-6 lg:px-20 pt-32 pb-12 z-10 bg-gradient-to-t from-black to-transparent">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-12 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">
          LET'S TALK
        </h2>

        {/* Enquiry Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-xl mb-20 glass-card p-8 md:p-10 rounded-3xl border border-white/10 text-left">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-neon-blue mb-2 tracking-wider">NAME</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyber-lime transition-colors font-mono"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-neon-blue mb-2 tracking-wider">EMAIL</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyber-lime transition-colors font-mono"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-neon-blue mb-2 tracking-wider">MESSAGE</label>
              <textarea 
                id="message" 
                name="message" 
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyber-lime transition-colors font-mono resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="flex justify-center pt-2">
              <MagneticButton className="w-full md:w-auto flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" /> SENDING...
                  </>
                ) : (
                  "SEND ENQUIRY"
                )}
              </MagneticButton>
            </div>
          </div>
        </form>
        
        {/* Direct Email Link */}
        <div className="mb-16">
            <p className="text-gray-500 mb-6 font-mono text-sm">OR SEND A DIRECT EMAIL</p>
            <MagneticButton href={`mailto:${PERSONAL_INFO.email}`} className="text-xl md:text-2xl px-12 py-6">
                {PERSONAL_INFO.email}
            </MagneticButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-white/10 pt-12 text-sm text-gray-500 font-mono">
            <div className="text-center md:text-left">
                <p className="mb-2">CURRENTLY BASED IN</p>
                <p className="text-white">{PERSONAL_INFO.location}</p>
            </div>
            <div className="text-center">
                <p className="mb-2">SOCIAL</p>
                <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" className="text-white hover:text-cyber-lime transition-colors">LinkedIn Profile</a>
            </div>
            <div className="text-center md:text-right">
                <p className="mb-2">PHONE</p>
                <p className="text-white">{PERSONAL_INFO.phone}</p>
            </div>
        </div>
        
        <div className="mt-20 text-xs text-gray-700">
            © 2026 ADESH SHELAR. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;