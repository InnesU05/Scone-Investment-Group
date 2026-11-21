import React from 'react';
import { Link } from 'react-router-dom';

const overviewPillars = [
  {
    icon: 'verified',
    title: 'Lorem Ipsum Pillar One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    icon: 'shield',
    title: 'Lorem Ipsum Pillar Two',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const members = [
  {
    initials: 'AA',
    name: 'Lorem Ipsum Member One',
    title: 'Placeholder Title One',
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.',
    linkedinUrl: 'https://www.linkedin.com',
  },
  {
    initials: 'BB',
    name: 'Lorem Ipsum Member Two',
    title: 'Placeholder Title Two',
    overview:
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    linkedinUrl: 'https://www.linkedin.com',
  },
  {
    initials: 'CC',
    name: 'Lorem Ipsum Member Three',
    title: 'Placeholder Title Three',
    overview:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed do eiusmod tempor.',
    linkedinUrl: 'https://www.linkedin.com',
  },
  {
    initials: 'DD',
    name: 'Lorem Ipsum Member Four',
    title: 'Placeholder Title Four',
    overview:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.',
    linkedinUrl: 'https://www.linkedin.com',
  },
];

const strategyPoints = [
  {
    number: '01',
    tag: 'Current Operations',
    title: 'Lorem Ipsum Current Focus',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    number: '02',
    tag: 'Current Operations',
    title: 'Lorem Ipsum Operating Model',
    description:
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
  },
  {
    number: '03',
    tag: 'Future Direction',
    title: 'Lorem Ipsum Future Expansion',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed do eiusmod tempor incididunt.',
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
                href="#overview"
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

      {/* Section 1: General Overview — Who We Are */}
      <section id="overview" className="py-24 bg-burgundy-dark border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-page-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <span className="font-label text-label-md uppercase text-frosted-blue font-semibold block mb-3">
                Who We Are
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
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-lg bg-onyx-card border border-white/10 shadow-xl">
                <span className="font-label text-label-md uppercase text-frosted-blue font-semibold block mb-2">
                  What We Do
                </span>
                <h3 className="font-display text-headline-sm text-white mb-3">
                  Lorem Ipsum Overview Subheading
                </h3>
                <p className="font-body text-body-md text-gray-300 font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {overviewPillars.map((pillar) => (
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
                      <p className="font-body text-body-sm text-gray-300 mt-1">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Members & Founders (4 Member Blocks) */}
      <section id="team" className="py-24 bg-onyx-bg border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-page-margin">
          <div className="max-w-2xl mb-14">
            <span className="font-label text-label-md uppercase text-frosted-blue font-semibold block mb-3">
              Leadership &amp; Founding Team
            </span>
            <h2 className="font-display text-display-xl text-white mb-4 text-balance">
              Founders &amp; Members
            </h2>
            <p className="font-body text-body-md text-gray-300 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {members.map((member) => (
              <div
                key={member.initials}
                className="p-8 rounded-lg bg-onyx-card border border-white/10 hover:border-button-blue transition-colors flex flex-col justify-between gap-6 shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-DEFAULT bg-burgundy-surface text-white flex items-center justify-center font-display text-headline-sm font-bold flex-shrink-0 border border-white/10">
                        {member.initials}
                      </div>
                      <div>
                        <h3 className="font-display text-headline-sm text-white">
                          {member.name}
                        </h3>
                        <span className="inline-block mt-1 px-2.5 py-0.5 rounded font-caption text-caption-xs font-semibold bg-button-blue text-white">
                          {member.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-body-md text-gray-300 font-light">
                    {member.overview}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="font-label text-caption-xs uppercase tracking-wider text-gray-400">
                    Connect
                  </span>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-DEFAULT bg-burgundy-surface hover:bg-button-blue text-frosted-blue hover:text-white border border-white/10 font-body text-body-sm font-medium transition-colors duration-hover-transition"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Strategic Approach & Outlook */}
      <section id="strategy" className="py-24 bg-burgundy-dark border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-page-margin">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="font-label text-label-md uppercase text-frosted-blue font-semibold block mb-3">
                Operations &amp; Outlook
              </span>
              <h2 className="font-display text-display-xl text-white mb-4 text-balance">
                Strategic Approach &amp; Outlook
              </h2>
              <p className="font-body text-body-md text-gray-300 font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
              </p>
            </div>
            <div>
              <Link
                to="/projects-research"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-DEFAULT bg-button-blue text-white font-body text-body-sm font-medium hover:bg-button-blue-hover transition-colors duration-hover-transition shadow-sm"
              >
                <span>Projects &amp; Research</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategyPoints.map((item) => (
              <div
                key={item.number}
                className="p-8 rounded-lg bg-onyx-card border border-white/10 hover:border-button-blue transition-colors flex flex-col justify-between gap-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-headline-lg text-frosted-blue font-bold">
                      {item.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded font-caption text-caption-xs font-semibold bg-burgundy-surface text-frosted-blue border border-white/10">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-headline-sm text-white">{item.title}</h3>
                  <p className="font-body text-body-md text-gray-300 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
