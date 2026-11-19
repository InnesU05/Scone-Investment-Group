import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutUsPage } from './pages/AboutUsPage';
import { ProjectsResearchPage } from './pages/ProjectsResearchPage';
import { PortfolioPage } from './pages/PortfolioPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AboutUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/projects-research" element={<ProjectsResearchPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
