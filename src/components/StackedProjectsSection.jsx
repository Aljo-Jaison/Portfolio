import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projectCards = [
  {
    id: 'airborne',
    category: 'Agency',
    categoryColor: 'text-[#16A34A]',
    title: 'Product Design Studio',
    description: 'Product design and UX partner helping startups and scaleups ship polished, conversion focused experiences.',
    customerAcq: '48%',
    retentionGrowth: '44%',
    buttonText: 'Try Airborne Studio',
    link: 'https://airborne.studio/',
    bgCard: 'bg-[#EBF5EC]',
    buttonBg: 'bg-[#D8ECD9] hover:bg-[#CBE4CC]',
    buttonTextCol: 'text-zinc-900',
    logoType: 'svg-airborne',
    logoSrc: '/assets/cards/airborne.svg',
  },
  {
    id: 'stan',
    category: 'Creator Commerce',
    categoryColor: 'text-[#7C3AED]',
    title: 'Stan Store',
    description: 'Creator storefront to sell digital products, services, and subscriptions with simple checkout.',
    customerAcq: '72%',
    retentionGrowth: '58%',
    buttonText: 'Try Stan Store',
    link: 'https://stan.store/',
    bgCard: 'bg-[#F3EEFA]',
    buttonBg: 'bg-[#E5D7F6] hover:bg-[#DAC8F0]',
    buttonTextCol: 'text-zinc-900',
    logoType: 'stan',
    logoSrc: '/assets/clients/stan.avif',
  },
  {
    id: 'poptin',
    category: 'SAAS',
    categoryColor: 'text-[#B45309]',
    title: 'Poptin',
    description: 'CRO toolkit for popups, embedded forms, and targeting rules to improve signups and sales.',
    customerAcq: '60%',
    retentionGrowth: '58%',
    buttonText: 'Try Poptin',
    link: 'https://www.poptin.com/poptin-3-0/',
    bgCard: 'bg-[#F7EFEF]',
    buttonBg: 'bg-[#ECDBDB] hover:bg-[#E3CCCC]',
    buttonTextCol: 'text-zinc-900',
    logoType: 'poptin',
    logoSrc: '/assets/clients/poptin.avif',
  },
  {
    id: 'tailored',
    category: 'Fitness',
    categoryColor: 'text-[#0D9488]',
    title: 'Tailored Trainer',
    description: 'Brand site that turns fitness traffic into booked sessions with clear programs, proof, and CTAs.',
    customerAcq: '56%',
    retentionGrowth: '50%',
    buttonText: 'Try Tailored Trainer',
    link: 'https://www.thetailoredtrainer.com/',
    bgCard: 'bg-[#EBF3F5]',
    buttonBg: 'bg-[#D7E9ED] hover:bg-[#C9E0E5]',
    buttonTextCol: 'text-zinc-900',
    logoType: 'svg-tailored',
    logoSrc: '/assets/cards/tailored.svg',
  },
  {
    id: 'noshable',
    category: 'Marketplace',
    categoryColor: 'text-[#65A30D]',
    title: 'Grocery Concierge',
    description: 'Order groceries for vacation rentals with a concierge style flow and partner friendly fulfillment.',
    customerAcq: '62%',
    retentionGrowth: '46%',
    buttonText: 'Try Noshable',
    link: 'https://www.shopnoshable.com/',
    bgCard: 'bg-[#F0EEE5]',
    buttonBg: 'bg-[#E2DFD0] hover:bg-[#D5D2C0]',
    buttonTextCol: 'text-zinc-900',
    logoType: 'svg-noshable',
    logoSrc: '/assets/cards/noshable.svg',
  },
];

