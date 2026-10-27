# SkillHub — Front-End Learning Platform

A responsive bilingual (English / Arabic) learning-platform concept built with React, Vite, and plain CSS. It is designed as a portfolio project and as a starting point for a client-specific product.

## Run locally

1. Install Node.js (LTS).
2. Extract this folder and open a terminal inside it.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL printed by Vite.
5. Run `npm run build` to create the production build.

## Included in this front-end demo

- Responsive desktop, tablet, and mobile layouts
- English / Arabic language toggle with RTL layout
- Dark / light theme toggle
- Course catalog cards with search, category tabs, and level filter
- Course details modal, enrollment interaction, and toast feedback
- Save-to-wishlist interaction
- Demo sign-in form and learner state
- Learning dashboard preview, progress indicators, instructor section, and CTA sections
- Reusable React components and course data separated into `src/data.js`
- Accessible labels, focus states, semantic sections, and responsive CSS

## Important scope notes

This is a **front-end prototype**. Sign-in, enrollment, saved courses, and progress are demo interactions held in React state; they do not persist after refresh and do not connect to a real server. Prices are sample content, not live payment offers. Before using this for a real business, connect an API and database, implement secure authentication and authorization, use a payment provider, and add real course/video delivery and privacy terms.

## Suggested next steps for a client project

1. Confirm the client's brand, content, and required pages.
2. Replace sample courses and instructor information with approved content.
3. Add routing and real empty/loading/error states.
4. Integrate the client's API, authentication, and payment flow.
5. Test keyboard navigation, RTL screens, mobile devices, and production builds.

Keep a clear record of what you built and be ready to explain each component in an interview or client handover.

## Professional upgrade notes

- Theme, language, wishlist, and demo enrollments are saved in browser `localStorage`, so the demo keeps these choices after a refresh on the same browser.
- Course cards and course detail descriptions switch to Arabic when Arabic is selected.
- This remains a front-end demo: browser storage is not a secure database, and the sign-in form does not authenticate a real account.

## Recommended quality-check before publishing

1. Run `npm install` and `npm run build`.
2. Test the course search, category and level filters, wishlist, enrollment, language toggle, theme toggle, and mobile navigation.
3. Refresh the page and verify that saved demo preferences remain.
4. Test both Arabic RTL and English LTR at mobile and desktop widths.
5. Do not use real customer information or payments until a secure backend is connected.
