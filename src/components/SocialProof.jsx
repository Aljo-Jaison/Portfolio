import React from 'react';

const clientLogos = [
  { name: 'TALEND', text: 'TALEND', isText: true },
  { name: 'Klutch.', file: '/assets/clients/klutch.avif' },
  { name: 'chatway', file: '/assets/clients/chatway.avif' },
  { name: 'designmonks', file: '/assets/clients/monks.svg' },
  { name: 'Bounce', file: '/assets/clients/bounce.avif' },
  { name: 'Stan', file: '/assets/clients/stan.avif' },
  { name: 'poptin', file: '/assets/clients/poptin.avif' },
  { name: 'KAJABI', file: '/assets/clients/kajabi.avif' },
  { name: 'Arohon', file: '/assets/clients/arohon.avif' },
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-white border-t border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
        
        {/* Caption matching reference image */}
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-8">
          A FEW OF THE PLACES I WORKED
        </p>

        {/* Client Logos Horizontal Strip */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 hover:opacity-100 transition-opacity">
          {clientLogos.map((client, i) => (
            <div key={i} className="flex items-center justify-center h-8">
              {client.isText ? (
                <span className="font-mono text-zinc-300 font-bold text-lg tracking-wider">
                  {client.text}
                </span>
              ) : (
                <img
                  src={client.file}
                  alt={client.name}
                  className="max-h-7 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
