# Budget Her Way — Women's Personal Finance Blog

Built with **Next.js 15** + **TypeScript** + **Tailwind CSS**. Deployed on **Vercel**. Content managed with **Markdown files**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📝 Writing Articles

1. Create a new `.md` file in `content/posts/`
2. Add frontmatter at the top:

```markdown
---
title: "Your Article Title"
date: "2025-07-21"
description: "17-20 word meta description including your focus keyword."
category: "Budgeting"
tags: ["budget tips", "zero based budget", "budgeting for beginners"]
pinTitle: "Pinterest-Optimized Headline for Your Pin"
---

Your article content here...
```

3. Save the file and it appears on the blog automatically.

### Available Categories
- `Budgeting`
- `Saving Money`
- `Financial Freedom`
- `Investing`
- `Side Hustles`
- `Debt Payoff`

## 📁 Project Structure

```
budget-her-way/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── blog/page.tsx       # Blog listing
│   ├── blog/[slug]/        # Individual article
│   ├── about/              # About Us
│   ├── contact/            # Contact
│   ├── privacy-policy/     # Privacy Policy
│   └── affiliate-disclosure/ # Affiliate Disclosure
├── components/             # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── PostCard.tsx
├── content/posts/          # ← Your blog posts go here
└── lib/posts.ts            # Markdown utilities
```

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click Deploy

Every `git push` triggers an auto-deploy. New articles publish by pushing a new `.md` file.

## ✅ Writing Checklist (from Bloom & Budget Guide)

Before publishing any article:
- [ ] No em dashes anywhere
- [ ] No sentence longer than 25 words
- [ ] Intro is two paragraphs maximum
- [ ] No template phrasing
- [ ] Focus keyword in first paragraph
- [ ] Meta description is 17–20 words
- [ ] Article sounds like a real woman wrote it

## 🎨 Brand Colors

| Name | Hex |
|------|-----|
| Forest Green | `#1B5E35` |
| Gold | `#C9A84C` |
| Cream | `#FAFAF7` |
