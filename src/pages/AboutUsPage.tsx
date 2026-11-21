import React from 'react';
import { Link } from 'react-router-dom';

const metrics = [
  { value: '£000M+', label: 'Lorem Ipsum Metric One', accent: 'border-frosted-blue' },
  { value: '00.0%', label: 'Lorem Ipsum Metric Two', accent: 'border-button-blue' },
  { value: '100%', label: 'Lorem Ipsum Metric Three', accent: 'border-frosted-blue' },
  { value: '00', label: 'Lorem Ipsum Metric Four', accent: 'border-button-blue' },
];

const pillars = [
  {
    icon: 'verified',
    title: 'Lorem Ipsum Dolor',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: 'shield',
    title: 'Ut Enim Ad Minim',
    description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
];

const committeeMembers = [
  {
    initials: 'AA',
    name: 'Lorem Ipsum One',
    role: 'Placeholder Role',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    initials: 'BB',
    name: 'Lorem Ipsum Two',
    role: 'Placeholder Role',
    bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const principles = [
  {
    number: '01',
    title: 'Lorem Ipsum Principle One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    number: '02',
    title: 'Lorem Ipsum Principle Two',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    number: '03',
    title: 'Lorem Ipsum Principle Three',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

export const AboutUsPage: React.FC = () => {
  return (
    <>
      {/* Hero Slide with Gradient Overlaid Background Image ONLY */}
      <section className="relative min-h-[640px] flex items-center bg-onyx-bg text-white overflow-hidden">
        <img
          src="/images/sconetree.jpg"
          alt="Scone ancient trees and woodland landscape"
          className="absolute inset-0 w-full h-full object-cover object-center filter saturate-75 brightness-75"
        />
        {/* Gradient overlays strictly over background image */}
        <div className="absolute inset-0 bg-gradient-to-r from-onyx-bg via-onyx-bg/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-button-blue-hover/65 via-transparent to-burgundy-surface/65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-bg/40 via-transparent to-onyx-bg" />

        <div className="relative z-10 max-w-7xl mx-auto px-page-margin py-24 w-full">
          <div className="max-w-2xl">
            <span className="font-label text-label-md uppercase text-frosted-blue font-semibold block mb-4">
              Scone Investment Group
            </span>
            <h1 className="font-display text-display-2xl text-white mb-6 text-balance">
              About Us
            </h1>
            <p className="font-body text-body-lg text-gray-200 mb-8 max-w-xl text-pretty font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#mandate"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-DEFAULT bg-button-blue text-white font-medium text-body-md hover:bg-button-blue-hover transition-colors duration-hover-transition shadow-lg"
              >
                <span>Lorem Ipsum Mandate</span>
                <span className="material-symbols-outlined text-[18px]">south</span>
              </a>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-DEFAULT bg-button-blue text-white font-medium text-body-md hover:bg-button-blue-hover transition-colors duration-hover-transition shadow-lg"
              >
                <span>Explore Portfolio</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Ribbon (Solid Deep Navy Background) */}
      <section className="bg-burgundy-dark border-y border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-page-margin grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((item) => (
            <div key={item.label} className={`border-l-2 ${item.accent} pl-4`}>
              <div className="font-display text-headline-lg font-bold text-white tabular-nums">
                {item.value}
              </div>
              <div className="font-label text-label-md uppercase text-frosted-blue mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slide 2: Strategic Mandate & Governance (Solid Deep Navy Background) */}
      <section id="mandate" className="py-24 bg-burgundy-dark text-white">
        <div className="max-w-7xl mx-auto px-page-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="font-label text-label-md uppercase text-frosted-blue font-semibold block mb-3">
                Overview
              </span>
              <h2 className="font-display text-display-xl text-white mb-6 text-balance">
                Lorem Ipsum Dolor Sit Amet Consectetur.
              </h2>
              <div className="space-y-4 font-body text-body-md text-gray-200">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              {/* Pillars (Solid Navy Card Blocks) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/10">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-md bg-onyx-card border border-white/10 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-DEFAULT bg-button-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">{pillar.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-body text-body-md font-semibold text-white">
                        {pillar.title}
                      </h4>
                      <p className="font-body text-body-sm text-gray-300 mt-0.5">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Box (Solid Block Color: Deep Card Navy) */}
            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-white/10 shadow-xl bg-onyx-card p-8">
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span className="font-label text-label-md uppercase text-frosted-blue font-semibold">
                      Lorem Ipsum Section
                    </span>
                    <h3 className="font-display text-headline-sm text-white mt-1">
                      Lorem Ipsum Committee
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-burgundy-surface text-frosted-blue flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">account_balance</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {committeeMembers.map((member) => (
                    <div key={member.initials} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-DEFAULT bg-burgundy-surface text-white flex items-center justify-center font-display text-headline-sm font-bold flex-shrink-0 border border-white/10">
                        {member.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-body text-body-md font-bold text-white">
                            {member.name}
                          </h4>
                          <span className="px-2 py-0.5 rounded font-caption text-caption-xs font-semibold bg-button-blue text-white">
                            {member.role}
                          </span>
                        </div>
                        <p className="font-body text-body-sm text-gray-300 mt-1">{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 bg-burgundy-surface -mx-8 -mb-8 p-6 flex items-center justify-between">
                  <div>
                    <span className="font-label text-label-md uppercase text-gray-300">
                      Lorem Ipsum Label
                    </span>
                    <p className="font-body text-body-sm font-semibold text-white">
                      2026 Lorem Ipsum Framework
                    </p>
                  </div>
                  <Link
                    to="/projects-research"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-DEFAULT bg-button-blue text-white font-body text-body-sm font-medium hover:bg-button-blue-hover transition-colors"
                  >
                    <span>Review Analysis</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Executive Principles (Solid Block Background: Midnight Navy) */}
      <section className="py-24 bg-onyx-bg text-white">
        <div className="max-w-7xl mx-auto px-page-margin">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="font-label text-label-md uppercase text-frosted-blue">
              Lorem Ipsum Standard
            </span>
            <h2 className="font-display text-display-xl text-white text-balance">
              Lorem Ipsum Dolor Sit Amet.
            </h2>
            <p className="font-body text-body-md text-gray-300 font-light">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((item) => (
              <div
                key={item.number}
                className="p-8 rounded-lg bg-burgundy-dark border border-white/10 hover:border-button-blue transition-colors flex flex-col gap-3"
              >
                <span className="font-display text-headline-lg text-frosted-blue font-bold">
                  {item.number}
                </span>
                <h3 className="font-display text-headline-sm text-white">{item.title}</h3>
                <p className="font-body text-body-md text-gray-300 font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
