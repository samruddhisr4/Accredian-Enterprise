# Accredian Enterprise Clone

## Setup Instructions
1. Clone the repository: `git clone https://github.com/samruddhisr4/Accredian-Enterprise.git`
2. Navigate to the project directory: `cd accredian-app`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Approach Taken
- **Structural Analysis**: Analyzed the reference site to identify key sections (Hero, Stats, Edge, Domains, FAQ, Footer).
- **Component-Driven Development**: Built modular React components for each section using Next.js App Router for optimized performance.
- **Styling Strategy**: Used Vanilla CSS Modules to ensure a premium, customized look without the overhead of external utility frameworks, maintaining a high level of design control.
- **Bonus Integration**: Developed a functional Lead Capture form with state management to demonstrate full-stack thinking and execution.

## AI Usage Explanation
- **Layout Analysis**: Used AI-powered browser tools to map out the reference site's design tokens and layout structure.
- **Boilerplate Scaffolding**: Leveraged AI to generate clean, typed React component templates.
- **Debugging**: Utilized AI to resolve CSS Module purity issues and ensure cross-browser compatibility.
- **Manual Improvements**: Manually refined the sticky navigation logic, glassmorphism UI effects, and form submission success states.

## Improvements with More Time
- **Backend Integration**: Implement a real database (Supabase/Firebase) to persist lead data from the enquiry form.
- **Advanced Animations**: Integrate Framer Motion for smoother entrance animations and section transitions.
- **SEO Optimization**: Add comprehensive metadata and OpenGraph tags for better search visibility.
- **Unit Testing**: Implement Playwright or Jest to ensure component reliability across different viewports.
