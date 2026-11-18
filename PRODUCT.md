# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** recruiters and hiring managers evaluating candidates for pre-professional software development internships (Backend / Full Stack).
- **Secondary:** freelance clients looking for a developer to build web or mobile solutions.

Both audiences review the site on desktop and mobile, often in a short screening session, and need to confirm profile, projects, and contact details quickly.

## Product Purpose

A personal portfolio for Giussepe Taquiri, Software Engineering student at UPC (Lima, Peru). It presents who he is, his technical skills, featured projects, experience, education, and certifications, and gives visitors a downloadable CV and direct contact channels. Success means a recruiter downloads the CV or makes contact, and a potential client starts a conversation.

## Positioning

A software engineering student portfolio backed by real project evidence: backend and full-stack work with Java/Spring Boot, Node.js and .NET, plus mobile projects with Flutter/Android. The differentiator is the combination of academic training, hands-on project repositories, and a directly downloadable CV — presented bilingually (Spanish/English) for local and international opportunities.

## Operating Context

- Static site published on GitHub Pages at `https://Giussepedev30.github.io/portfolio/`.
- Visitors arrive from the GitHub profile, LinkedIn, or a CV link.
- The CV is a PDF generated from the same content and must remain downloadable.
- Project cards link to public GitHub repositories; contact happens by email, LinkedIn, or GitHub.
- Content is maintained manually in `index.html`, `en/index.html`, `docs/index.html` and `docs/en/index.html`.

## Capabilities and Constraints

- Single-page static site built with HTML and Tailwind (CDN); no build step required.
- Spanish and English versions are both required. Implemented as two static pages: `/index.html` (Spanish, canonical) and `/en/index.html` (English), cross-linked by `hreflang` and a header language switcher.
- Must keep: downloadable CV (`cv-es.pdf` for Spanish, `cv.pdf` for English), project links to GitHub, and direct contact details.
- Existing sections: hero, about, skills, featured projects, academic projects, experience, education/certifications, GitHub stats, contact.
- Deployment target is GitHub Pages from the `docs/` folder; the root also holds a copy of the site.
- No backend, CMS, analytics, or form submission is in place.

## Brand Commitments

- Wordmark: **Giussepe.dev**.
- Existing voice: professional, concise, first-person, Spanish with English technical terms.
- Visual identity currently uses blue (`#2563eb`) and green (`#22c55e`) accents on a light/dark neutral base.

## Evidence on Hand

- Real projects with public repositories: Frescapp, Hospedaje Buenos Aires, MeldCash, Personal Website, MediCore (fork).
- Academic projects: SmartFlow, AutoMatch, TuCash.
- Work experience: IT Support Technician at Calta S.A.C. (Jan 2022 – Dec 2024).
- Certifications: Google Cybersecurity (Coursera, 2026), Using Python to Access Web Data (University of Michigan, 2025), Python Data Structures (University of Michigan, 2025).
- Profile avatar from GitHub and GitHub stats cards.
- No testimonials, client logos, benchmarks, or commercial case studies are available; future work must not fabricate them.

## Product Principles

1. **Evidence over claims.** Show projects, repositories, and concrete experience instead of generic self-description.
2. **Fast screening.** A recruiter should understand the profile and reach the CV or contact action within seconds.
3. **One clear next step.** Download the CV or make contact; everything else supports that.
4. **Bilingual by default.** Spanish and English must both serve real opportunities.
5. **Keep it maintainable.** A static, dependency-light site the owner can update without a build pipeline.

## Accessibility & Inclusion

- Responsive layout is required for desktop and mobile.
- No formal accessibility standard has been confirmed; maintain readable contrast and semantic structure.
