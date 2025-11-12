import React from 'react';
import { Wrench, ShieldCheck, CreditCard, Car } from 'lucide-react';

const services = [
  { title: 'After‑Sales Service', icon: Wrench, desc: 'Certified care, genuine parts and expert craftsmanship across Pakistan.' },
  { title: 'Certified Pre‑Owned', icon: ShieldCheck, desc: 'Thoroughly inspected vehicles with warranty for peace of mind.' },
  { title: 'Financing & Leasing', icon: CreditCard, desc: 'Flexible plans tailored to your lifestyle and ownership goals.' },
  { title: 'Roadside Assistance', icon: Car, desc: '24/7 support nationwide to keep you moving with confidence.' },
];

export default function Services() {
  return (
    <section className="bg-zinc-50 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-black">Ownership & Services</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-2xl bg-white ring-1 ring-zinc-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-300 ring-1 ring-zinc-300 flex items-center justify-center">
                <Icon className="text-zinc-700" size={20} />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
