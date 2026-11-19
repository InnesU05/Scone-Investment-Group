# Scone Investment Group

Modular React + TypeScript + Tailwind CSS web portal for Scone Investment Group.

## Project Structure

```text
scone-investment-group/
├── public/
│   └── images/
│       ├── logo.png                # Scone Investment Group brand logo
│       ├── sconetree.jpg           # Hero photography (About Us & Portfolio)
│       └── sconepath.jpg           # Hero photography (Projects & Research)
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Sticky global navigation bar
│   │   ├── Footer.tsx              # Global footer, contact block & legal disclaimer
│   │   └── Layout.tsx              # Shared page wrapper (Header + Page Content + Footer)
│   ├── pages/
│   │   ├── AboutUsPage.tsx         # About Us page (/ & /about)
│   │   ├── ProjectsResearchPage.tsx# Projects & Research page (/projects-research)
│   │   └── PortfolioPage.tsx       # Portfolio page (/portfolio)
│   ├── App.tsx                     # Client-side route definitions
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Tailwind imports & Material Symbols helper styles
├── tailwind.config.js              # Scone Investment Group design tokens & colours
└── package.json
```

## Local Development

```bash
npm install
npm run dev
```
