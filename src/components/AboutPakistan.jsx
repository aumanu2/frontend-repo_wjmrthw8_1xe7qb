import React from 'react';

export default function AboutPakistan() {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-black">Mercedes‑Benz in Pakistan</h2>
          <p className="mt-6 text-zinc-600 leading-relaxed">
            A legacy of innovation and engineering excellence tailored for the Pakistani roads and lifestyles. From Karachi to Islamabad, our presence is built on trust, precision and the promise of an elevated driving experience.
          </p>
          <ul className="mt-6 space-y-2 text-zinc-700 text-sm">
            <li>• Nationwide dealer network</li>
            <li>• Genuine parts and factory‑trained technicians</li>
            <li>• Exclusive events and owner communities</li>
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-200">
          <img src="https://images.unsplash.com/photo-1707904387265-59c7da3ab120?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYWtpc3RhbiUyMGxhbmRzY2FwZXxlbnwwfDB8fHwxNzYyOTYwNzk0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Pakistan landscape" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
