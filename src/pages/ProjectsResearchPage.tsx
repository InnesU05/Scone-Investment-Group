import React from 'react';

const whitepapers = [
  {
    category: 'Lorem Category I',
    date: 'October 2026',
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.',
    length: '00-Page Briefing',
  },
  {
    category: 'Lorem Category II',
    date: 'August 2026',
    title: 'Ut Enim Ad Minim Veniam Quis Nostrud',
    summary:
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
    length: '00-Page Briefing',
  },
  {
    category: 'Lorem Category III',
    date: 'July 2026',
    title: 'Duis Aute Irure Dolor In Reprehenderit',
    summary:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed do eiusmod tempor.',
    length: '00-Page Briefing',
  },
];

const pipelineProjects = [
  {
    name: 'Lorem Ipsum Project Alpha',
    stage: 'Stage III: Placeholder Status',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    metricOneLabel: 'Placeholder Metric A',
    metricOneValue: '£00,000,000',
    metricTwoLabel: 'Placeholder Metric B',
    metricTwoValue: '00.0% Net',
  },
  {
    name: 'Lorem Ipsum Project Beta',
    stage: 'Stage II: Placeholder Status',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.',
    metricOneLabel: 'Placeholder Metric A',
    metricOneValue: '£00,000,000',
    metricTwoLabel: 'Placeholder Metric B',
    metricTwoValue: '00.0% Net',
  },
];

export const ProjectsResearchPage: React.FC = () => {
  return (
    <>
      {/* Hero Slide with Gradient Overlaid Background Image ONLY */}
      <section className="relative min-h-[560px] flex items-center bg-onyx-bg text-white overflow-hidden">
        <img
          src="/images/sconepath.jpg"
          alt="Scone agricultural path and green field landscape"
          className="absolute inset-0 w-full h-full object-cover object-center filter saturate-75 brightness-75"
        />
        {/* Gradient overlays strictly over background photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-onyx-bg via-onyx-bg/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-dark-cyan/70 via-transparent to-dark-raspberry/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-bg/40 via-transparent to-onyx-bg" />

        <div className="relative z-10 max-w-7xl mx-auto px-page-margin py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-onyx-card border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-frosted-blue" />
              <span className="font-label text-label-md uppercase text-frosted-blue">
                Scone Investment Group
              </span>
            </div>
            <h1 className="font-display text-display-2xl text-white mb-6 text-balance">
              Projects &amp; Research
            </h1>
            <p className="font-body text-body-lg text-gray-200 mb-8 max-w-xl text-pretty font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#active-research"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-DEFAULT bg-button-blue text-white font-medium text-body-md hover:bg-button-blue-hover transition-colors duration-hover-transition shadow-lg"
              >
                <span>Explore Research Papers</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: Research Memorandums (Solid Background: Burgundy Dark) */}
      <section id="active-research" className="py-20 bg-burgundy-dark text-white">
        <div className="max-w-7xl mx-auto px-page-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
            <div>
              <span className="font-label text-label-md uppercase text-frosted-blue font-semibold block mb-2">
                Projects &amp; Research
              </span>
              <h2 className="font-display text-headline-lg text-white text-balance">
                Lorem Ipsum Publications &amp; Theses
              </h2>
            </div>
            <p className="font-body text-body-md text-gray-300 max-w-md mt-4 md:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Research Grid (Solid Onyx Card Containers) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((paper) => (
              <article
                key={paper.title}
                className="bg-onyx-card rounded-lg border border-white/10 shadow-sm p-7 flex flex-col justify-between hover:border-button-blue transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded font-caption text-caption-xs font-semibold bg-burgundy-surface text-frosted-blue uppercase">
                      {paper.category}
                    </span>
                    <span className="font-body text-body-sm text-gray-400 font-medium">
                      {paper.date}
                    </span>
                  </div>
                  <h3 className="font-display text-headline-sm text-white mb-3">{paper.title}</h3>
                  <p className="font-body text-body-sm text-gray-300">{paper.summary}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="font-label text-label-md uppercase text-frosted-blue font-semibold">
                    {paper.length}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-DEFAULT bg-button-blue text-white font-body text-body-sm font-medium hover:bg-button-blue-hover transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    <span>Executive Summary</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 3: Active Project Underwriting Pipeline (Solid Background: Onyx Black) */}
      <section className="py-20 bg-onyx-bg text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-page-margin">
          <div className="mb-10">
            <span className="font-label text-label-md uppercase text-frosted-blue font-semibold block mb-2">
              Lorem Ipsum Pipeline
            </span>
            <h2 className="font-display text-headline-lg text-white">
              Lorem Ipsum Projects Under Review
            </h2>
            <p className="font-body text-body-md text-gray-300 mt-2 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="space-y-4">
            {pipelineProjects.map((project) => (
              <div
                key={project.name}
                className="p-6 rounded-md border border-white/10 bg-burgundy-dark hover:border-button-blue transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="lg:max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-display text-headline-sm text-white font-semibold">
                      {project.name}
                    </span>
                    <span className="px-2.5 py-0.5 rounded font-caption text-caption-xs font-semibold bg-onyx-card border border-white/20 text-frosted-blue">
                      {project.stage}
                    </span>
                  </div>
                  <p className="font-body text-body-md text-gray-300">{project.description}</p>
                </div>

                <div className="flex flex-wrap items-center gap-8 flex-shrink-0">
                  <div>
                    <div className="font-label text-label-md uppercase text-gray-400">
                      {project.metricOneLabel}
                    </div>
                    <div className="font-display text-headline-sm text-white font-bold">
                      {project.metricOneValue}
                    </div>
                  </div>
                  <div>
                    <div className="font-label text-label-md uppercase text-gray-400">
                      {project.metricTwoLabel}
                    </div>
                    <div className="font-display text-headline-sm text-frosted-blue font-bold">
                      {project.metricTwoValue}
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="px-5 py-2.5 rounded-DEFAULT bg-button-blue text-white font-body text-body-sm font-medium hover:bg-button-blue-hover transition-colors shadow-sm"
                  >
                    Request Overview
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
