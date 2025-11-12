import React, { useState } from 'react';
import { Menu, X, ChevronDown, Languages } from 'lucide-react';

const navItems = [
  { labelEn: 'Models', labelUr: 'ماڈلز', href: '/models' },
  { labelEn: 'Services', labelUr: 'سروسز', href: '/services' },
  { labelEn: 'About Pakistan', labelUr: 'پاکستان کے بارے میں', href: '/about' },
  { labelEn: 'Contact', labelUr: 'رابطہ', href: '/contact' },
];

export default function Navbar({ lang = 'en', onToggleLang }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/40 text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-400 ring-1 ring-white/20 shadow-inner" />
            <span className="text-sm tracking-[0.2em] font-semibold uppercase">Mercedes‑Benz Pakistan</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-200 hover:text-white transition-colors relative group"
              >
                <span>{lang === 'en' ? item.labelEn : item.labelUr}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-gradient-to-r from-zinc-100 to-zinc-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <button
              onClick={onToggleLang}
              className="inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-white transition-colors"
              aria-label="Toggle language"
            >
              <Languages size={18} />
              <span>{lang === 'en' ? 'اردو' : 'EN'}</span>
            </button>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full ring-1 ring-white/20 bg-white/5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-200 hover:text-white py-2"
                onClick={() => setOpen(false)}
              >
                {lang === 'en' ? item.labelEn : item.labelUr}
              </a>
            ))}
            <button
              onClick={() => { onToggleLang?.(); setOpen(false); }}
              className="inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-white py-2"
            >
              <Languages size={18} />
              <span>{lang === 'en' ? 'Switch to Urdu' : 'انگریزی'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
