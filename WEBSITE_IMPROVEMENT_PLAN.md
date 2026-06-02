# Personal Website — Improvement Plan

**For:** Yu (Ray) Wang · **Stack:** Next.js 15 · TypeScript · Tailwind v4 · Framer Motion
**Goal:** Make the site more impressive and showcase recent GitHub work, framed for full-stack / general SWE roles.
**Live:** https://personal-website-zeta-cyan.vercel.app

---

## 0. Done this session

The **Projects section** (`src/components/ProjectsSection.tsx`) was rewritten:

- Your existing projects are kept **and** recent public repos were added — **15 total**, sorted **newest → oldest**.
- Accurate descriptions and real tech stacks pulled from each repo's README (e.g. the Go `processing-platform` is now described as the distributed MQTT→Kafka→Postgres pipeline it actually is).
- New UI: category **filter chips** (All / AI-ML / Full-Stack / Backend / Systems / Games), **Featured** badges, category color headers, language + year on each card, and a cleaner two-button (Code / Live) footer.
- Removed the fake `liveUrl` placeholders (`https://your-ecommerce-demo.com`) that linked nowhere.

Everything else below is recommended next, roughly in priority order.

---

## 1. Fix accuracy issues first (high impact, low effort)

These actively hurt credibility with a technical reviewer:

1. **Broken "Code" links.** Three featured projects point to repos that are **not public** on your GitHub:
   - CodeHub → `devsearch_app`
   - ZenTask → `todolist_application`
   - Phantom Hearts Rising → `OOD_game_project`

   Either make these repos public, fix the URLs, or remove the cards. As-is they 404 for any visitor.
2. **Empty repo.** `deal_agent_platform` exists but has **no code pushed**. Push the code or point the card elsewhere.
3. **Email mismatch.** `HomeSection.tsx` shows `wangyu7989@gmail.com`, but your account email is `wang1999yu@gmail.com`. Confirm which is correct and make it consistent across Home / Contact / Footer.
4. **Approximate dates.** For the three non-public repos I estimated `date` values (marked `// approximate — confirm` in the code). Correct them so the newest→oldest sort is exact.
5. **Small polish:** skills list has `RabitMQ` → `RabbitMQ`; `package.json` author is still `"Your Name"`; README mentions a "Digital Twin AI chat" section that doesn't exist as a component.

---

## 2. Content additions (what's missing)

The site currently has Home, Projects, Blog, and a Gaming gallery. For a strong SWE portfolio, add:

- **Experience / education timeline.** A short vertical timeline (roles, school, dates, 1–2 bullet outcomes each) gives recruiters the context projects alone don't.
- **A real "About" paragraph with proof.** Tie your bio to concrete numbers ("processed X events/sec", "N microservices", "cut latency by Y"). Recruiters skim for metrics.
- **Resume in the hero.** You already ship `public/YuWang_resume_sde_v1.pdf` — add a prominent "Download Résumé" button up top, not just a footer link.
- **Project detail (modal or `/projects/[id]`).** For your 3–4 featured projects, a longer write-up with screenshots, architecture diagram, and "what I learned" reads far better than a card.
- **Blog: real or hidden.** If there are no real posts yet, hide the section until there are — an empty/placeholder blog reads worse than none.
- **Contact section.** Wire up the EmailJS form (the deps are already installed) or replace with a clear mailto + LinkedIn + GitHub block.

---

## 3. UI / UX upgrades

