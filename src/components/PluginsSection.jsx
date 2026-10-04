import React from 'react';

const coreTools = [
  {
    icon: '/assets/tools/figma.svg',
    title: 'Figma',
    description: '6+ years of experience with Figma and am now considered an expert.',
  },
  {
    icon: '/assets/tools/webflow.svg',
    title: 'Webflow & Framer',
    description: 'I am an expert in using Webflow. Experienced with web apps as well.',
  },
  {
    icon: '/assets/tools/lottie.svg',
    title: 'Lottie Animation',
    description: 'Creating lottie animation for last 6+ years. Expert in Adobe after effect',
  },
];

const pluginShowcase = [
  {
    title: 'Chaty',
    description: 'Chat With Your Customers On WhatsApp, Messenger & 20+ Chat Channels.',
    image: '/assets/tools/chaty.avif',
    platforms: [
      { name: 'Shopify', icon: '/assets/tools/shopify.png' },
      { name: 'WordPress', icon: '/assets/tools/wordpress.png' },
      { name: 'Wix', icon: '/assets/tools/wix.png' },
    ],
  },
  {
    title: 'Folders',
    description: 'Organizing your wordpress website has never been easier with folders.',
    image: '/assets/tools/folders.avif',
    platforms: [
      { name: 'WordPress', icon: '/assets/tools/wordpress.png' },
    ],
  },
  {
    title: 'Coupon X',
    description: 'Increase online sales with discount pop-ups and coupon codes!',
    image: '/assets/tools/coupon-x.png',
    platforms: [
      { name: 'Shopify', icon: '/assets/tools/shopify.png' },
      { name: 'WordPress', icon: '/assets/tools/wordpress.png' },
      { name: 'Wix', icon: '/assets/tools/wix.png' },
    ],
  },
  {
    title: 'My Sticky Bar',
    description: 'Create a beautiful notification bar for your website easier than ever with super cool themed bar',
    image: '/assets/tools/sticky-bar.png',
    platforms: [
      { name: 'Shopify', icon: '/assets/tools/shopify.png' },
      { name: 'WordPress', icon: '/assets/tools/wordpress.png' },
    ],
  },
];

const workflowPrinciples = [
  {
    title: 'Agile workflow',
    description: 'I ship in milestones so stakeholders see progress, not promises.',
  },
  {
    title: 'Priority control',
    description: 'I keep a focused backlog and always work on the highest impact items.',
  },
  {
    title: 'Documentation',
    description: 'I attach designs, notes, and acceptance criteria directly in tickets.',
  },
];

export default function PluginsSection() {
  return (
    <section id="plugins" className="py-20 md:py-28 bg-white border-t border-zinc-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Do i have experience with Wordpress, shopify, wix Plugins?
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              Yes I do i have worked with some famous plugins here i have a list of some favourite plugins i have worked on as product designer.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="btn-secondary px-5 py-2.5 text-xs rounded-lg"
              >
                Let's Book a Free Call
              </a>
            </div>
          </div>

          {/* WordPress circular emblem */}
          <div className="hidden md:block shrink-0">
            <img 
              src="/assets/tools/tools-header.png" 
              alt="WordPress & Plugins" 
              className="w-20 sm:w-24 h-auto object-contain opacity-85"
            />
          </div>
        </div>

        {/* 1. Core Tooling Capabilities Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {coreTools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/60 shadow-xs hover:border-zinc-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center p-2.5 shadow-2xs">
                  <img 
                    src={tool.icon} 
                    alt={tool.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight">
                    {tool.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. 2x2 Showcase of Featured Plugins */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pluginShowcase.map((plugin, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200/60 shadow-xs hover:border-zinc-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="w-full bg-zinc-50/70 rounded-xl p-4 sm:p-5 flex items-center justify-center border border-zinc-100 group-hover:border-zinc-200/80 transition-colors">
                  <img 
                    src={plugin.image} 
                    alt={plugin.title} 
                    className="w-full max-w-[280px] h-32 sm:h-36 object-contain"
                  />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight">
                    {plugin.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                    {plugin.description}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Available on
                </span>
                <div className="flex items-center gap-2.5">
                  {plugin.platforms.map((platform, pIdx) => (
                    <div 
                      key={pIdx} 
                      className="h-7 px-2 rounded-md bg-zinc-50 border border-zinc-200/60 flex items-center justify-center hover:bg-zinc-100 transition-colors"
                      title={platform.name}
                    >
                      <img 
                        src={platform.icon} 
                        alt={platform.name} 
                        className="h-4 w-auto max-w-[22px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Production Workflow Features */}
        <div className="mt-14 pt-10 border-t border-zinc-100 grid grid-cols-1 md:grid-cols-3 gap-8">
          {workflowPrinciples.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <h4 className="text-sm sm:text-[15px] font-bold text-zinc-950 tracking-tight">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
