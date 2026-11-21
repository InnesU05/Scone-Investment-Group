import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'About Us', end: true },
  { to: '/projects-research', label: 'Projects & Research', end: false },
  { to: '/portfolio', label: 'Portfolio', end: false },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-onyx-bg/95 backdrop-blur-sm border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-page-margin h-24 flex items-center justify-between">
        {/* Official Brand Logo — Seamless Transparent Blend */}
        <Link to="/" className="flex items-center group cursor-pointer">
          <img
            src="/images/logo.png"
            alt="Scone Investment Group"
            className="h-12 md:h-14 w-auto object-contain brightness-105 contrast-110 transition-transform duration-hover-transition group-hover:scale-[1.01]"
          />
        </Link>

        {/* Primary Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive
                  ? 'font-body text-body-md font-medium text-frosted-blue border-b-2 border-button-blue pb-0.5'
                  : 'font-body text-body-md font-medium text-gray-300 hover:text-white transition-colors duration-hover-transition'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Header Action & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-DEFAULT bg-button-blue text-white font-body text-body-sm font-medium hover:bg-button-blue-hover transition-colors duration-hover-transition shadow-sm"
          >
            <span>Inquire</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-DEFAULT border border-white/15 text-gray-200 hover:text-white hover:border-white/30"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-onyx-card border-t border-white/10 px-page-margin py-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block py-2 font-body text-body-md font-medium text-frosted-blue'
                  : 'block py-2 font-body text-body-md font-medium text-gray-300 hover:text-white'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};
