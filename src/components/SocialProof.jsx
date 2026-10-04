import React from 'react';

const clientLogos = [
  {
    name: 'MK SKAB CONSTRUCTIONS',
    file: '/assets/clients/mkskab.png',
    url: 'https://www.mkskab.com',
  },
  {
    name: 'SATCARD - IIT PALAKKAD',
    file: '/assets/clients/satcard.png',
    url: 'https://satcard.in',
  },
  {
    name: 'columsproutAI',
    file: '/assets/clients/columsprout.png',
    url: 'https://columsprout.ai',
  },
  {
    name: 'College of Engineering Karunagappally',
    file: '/assets/clients/ceknpy.png',
    url: 'https://ceknpy.ac.in',
  },
  {
    name: 'SCIFY GROUP',
    file: '/assets/clients/scify.png',
    url: 'https://www.linkedin.com/company/scify-technologies-pvt-ltd/',
  },
];

export default function SocialProof() {
  // Repeat logos (2 balanced halves of 15) for a seamless infinite loop
  const baseLogos = [...clientLogos, ...clientLogos, ...clientLogos];
  const loopedLogos = [...baseLogos, ...baseLogos];

  return (
    <section className="py-12 bg-white border-t border-zinc-100 overflow-hidden select-none">
      <div className="site-container text-center mb-8">
        {/* Caption */}
        <p className="text-xs font-bold tracking-[0.22em] uppercase text-zinc-600">
          A FEW OF THE PLACES I WORKED
        </p>
      </div>

      {/* Marquee Container with edge gradients */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max items-center gap-14 sm:gap-20 md:gap-24 py-3 animate-marquee hover:[animation-play-state:paused]">
          {loopedLogos.map((client, i) => (
            <a
              key={i}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/logo shrink-0 flex items-center justify-center px-3 py-1.5 transition-transform duration-300 hover:scale-105 cursor-pointer"
              title={client.name}
              aria-label={client.name}
            >
              <img
                src={client.file}
                alt={client.name}
                className="h-7 sm:h-9 md:h-10 max-w-[170px] sm:max-w-[200px] md:max-w-[220px] object-contain filter grayscale opacity-45 transition-all duration-300 group-hover/logo:grayscale-0 group-hover/logo:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
