# Accredian Enterprise Clone - Assignment Report

## 🚀 Live Demo & Repository
- **GitHub Repository**: [https://github.com/samruddhisr4/Accredian-Enterprise](https://github.com/samruddhisr4/Accredian-Enterprise)
- **Deployment**: Ready for Vercel (Auto-deploy via GitHub)

## 🛠️ Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Vanilla CSS Modules (for modular, premium design)
- **Language**: TypeScript
- **Icons**: Emoji/Unicode (for speed and zero dependency)
- **Images**: Unsplash API

## 💡 Approach Taken
1. **Analysis**: Used a browser subagent to crawl the reference site and extract its structure, color palette, and content sections.
2. **Design System**: Established a global CSS variable system (`globals.css`) for consistent branding (Accredian Blue, Success Green).
3. **Component-Based Architecture**: Built reusable sections (Navbar, Hero, Stats, Domains, Edge, EnquiryForm, Footer) to ensure clean code and easy maintenance.
4. **Lead Capture (Bonus)**: Implemented a functional "Enquire Now" form with state management, form validation, and mock API submission.
5. **Responsiveness**: Used CSS Flexbox and Grid with media queries to ensure the site looks premium on both Desktop and Mobile.

## 🤖 AI Usage Explanation
- **Layout Extraction**: AI assisted in analyzing the reference site's DOM structure to ensure accurate section recreation.
- **Component Generation**: Used AI to scaffold the initial React components and CSS Modules.
- **Problem Solving**: AI helped resolve a "non-pure selector" error in Next.js CSS Modules by suggesting class-based nesting.
- **Manual Improvements**: 
    - Manually refined the **Glassmorphism** effect in the Navbar.
    - Customized the **animation timings** for the `animate-up` classes.
    - Hand-coded the **form validation logic** and success state transitions.

## ⏱️ Improvements with More Time
- **Real Backend**: Connect the Lead Capture form to a real Supabase or MongoDB backend.
- **Animations**: Implement Framer Motion for more sophisticated entry animations.
- **Dynamic Content**: Fetch course data from a CMS (like Sanity or Contentful).
- **Dark Mode**: Add a toggle for a secondary dark theme.