export default function StackedProjectsSection() {
  return (
    <section id="works" className="py-20 md:py-28 bg-white border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        
        {/* Section Header with Sketchpad Illustration matching reference */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Products I've worked on
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              Worked closely with the clients to understand their business goals and the needs of their target audience, and designed a new interface that met their needs and exceeded their expectations.
            </p>
            <div className="pt-2">
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg border border-zinc-200 text-zinc-900 text-xs font-semibold hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-xs"
              >
                View All Design Works
              </a>
            </div>
          </div>

          {/* Sketchpad / Notepad Illustration */}
          <div className="hidden md:block shrink-0">
            <img 
              src="/assets/cards/notepad.webp" 
              alt="Design Notepad" 
              className="w-28 sm:w-32 h-auto object-contain"
            />
          </div>
        </div>

        {/* Scrollable Stack Container */}
        <div className="relative pb-24">
          {projectCards.map((card, index) => (
            <div
              key={card.id}
              style={{
                top: `${80 + index * 42}px`,
                zIndex: index + 10,
              }}
              className={`sticky ${card.bgCard} rounded-3xl border border-zinc-200/50 shadow-[0_12px_36px_rgba(0,0,0,0.04)] mb-14 transition-all duration-300 overflow-hidden`}
            >
              <div className="p-6 sm:p-10 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Details & Metrics */}
                  <div className="lg:col-span-6 space-y-6">
                    
                    {/* Category Label */}
                    <div>
                      <span className={`text-xs sm:text-sm font-bold tracking-tight ${card.categoryColor}`}>
                        {card.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Key Metrics Row */}
                    <div className="grid grid-cols-2 gap-6 pt-2">
                      <div>
                        <div className="text-[11px] sm:text-xs text-zinc-500 font-medium">
                          Customer Acquisition
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mt-0.5">
                          {card.customerAcq}
                        </div>
                      </div>

                      <div>
                        <div className="text-[11px] sm:text-xs text-zinc-500 font-medium">
                          Retention Growth
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mt-0.5">
                          {card.retentionGrowth}
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Action Button */}
                    <div className="pt-2">
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center justify-between w-full sm:w-auto sm:min-w-[200px] px-4 py-2.5 rounded-xl ${card.buttonBg} ${card.buttonTextCol} text-xs sm:text-sm font-semibold transition-all group`}
                      >
                        <span>{card.buttonText}</span>
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>

                  </div>

                  {/* Right Column: White Mockup Card with Logo */}
                  <div className="lg:col-span-6 flex items-center justify-center">
                    <div className="w-full bg-white rounded-2xl shadow-sm border border-zinc-100 p-8 sm:p-12 aspect-[4/3] flex flex-col justify-between relative group hover:shadow-md transition-shadow">
                      
                      {/* Browser Mockup 3 Dots */}
                      <div className="flex items-center gap-1.5 self-start">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                      </div>

                      {/* Centered Brand Representation */}
                      <div className="flex-1 flex items-center justify-center py-6">
                        {card.logoType === 'svg-airborne' && (
                          <div className="text-center font-black tracking-widest text-2xl sm:text-3xl text-zinc-950 flex items-center gap-1">
                            <span>AIRB</span>
                            <span className="inline-block w-5 h-5 rounded-full border-4 border-zinc-950 -rotate-45"></span>
                            <span>RNE</span>
                          </div>
                        )}

                        {card.logoType === 'stan' && (
                          <div className="flex items-center gap-2 text-2xl sm:text-3xl font-black text-zinc-950">
                            <div className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center text-lg font-bold">
                              $
                            </div>
                            <span>Stan</span>
                          </div>
                        )}

                        {card.logoType === 'poptin' && (
                          <div className="flex items-center gap-2">
                            <img 
                              src="/assets/clients/poptin.avif" 
                              alt="Poptin" 
                              className="max-h-12 w-auto object-contain"
                            />
                          </div>
                        )}

                        {card.logoType === 'svg-tailored' && (
                          <div className="text-center font-black tracking-tight text-2xl sm:text-3xl text-zinc-950 leading-tight">
                            <div>TLRD</div>
                            <div>TRNR</div>
                          </div>
                        )}

                        {card.logoType === 'svg-noshable' && (
                          <div className="flex items-center gap-2.5 text-2xl sm:text-3xl font-extrabold text-zinc-950">
                            <span className="text-2xl">🍏</span>
                            <span>noshable</span>
                          </div>
                        )}
                      </div>

                      {/* Bottom placeholder spacer for balance */}
                      <div className="h-2"></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
