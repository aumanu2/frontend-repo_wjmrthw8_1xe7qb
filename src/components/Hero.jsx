import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Driven by Excellence in Pakistan
          </h1>
          <p className="mt-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
            The best or nothing. Discover the latest Mercedes‑Benz models, services and ownership experiences tailored for Pakistan.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#models" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-zinc-100 text-black hover:bg-white transition-colors ring-1 ring-white/20">
              Explore Models
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/0 text-white ring-1 ring-white/30 hover:bg-white/10 transition-colors">
              Locate a Dealer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
