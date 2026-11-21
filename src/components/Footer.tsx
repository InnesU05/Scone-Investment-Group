import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-onyx-bg border-t border-white/10 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-page-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Contact Details */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <img
                src="/images/logo.png"
                alt="Scone Investment Group"
                className="h-12 w-auto object-contain brightness-105 contrast-110"
              />
            </div>
            <p className="font-body text-body-md text-gray-300 font-light mb-6 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="space-y-2 font-body text-body-sm text-gray-200">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-frosted-blue text-[18px]">location_on</span>
                <span>Lorem ipsum dolor sit amet, Perthshire &amp; Scotland</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-frosted-blue text-[18px]">mail</span>
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-frosted-blue text-[18px]">phone</span>
                <span>+44 (0) 00 0000 0000</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-label text-label-md uppercase text-frosted-blue font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-body text-body-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects-research" className="hover:text-white transition-colors">
                  Projects &amp; Research
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/portfolio#holdings" className="hover:text-white transition-colors">
                  Lorem Ipsum Ledger
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Form Box (Deep Navy Surface Container) */}
          <div className="lg:col-span-4 bg-burgundy-dark p-6 rounded-md border border-white/10">
            <h4 className="font-body text-body-md font-semibold text-white mb-2">
              Lorem Ipsum Briefing
            </h4>
            <p className="font-body text-body-sm text-gray-300 mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (submitted) setSubmitted(false);
                }}
                placeholder="Placeholder Email Address"
                className="w-full px-3.5 py-2.5 font-body text-body-sm rounded-DEFAULT bg-onyx-card border border-white/20 text-white placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frosted-blue"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-DEFAULT bg-button-blue hover:bg-button-blue-hover text-white font-body text-body-sm font-medium transition-colors cursor-pointer shadow-sm"
              >
                {submitted ? 'Request Recorded' : 'Request Access'}
              </button>
            </form>
          </div>
        </div>

        {/* Legal Disclaimer Section */}
        <div className="pt-8 font-body text-body-sm text-gray-300 space-y-3">
          <p className="font-caption text-caption-xs uppercase text-gray-300 font-semibold">
            Regulatory Notice &amp; Legal Disclaimer
          </p>
          <p className="font-caption text-caption-xs text-gray-300 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="font-caption text-caption-xs text-gray-300 font-light">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-white/5 font-caption text-caption-xs text-gray-400">
            <p>© 2026 Scone Investment Group. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-2 sm:mt-0">
              <a href="#contact" className="hover:text-gray-200">Privacy Policy</a>
              <a href="#contact" className="hover:text-gray-200">Terms of Use</a>
              <a href="#contact" className="hover:text-gray-200">Disclosures</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
