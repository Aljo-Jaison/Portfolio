import React, { useState } from 'react';
import { Check, Calendar, ArrowRight, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    const senderName = formData.name.trim();
    const senderEmail = formData.email.trim();
    const senderMessage = formData.message.trim();

    try {
      // Send real email directly to aljojaisonk1@gmail.com via FormSubmit AJAX service
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          message: senderMessage,
          _subject: `New Portfolio Message from ${senderName}`,
          _replyto: senderEmail,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        setSubmitSuccess(false);
      }
    } catch (err) {
      console.warn('FormSubmit network error, providing direct client fallback:', err);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
      setSubmittedData({
        name: senderName,
        email: senderEmail,
        message: senderMessage,
        subject: encodeURIComponent(`Portfolio Project Inquiry from ${senderName}`),
        body: encodeURIComponent(
          `Hi Aljo,\n\n${senderMessage}\n\n---\nSender: ${senderName}\nEmail: ${senderEmail}`
        ),
      });
      setFormSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-28 bg-white border-t border-zinc-100">
      <div className="site-container">
        
        {/* Section Header with Line Art Illustration */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 sm:mb-10 md:mb-14">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Let's create something thoughtful together
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed tracking-normal">
              Whether you have an early concept, an existing product to refine, or a design opportunity, I'd love to connect.
            </p>
          </div>

          {/* Contact Line Art Illustration */}
          <div className="hidden md:flex items-center justify-center shrink-0 w-28 sm:w-32 md:w-36 h-24">
            <img 
              src="/assets/sections/contact-envelope.png" 
              alt="Get In Touch" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 2-Column Layout with Synchronized Equal Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Book A Discovery Call Card */}
          <div className="lg:col-span-5 bg-zinc-950 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-300">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Book A Discovery Call</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Available</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  15–20 Min Strategy Chat
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed tracking-normal">
                  Have an urgent product launch, a design system to build, or a full-time role to discuss? Let's hop on a call to map out the best approach.
                </p>
              </div>

              {/* What to expect checklist */}
              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Free 20-min product & UX discovery session</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct 1-on-1 walkthrough of your roadmap & design needs</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Actionable feedback and zero obligation</span>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <a
                href={personalInfo.socials.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 min-h-[48px] rounded-xl bg-white text-zinc-950 hover:bg-zinc-100 text-sm font-bold transition-all shadow-sm group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-zinc-950" />
                <span>Select A Time On Calendly</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-center text-[11px] text-zinc-400 font-normal">
                Powered by Calendly · Instant Google Meet / Zoom confirmation
              </p>
            </div>
          </div>

          {/* Right Column: Send A Direct Message Box */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-7 md:p-9 rounded-2xl sm:rounded-3xl border border-zinc-200/60 shadow-xs hover:border-zinc-300 transition-all duration-200 flex flex-col justify-between h-full">
            {!formSubmitted ? (
              <>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight mb-1 flex items-center gap-2.5">
                    <MessageSquare className="w-5 h-5 text-zinc-900" />
                    <span>Send a direct message</span>
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 mb-6 leading-relaxed tracking-normal">
                    Fill out the details below and I'll get back to you promptly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-2">
                        <label className="text-sm sm:text-base font-semibold text-zinc-900 block">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          disabled={isSubmitting}
                          placeholder="e.g. Alex Morgan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-zinc-300 text-sm sm:text-base focus:ring-2 focus:ring-zinc-950 focus:border-zinc-950 focus:outline-none transition-all bg-white text-zinc-900 placeholder:text-zinc-500 disabled:bg-zinc-50 disabled:text-zinc-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm sm:text-base font-semibold text-zinc-900 block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          disabled={isSubmitting}
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-zinc-300 text-sm sm:text-base focus:ring-2 focus:ring-zinc-950 focus:border-zinc-950 focus:outline-none transition-all bg-white text-zinc-900 placeholder:text-zinc-500 disabled:bg-zinc-50 disabled:text-zinc-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 flex flex-col">
                      <label className="text-sm sm:text-base font-semibold text-zinc-900 block">
                        Your Message / Project Details
                      </label>
                      <textarea
                        rows={5}
                        required
                        disabled={isSubmitting}
                        placeholder="Tell me about your product, current stage, goals, or role requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full min-h-[150px] px-4 py-3 rounded-xl border border-zinc-300 text-sm sm:text-base focus:ring-2 focus:ring-zinc-950 focus:border-zinc-950 focus:outline-none transition-all bg-white text-zinc-900 placeholder:text-zinc-500 resize-none leading-relaxed disabled:bg-zinc-50 disabled:text-zinc-400"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-3.5 px-6 min-h-[48px] rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed shadow-sm cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-zinc-400" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            ) : submitSuccess ? (
              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-zinc-100">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-700">
                      <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                      </div>
                      <span>Inquiry Dispatched</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Received</span>
                    </div>
                  </div>
                </div>

                <div className="py-4 my-auto space-y-5">
                  <div className="space-y-2">
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                      Thank you, {submittedData?.name || 'there'}.
                    </h4>
                    <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                      Your message was sent to <span className="font-semibold text-zinc-950">{personalInfo.email}</span>. We will get back to you at the earliest.
                    </p>
                  </div>

                  {/* Summary of sent inquiry */}
                  <div className="p-4 sm:p-5 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2 text-left">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-500">
                      <span>Message Preview</span>
                      <span className="font-medium text-zinc-600 normal-case">{submittedData?.email}</span>
                    </div>
                    <p className="text-sm sm:text-base text-zinc-800 line-clamp-3 leading-relaxed">
                      "{submittedData?.message}"
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="btn-primary w-full sm:w-auto py-3.5 px-6 min-h-[48px] rounded-xl text-sm sm:text-base font-bold shadow-sm cursor-pointer"
                  >
                    Send Another Message
                  </button>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${submittedData?.subject || ''}&body=${submittedData?.body || ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full sm:w-auto py-3.5 px-6 min-h-[48px] rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>Open in Gmail (Web)</span>
                    <ArrowRight className="w-4 h-4 text-zinc-600" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-zinc-100">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-700">
                      <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center">
                        <AlertCircle className="w-4 h-4 text-amber-600 stroke-[2.5]" />
                      </div>
                      <span>Direct Transmission Notice</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/80">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span>Ready to Send</span>
                    </div>
                  </div>
                </div>

                <div className="py-4 my-auto space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                      Almost there, {submittedData?.name || 'there'}.
                    </h4>
                    <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                      A browser privacy extension may have blocked automated background dispatch. You can send your prepared message directly to <span className="font-semibold text-zinc-950">{personalInfo.email}</span> using either option below:
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${submittedData?.subject || ''}&body=${submittedData?.body || ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full sm:w-auto py-3.5 px-6 min-h-[48px] rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Send via Gmail Web</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                    }}
                    className="btn-secondary w-full sm:w-auto py-3.5 px-6 min-h-[48px] rounded-xl text-sm sm:text-base font-bold text-center cursor-pointer shadow-sm"
                  >
                    Back to Edit Form
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Other Profiles & Social Presence Strip */}
        <div className="mt-14 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <span className="text-sm sm:text-base font-bold text-zinc-950 tracking-tight block">
              Connect across platforms
            </span>
            <span className="text-xs sm:text-sm text-zinc-600 font-medium">
              LinkedIn, Behance, GitHub, and Pinterest
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {/* LinkedIn */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-xs sm:text-sm font-semibold text-zinc-800 transition-all shadow-2xs group"
            >
              <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
              <span className="text-zinc-400 group-hover:text-zinc-700 transition-colors">↗</span>
            </a>

            {/* Behance */}
            <a
              href={personalInfo.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-xs sm:text-sm font-semibold text-zinc-800 transition-all shadow-2xs group"
            >
              <svg className="w-4 h-4 fill-[#0057FF]" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.171 3-3.455 0-5.555-2.261-5.555-5.589 0-3.414 2.212-5.411 5.309-5.411 3.42 0 4.966 2.193 4.887 5.765h-7.464c.05 1.748 1.328 2.835 3.014 2.835 1.583 0 2.457-.655 2.842-1.6h2.138zm-5.061-4.996c-1.398 0-2.316.899-2.428 2.378h4.639c-.066-1.503-.96-2.378-2.211-2.378zm-11.415-7.004h5.275c2.379 0 4.093 1.077 4.093 3.327 0 1.32-.716 2.34-1.854 2.85 1.529.539 2.38 1.761 2.38 3.403 0 2.502-1.996 3.72-4.594 3.72h-5.3v-13.3zm2.845 2.355v2.969h2.192c1.075 0 1.73-.559 1.73-1.488 0-.91-.655-1.481-1.73-1.481h-2.192zm0 5.258v3.385h2.368c1.194 0 1.954-.601 1.954-1.691 0-1.072-.76-1.694-1.954-1.694h-2.368z"/>
              </svg>
              <span>Behance</span>
              <span className="text-zinc-400 group-hover:text-zinc-700 transition-colors">↗</span>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-xs sm:text-sm font-semibold text-zinc-800 transition-all shadow-2xs group"
            >
              <svg className="w-4 h-4 fill-zinc-950" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub</span>
              <span className="text-zinc-400 group-hover:text-zinc-700 transition-colors">↗</span>
            </a>

            {/* Pinterest */}
            <a
              href={personalInfo.socials.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-xs sm:text-sm font-semibold text-zinc-800 transition-all shadow-2xs group"
            >
              <svg className="w-4 h-4 fill-[#E60023]" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
              <span>Pinterest</span>
              <span className="text-zinc-400 group-hover:text-zinc-700 transition-colors">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
