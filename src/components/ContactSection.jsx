import React, { useState } from 'react';
import { Mail, Copy, Check, Calendar, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', budget: '$5k - $15k' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '', budget: '$5k - $15k' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700">
              <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
              <span>Get In Touch</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
              Let's create something thoughtful together
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Whether you need a full zero-to-one product design, an audit, or a scalable design system, I'm here to help bring your vision to market.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Direct Quick Actions Card */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Email Direct Pill Box */}
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  <Mail className="w-4 h-4 text-zinc-900" />
                  <span>Direct Email</span>
                </div>

                <div>
                  <div className="text-sm font-semibold text-zinc-900 select-all">
                    {personalInfo.email}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">
                    Typical response time: within 12–24 hours
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-xs font-semibold text-zinc-800 transition-all shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Email Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-500" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Calendly Booking Card */}
              <div className="p-6 rounded-2xl bg-zinc-950 text-white space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Book A Discovery Call</span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  Have an urgent product launch or complex architecture to discuss? Let's hop on a 20-min strategy call.
                </p>

                <a
                  href={personalInfo.socials.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white text-zinc-950 hover:bg-zinc-100 text-xs font-semibold transition-colors mt-2"
                >
                  <span>Select A Time On Calendly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Quick Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200/90 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-950 mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-zinc-900" />
                <span>Send a quick message</span>
              </h3>
              <p className="text-xs text-zinc-500 mb-6">
                Tell me briefly about what you're building.
              </p>

              {formSubmitted ? (
                <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    ✓
                  </div>
                  <h4 className="text-base font-bold text-emerald-950">Message Sent!</h4>
                  <p className="text-xs text-emerald-700">
                    Thank you! I will review your message and reply promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Connor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700">Estimated Project Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent bg-white transition-all"
                    >
                      <option>&lt; $5k (Quick Sprint / Audit)</option>
                      <option>$5k - $15k (MVP / Redesign)</option>
                      <option>$15k - $30k+ (Full Product & System)</option>
                      <option>Fractional / Monthly Retainer</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700">Project Details</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your goals, current stage, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-zinc-950 text-white font-medium text-xs sm:text-sm hover:bg-zinc-800 transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
