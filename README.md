<div align="center">

<img src="https://img.shields.io/badge/COGNIFY-AI%20Powered%20SaaS-00C2CB?style=for-the-badge&logo=react&logoColor=white" alt="COGNIFY" width="300"/>

# COGNIFY
### AI-Powered SaaS Platform for Smarter Productivity

*One platform. Everything your team needs.*

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=node.js)](https://nodejs.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)](https://postgresql.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)
[![Stripe](https://img.shields.io/badge/Payments-Stripe-635BFF?style=flat-square&logo=stripe)](https://stripe.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

<br/>

> **Final Year B.Tech Project** — Department of Computer Science & Engineering
> Built with ❤️ by **Indrasen Singh** & **Saket Chaudhary**
> Under the guidance of **Mr. Dileep Kumar Yadav**, Assistant Professor

<br/>

[✨ Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [🚀 Getting Started](#-getting-started) • [📸 Screenshots](#-screenshots) • [📁 Project Structure](#-project-structure) • [🤝 Team](#-team)

</div>

---

## 📖 About The Project

Most teams today juggle **3 to 5 different apps** just to get their work done — one for task management, another for writing content, one for image editing, and yet another for team communication. This constant switching kills productivity and adds unnecessary cost.

**COGNIFY** was built to solve exactly this problem.

It is a full-stack, cloud-native, multi-tenant **Software-as-a-Service (SaaS)** platform that brings together **project management** and **AI-powered productivity tools** under one unified roof. Whether you need to manage a sprint, generate a blog post, remove a background from a product image, or analyze a resume — COGNIFY handles it all from a single dashboard.

This project was developed as our **B.Tech Final Year Project** and represents months of learning, building, debugging, and refining. Every line of code, every design decision, and every test case reflects the effort and dedication we put into making something we are genuinely proud of.

---

## ✨ Features

### 🏢 Multi-Tenant Organization Management
- Create and manage independent organizational workspaces
- Invite team members via email with Clerk-powered invitation flows
- Role-based access control with three roles: **Admin**, **Member**, and **Viewer**
- Complete data isolation between organizations — zero cross-tenant leakage

### 📋 Project & Task Management
- Create projects with name, description, status, start/end dates, and assigned team members
- Full task management with **priority levels** (Critical, High, Medium, Low)
- **Kanban board** with drag-and-drop status updates across Todo, In Progress, In Review, and Done columns
- **Calendar view** showing task deadlines color-coded by priority
- Threaded task comments with @mention support
- Overdue task detection with visual highlighting

### 🤖 AI Tools Suite (6 Tools)
| Tool | Powered By | What It Does |
|------|-----------|--------------|
| **Article Generator** | OpenAI GPT-4o | Creates full-length, structured articles from a topic prompt |
| **Blog Title Generator** | OpenAI GPT-4o | Generates 10 SEO-optimized title variations |
| **Image Generator** | DALL-E 3 | Creates photorealistic or illustrated images from text prompts |
| **Background Remover** | ClipDrop API | Removes image backgrounds with clean, precise edges |
| **Object Remover** | ClipDrop API | Removes selected objects using AI inpainting |
| **Resume Analyzer** | OpenAI GPT-4o | Scores and gives improvement suggestions for uploaded resumes |

### 📊 Analytics Dashboard
- Task completion rates and project health overview
- Team workload distribution charts
- AI usage tracking per billing period
- Weekly completion trend line charts
- Overdue task summary

### 💳 Subscription & Billing
- **Free tier** — project management with limited AI usage
- **Professional tier** — full AI tool access with generous usage limits
- **Enterprise tier** — unlimited AI access with priority support
- Stripe Checkout for secure payment processing
- Self-service subscription management via Stripe Customer Portal
- Webhook-based real-time subscription state sync

### 🔐 Authentication & Security
- Clerk-powered JWT authentication with organization management
- Role-based API middleware — every endpoint is permission-checked
- Zod schema validation on all incoming request bodies
- HTTPS enforced, TLS 1.3 data transmission
- Environment variable-based secret management

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React.js | 18.x | UI component library |
| Vite | 5.x | Frontend build tool |
| Tailwind CSS | 3.x | Utility-first styling |
| React Query | 5.x | Server state management & caching |
| React Router | 6.x | Client-side routing |
| Recharts | 2.x | Analytics data visualization |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 20.x LTS | JavaScript runtime |
| Express.js | 4.x | RESTful API framework |
| Drizzle ORM | 0.29.x | Type-safe database access |
| Zod | 3.x | Schema validation |

### Database & Infrastructure
| Technology | Purpose |
|-----------|---------|
| Neon PostgreSQL 16 | Serverless relational database |
| Vercel | Frontend hosting + serverless API functions |
| GitHub Actions | CI/CD pipeline — auto-deploy on push |

### Third-Party Services
| Service | Purpose |
|---------|---------|
| Clerk | Authentication, organization management, RBAC |
| Stripe | Subscription billing, payment processing |
| OpenAI (GPT-4o) | Article generation, blog titles, resume analysis |
| OpenAI (DALL-E 3) | AI image generation |
| ClipDrop | Background removal, object removal |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** v20.x or higher
- **npm** v9.x or higher
- A **Neon** account (free tier works) — [neon.tech](https://neon.tech)
- A **Clerk** account — [clerk.com](https://clerk.com)
- A **Stripe** account — [stripe.com](https://stripe.com)
- An **OpenAI** API key — [platform.openai.com](https://platform.openai.com)
- A **ClipDrop** API key — [clipdrop.co](https://clipdrop.co/apis)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/cognify.git
cd cognify
```

**2. Install dependencies**
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

**3. Set up environment variables**

Create a `.env` file in the `server` directory:
```env
# Database
DATABASE_URL=your_neon_postgresql_connection_string

# Clerk Authentication
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
CLERK_WEBHOOK_SECRET=whsec_your_clerk_webhook_secret

# AI APIs
OPENAI_API_KEY=sk-your_openai_api_key
CLIPDROP_API_KEY=your_clipdrop_api_key

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_secret
STRIPE_PRO_PRICE_ID=price_your_professional_tier_price_id
STRIPE_ENTERPRISE_PRICE_ID=price_your_enterprise_tier_price_id

# App
NODE_ENV=development
```

Create a `.env` file in the `client` directory:
```env
VITE_API_BASE_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
```

**4. Push the database schema**
```bash
cd server
npm run db:push
```

**5. Start the development servers**
```bash
# Start backend (from /server)
npm run dev

# Start frontend (from /client) — in a new terminal
npm run dev
```

**6. Open the app**

Visit `http://localhost:5173` in your browser and you're good to go! 🎉

---

## 📁 Project Structure

```
cognify/
│
├── client/                          # React.js frontend
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── ui/                  # Base components (Button, Modal, etc.)
│   │   │   ├── kanban/              # Kanban board components
│   │   │   └── charts/              # Analytics chart components
│   │   ├── pages/                   # Application pages/routes
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Tasks.jsx
│   │   │   ├── AITools.jsx
│   │   │   ├── Analytics.jsx
│   │   │   └── Billing.jsx
│   │   ├── context/                 # React Context providers
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── lib/                     # API client, utilities
│   │   └── main.jsx                 # App entry point
│   ├── public/
│   └── package.json
│
├── server/                          # Node.js + Express backend
│   ├── src/
│   │   ├── db/
│   │   │   ├── schema/              # Drizzle ORM table definitions
│   │   │   │   ├── users.ts
│   │   │   │   ├── organizations.ts
│   │   │   │   ├── projects.ts
│   │   │   │   ├── tasks.ts
│   │   │   │   └── subscriptions.ts
│   │   │   └── index.ts             # DB connection
│   │   ├── middleware/              # Express middleware
│   │   │   ├── auth.middleware.ts   # Clerk JWT verification
│   │   │   ├── org.middleware.ts    # Org context injection
│   │   │   └── role.middleware.ts   # RBAC permission checks
│   │   ├── routes/                  # API route handlers
│   │   │   ├── projects.router.ts
│   │   │   ├── tasks.router.ts
│   │   │   ├── ai.router.ts
│   │   │   ├── analytics.router.ts
│   │   │   ├── orgs.router.ts
│   │   │   └── billing.router.ts
│   │   ├── services/                # Business logic & AI integrations
│   │   │   ├── ai/
│   │   │   │   ├── articleGenerator.service.ts
│   │   │   │   ├── imageGenerator.service.ts
│   │   │   │   ├── backgroundRemover.service.ts
│   │   │   │   └── resumeAnalyzer.service.ts
│   │   │   └── billing/
│   │   │       └── stripe.service.ts
│   │   └── index.ts                 # Express app entry point
│   ├── drizzle.config.ts
│   └── package.json
│
└── README.md
```

---

## 🔌 API Reference

### Authentication
All endpoints (except webhooks) require a valid Clerk JWT in the `Authorization: Bearer <token>` header.

### Key Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/projects` | List all projects in org |
| `POST` | `/api/projects` | Create a new project |
| `GET` | `/api/tasks` | List tasks (filterable by status, priority) |
| `POST` | `/api/tasks` | Create a new task |
| `PATCH` | `/api/tasks/:id/status` | Update task status (Kanban drag) |
| `GET` | `/api/analytics` | Get org analytics summary |
| `GET` | `/api/tasks/calendar` | Get tasks for calendar view |
| `POST` | `/api/ai/generate-article` | Generate an article |
| `POST` | `/api/ai/generate-titles` | Generate blog title suggestions |
| `POST` | `/api/ai/generate-image` | Start async image generation |
| `GET` | `/api/ai/image-status/:jobId` | Poll image generation status |
| `POST` | `/api/ai/remove-background` | Remove image background |
| `POST` | `/api/ai/analyze-resume` | Analyze an uploaded resume |
| `POST` | `/api/billing/create-checkout-session` | Create Stripe Checkout |
| `POST` | `/api/billing/webhook` | Stripe webhook receiver |

---

## 📊 Project Results & Testing

We ran thorough testing before calling this project done:

| Test Category | Result |
|--------------|--------|
| **Functional test cases** | ✅ 22/22 passed |
| **API response time (50 users)** | ✅ < 500ms for all standard endpoints |
| **AI output quality score** | ✅ 4.61 / 5.00 (avg. by 3 evaluators) |
| **UAT task completion rate** | ✅ 94.9% (9 users, 7 tasks) |
| **UAT satisfaction score** | ✅ 4.61 / 5.00 |
| **Lighthouse Performance** | ✅ 86.7 / 100 |
| **Lighthouse Accessibility** | ✅ 93.7 / 100 |
| **Cross-tenant data leakage** | ✅ Zero incidents |

---

## 🗺️ Roadmap

Here's what we plan to build next:

- [ ] **React Native mobile app** (iOS & Android with push notifications)
- [ ] **Real-time collaborative editing** using Yjs CRDT
- [ ] **AI project planner** — auto-generate task breakdowns from a project description
- [ ] **Jira & GitHub integration** for teams transitioning from existing tools
- [ ] **Multilingual support** (i18n with react-i18next)
- [ ] **Document management** with S3/R2 file storage
- [ ] **Voice-activated task creation** using Whisper API
- [ ] **Custom AI prompt templates** per organization
- [ ] **AI fallback provider routing** (Anthropic Claude as fallback for OpenAI)
- [ ] **COGNIFY plugin marketplace** for third-party integrations

---

## 🤝 Team

This project was built with genuine passion and a whole lot of late nights by:

<table>
  <tr>
    <td align="center">
      <b>Indrasen Singh</b><br/>
      <sub>Roll No. 22001303025</sub><br/>
      <sub>Full-Stack Development · AI Integration · Database Design</sub>
    </td>
    <td align="center">
      <b>Saket Chaudhary</b><br/>
      <sub>Roll No. 22001303043</sub><br/>
      <sub>Frontend Architecture · UI/UX · Stripe Integration · Testing</sub>
    </td>
  </tr>
</table>

### Our Supervisor
**Mr. Dileep Kumar Yadav**
Assistant Professor, Department of Computer Science & Engineering

*Thank you for your patience, guidance, and support throughout this journey. Every review session, every suggestion, and every word of encouragement made a real difference.*

---

## 🙏 Acknowledgements

We want to thank everyone who helped make COGNIFY a reality:

- **Our families** — for the endless support and for never questioning why we were still up at 2 AM
- **Our friends and classmates** — who tested the platform, broke things, and gave honest feedback
- **The open-source community** — Node.js, React, Drizzle ORM, and countless npm packages that saved us weeks of work
- **OpenAI, Clerk, Stripe, Vercel, and Neon** — for building incredible products with excellent documentation
- **Stack Overflow** — for the countless bugs that were already solved by someone else 😄

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

Have questions, suggestions, or just want to say hi?

- 📧 **Indrasen Singh** — indrasensingh770@gmail.com
- 📧 **Saket Chaudhary** — saketrishu64821@gnail.com

---

<div align="center">

**Built with ❤️, ☕, and a lot of Stack Overflow**

*COGNIFY — B.Tech Final Year Project | Department of Computer Science & Engineering | 2024–2025*

⭐ If you found this project helpful or inspiring, please give it a star!

</div>