- **Light/dark toggle.** The theme is hard-coded dark (`globals.css`). A toggle (with `prefers-color-scheme` default) is an easy, impressive touch.
- **Hero polish.** Add a subtle animated gradient/grid background, a one-line value prop under your name, and the résumé + "View projects" CTAs. The floating 🎯/⭐ emojis read as placeholder — consider replacing with tech-logo orbs or removing.
- **Live GitHub signal on cards.** Pull star/last-updated counts via the GitHub REST API at build time (`https://api.github.com/users/759257989/repos`) so the grid stays current automatically and shows real activity. Add language-color dots (GitHub's palette).
- **Navigation.** Sticky header with active-section highlighting and a scroll-progress bar; a mobile hamburger menu if not already responsive.
- **Accessibility (quick audit):**
  - `--muted-foreground: #6b7280` on the dark `#1a1a1a` background is below WCAG AA for small text — lighten it.
  - Ensure visible focus rings, `alt` text on all images, and respect `prefers-reduced-motion` for the Framer animations.
- **Performance.** Several hero/gallery images are large `.JPG`s — serve via `next/image` with proper `sizes`/`width`/`height` and convert to WebP. Lazy-load the gallery.
- **Consistency.** Define a small typographic scale and spacing rhythm; use the accent color intentionally (links, active states, featured) rather than broadly.

---

## 4. Recommended project lineup (newest → oldest)

Implemented in the new Projects section. ★ = featured.

| # | Project | Year | Stack | Category |
|---|---------|------|-------|----------|
| 1 | Robotics Sensing & Navigation | 2026 | Python, IMU/GPS, LiDAR, sensor fusion | Systems |
| 2 | ★ Distributed Processing Platform | 2026 | Go, Gin, Kafka, MQTT, Postgres, Redis, Mongo, OTel | Backend |
| 3 | ★ Reconnaissance Blind Chess | 2026 | React, TS, FastAPI, Stockfish, Docker | Full-Stack |
| 4 | RAG Knowledge Chatbot | 2026 | Python, FastAPI, ChromaDB, Claude | AI/ML |
| 5 | ★ PDF Q&A Chatbot | 2026 | FastAPI, React, ChromaDB, OpenAI, PyMuPDF | AI/ML |
| 6 | Employee Management System | 2026 | C++, OOD, STL | Systems |
| 7 | Resume Screening Tool | 2025 | Python, NLP, scikit-learn | AI/ML |
| 8 | Deal Discovery & Pricing Agent | 2025 | FastAPI, React, LLaMA, ChromaDB | AI/ML |
| 9 | CodeHub | 2025 | Django, Postgres, JS | Full-Stack |
| 10 | Phantom Hearts Rising | 2025 | Java, Swing, OOD, JUnit | Games |
| 11 | ★ Upic Distributed Ski System | 2025 | Java, Spring Boot, RabbitMQ, AWS | Backend |
| 12 | LeadNews Microservices | 2025 | Spring Boot, Spring Cloud, Redis | Backend |
| 13 | Case Management Backend | 2025 | FastAPI, SQLAlchemy, scikit-learn | Backend |
| 14 | ZenTask | 2025 | React, Express, MongoDB | Full-Stack |
| 15 | Kanbas Learning Platform | 2024 | React, TS, Node, MongoDB | Full-Stack |

> Your three strongest *recent* signals are the **Go processing platform** (real distributed-systems depth), the **RBC chess game** (full-stack + game AI), and the **PDF Q&A chatbot** (production-quality RAG). Lead with these.

---

## 5. Suggested roadmap

**Quick wins (≈1 sitting)**
- Fix broken links / empty repo / email mismatch (§1)
- Add résumé button to hero; fill the empty Projects subtitle (done)
- Lighten low-contrast text; add focus rings

**This week**
- Experience/education timeline + metric-driven About
- Light/dark toggle
- Wire the contact form (EmailJS)
- SEO metadata + Open Graph image in `layout.tsx`

**Later / nice-to-have**
- Project detail pages with screenshots + architecture diagrams
- Live GitHub stats on cards (auto-updating)
- Custom domain + analytics

---

## 6. Deploy & keep it fresh

- Already on Vercel — every push to `main` redeploys.
- Consider a **custom domain** (e.g. `rraywang.dev`) for a more professional URL than the `*.vercel.app` default.
- To avoid manually editing the projects array, fetch your repos from the GitHub API at build time and merge with hand-written descriptions keyed by repo name — new repos then show up automatically.
