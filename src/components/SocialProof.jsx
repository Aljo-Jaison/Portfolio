import React from 'react';

const clientLogos = [
  { name: 'TALEND', text: 'TALEND', isText: true, url: 'https://www.talend.com' },
  { name: 'Klutch.', file: '/assets/clients/klutch.avif', url: 'https://klutch.app' },
  { name: 'chatway', file: '/assets/clients/chatway.avif', url: 'https://chatway.app' },
  { name: 'designmonks', file: '/assets/clients/monks.svg', url: 'https://designmonks.com' },
  { name: 'Bounce', file: '/assets/clients/bounce.avif', url: 'https://usebounce.com' },
  { name: 'Stan', file: '/assets/clients/stan.avif', url: 'https://stan.store' },
  { name: 'poptin', file: '/assets/clients/poptin.avif', url: 'https://poptin.com' },
  { name: 'KAJABI', file: '/assets/clients/kajabi.avif', url: 'https://kajabi.com' },
  { name: 'Arohon', file: '/assets/clients/arohon.avif', url: 'https://arohon.com' },
];

export default function SocialProof() {
  // Repeat logos 4 times to ensure seamless infinite looping across all screen widths
  const loopedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-12 bg-white border-t border-zinc-100 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center mb-8">
        {/* Caption */}
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-zinc-400">
          A FEW OF THE PLACES I WORKED
        </p>
      </div>

      {/* Marquee Container with edge gradients */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max items-center gap-12 sm:gap-16 py-2 animate-marquee hover:[animation-play-state:paused]">
          {loopedLogos.map((client, i) => (
            <a
              key={i}
              href={client.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group/logo shrink-0 flex items-center justify-center px-2 py-1 transition-transform duration-300 hover:scale-105 cursor-pointer"
              title={client.name}
            >
              {client.isText ? (
                <span className="font-mono text-zinc-400 font-bold text-lg tracking-wider transition-colors duration-300 group-hover/logo:text-zinc-950">
                  {client.text}
                </span>
              ) : (
                <img
                  src={client.file}
                  alt={client.name}
                  className="max-h-7 max-w-[120px] object-contain filter grayscale opacity-45 transition-all duration-300 group-hover/logo:grayscale-0 group-hover/logo:opacity-100"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
