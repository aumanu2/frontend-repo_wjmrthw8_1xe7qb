import React from 'react';

const models = [
  { name: 'S‑Class', img: 'https://images.unsplash.com/photo-1606662082337-641b21e256b2?q=80&w=1800&auto=format&fit=crop' },
  { name: 'E‑Class', img: 'https://images.unsplash.com/photo-1542367597-8849ebbbe162?q=80&w=1800&auto=format&fit=crop' },
  { name: 'C‑Class', img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1800&auto=format&fit=crop' },
  { name: 'GLA', img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1800&auto=format&fit=crop' },
  { name: 'GLC', img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1800&auto=format&fit=crop' },
  { name: 'GLE', img: 'https://images.unsplash.com/photo-1602332694640-787d57fd3c19?q=80&w=1800&auto=format&fit=crop' },
];

export default function Models() {
  return (
    <section id="models" className="relative bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-black">Models</h2>
          <a href="/models" className="text-sm text-zinc-600 hover:text-black transition-colors">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((m) => (
            <a key={m.name} href={`/models/${encodeURIComponent(m.name)}`} className="group relative overflow-hidden rounded-2xl bg-black/5 ring-1 ring-zinc-200">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={m.img}
                  alt={`${m.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <span className="text-lg font-medium">{m.name}</span>
                <span className="text-sm text-zinc-500 group-hover:text-zinc-700 transition-colors">Discover</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
