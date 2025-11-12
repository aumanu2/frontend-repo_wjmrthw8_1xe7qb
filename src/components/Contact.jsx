import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
      const res = await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          city: e.target.city.value,
          message: e.target.message.value,
        }),
      });
      const data = await res.json();
      if (res.ok) setStatus('success'); else setStatus('error');
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-zinc-50 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-black">Locate a Dealer</h2>
          <p className="mt-4 text-zinc-600">Connect with our nearest authorized dealership. Our team will reach out to you shortly.</p>
          <div className="mt-6 rounded-2xl overflow-hidden ring-1 ring-zinc-200 bg-white aspect-[16/10]">
            <iframe
              title="Dealers Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=66.83%2C24.78%2C74.36%2C33.74&layer=mapnik"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl ring-1 ring-zinc-200 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-600">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md bg-zinc-50 ring-1 ring-zinc-200 px-3 py-2 focus:ring-zinc-400 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-zinc-600">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md bg-zinc-50 ring-1 ring-zinc-200 px-3 py-2 focus:ring-zinc-400 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-zinc-600">Phone</label>
              <input name="phone" required className="mt-1 w-full rounded-md bg-zinc-50 ring-1 ring-zinc-200 px-3 py-2 focus:ring-zinc-400 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-zinc-600">City</label>
              <input name="city" className="mt-1 w-full rounded-md bg-zinc-50 ring-1 ring-zinc-200 px-3 py-2 focus:ring-zinc-400 outline-none" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-zinc-600">Message</label>
            <textarea name="message" rows="4" className="mt-1 w-full rounded-md bg-zinc-50 ring-1 ring-zinc-200 px-3 py-2 focus:ring-zinc-400 outline-none" />
          </div>
          <button type="submit" className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-zinc-900 text-white hover:bg-black transition-colors">
            Submit
          </button>
          {status === 'success' && <p className="mt-3 text-sm text-emerald-600">Thank you. Our team will contact you soon.</p>}
          {status === 'error' && <p className="mt-3 text-sm text-red-600">Something went wrong. Please try again later.</p>}
        </form>
      </div>
    </section>
  );
}
