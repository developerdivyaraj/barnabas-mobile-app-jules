# Barnabas Mobile App - Development Plan

## 1. Project Architecture

### Mobile Application
- **Framework:** Flutter (Cross-platform for iOS and Android).
- **State Management & Dependency Injection:** GetX. Chosen for its high performance, decoupled logic, and ease of state management and routing.
- **Architecture Pattern:** Feature-first MVC/MVVM adapted for GetX (Controllers, Views, Models, Providers/Services). This ensures modularity and scalability.

### Backend API
- **Runtime & Environment:** Node.js.
- **Framework:** Express.js or NestJS (NestJS recommended for enterprise-level structure and TypeScript integration).
- **Architecture:** Layered architecture separating Routes, Controllers, Services (business logic), and Repositories/Data Access.

### Third-Party Integrations
- **AI Assistant ("Barnabas"):** OpenAI API (GPT-4o/GPT-4o-mini) or Anthropic Claude API for contextual chat and reflection guidance.
- **Push Notifications:** Firebase Cloud Messaging (FCM).
- **Cloud Storage:** AWS S3 or Google Cloud Storage (for media, profile pictures, and group avatars).

---

## 2. Module-wise Feature Breakdown (Based on feature_list_v2)

### Mobile App (Flutter / GetX)
1. **Auth & Onboarding:**
   - Email/Password & Social Login (Google/Apple).
   - Password reset/forgot password.
   - Initial onboarding: User persona setup and learning goal selection.
2. **Home Dashboard:**
   - Daily content feed and progress overview.
   - Quick action shortcuts (Jump back into formations, recent groups).
3. **Content & Learning (Core):**
   - **Daily Formations:** Scripture reading, devotional content, journaling prompts.
   - **Micro-Learning:** Bite-sized carousel learning modules.
   - **Scenario-Based Exercises:** Interactive decision-making flows for reflection.
4. **Journal & Reflection:**
   - Private daily journaling interface.
   - AI-driven or static reflection prompts.
   - Export capabilities for journals.
5. **AI Companion (Barnabas):**
   - Chatbot interface.
   - Pre-defined prompt buttons.
   - Context-aware spiritual guidance and check-ins.
6. **Community & Groups:**
   - Group discovery, creation (if permitted), and listing.
   - Group discussions and real-time chat.
7. **Profile & Settings:**
   - Edit profile details, avatar.
   - Notification preferences, Dark/Light theme toggles.
   - Account deletion and privacy settings.
   - Bug reporting / Support contact.

### Admin Panel & Backend API
1. **Admin Authentication & Dashboard:** Secure admin login, overall metrics (users, engagement, bug reports).
2. **Content Management System (CMS):** Builders for Daily Formations, Micro-Learning carousels, and Scenario Exercises.
3. **Tagging & Recommendation Engine:** Tagging content by Theme, Audience, and Goal.
4. **User & Group Moderation:** Manage user statuses, group supervision, issue reports queue.
5. **Analytics & Support:** System for addressing bug reports and monitoring AI usage metrics.

---

## 3. Database Structure Suggestions
*Recommended Database:* **PostgreSQL** (Relational structure fits well for Users, Groups, Journals, and Content). ORM: Prisma or TypeORM.

- **Users:** `id`, `email`, `password_hash`, `name`, `persona`, `goals`, `created_at`, `updated_at`
- **Formations (Content):** `id`, `title`, `scripture_text`, `devotional_html`, `journal_prompt`, `publish_date`, `status`
- **Journals:** `id`, `user_id`, `content`, `linked_formation_id`, `created_at`
- **Groups:** `id`, `name`, `description`, `created_by`, `status`, `created_at`
- **GroupMembers:** `group_id`, `user_id`, `role` (admin, member), `joined_at`
- **GroupMessages:** `id`, `group_id`, `user_id`, `message`, `created_at`
- **Tags:** `id`, `name`, `category` (Theme, Audience, Goal)
- **Reports (Moderation):** `id`, `reporter_id`, `item_type`, `item_id`, `reason`, `status`

---

## 4. API Planning (RESTful approach)

- **Auth:**
  - `POST /api/v1/auth/register`
  - `POST /api/v1/auth/login`
- **Users:**
  - `GET /api/v1/users/profile`
  - `PUT /api/v1/users/profile`
  - `POST /api/v1/users/onboarding`
- **Content:**
  - `GET /api/v1/content/formations/daily`
  - `GET /api/v1/content/micro-learning`
  - `GET /api/v1/content/scenarios`
- **Journals:**
  - `POST /api/v1/journals`
  - `GET /api/v1/journals`
  - `POST /api/v1/journals/export`
- **AI Companion:**
  - `POST /api/v1/ai/chat`
- **Groups:**
  - `GET /api/v1/groups`
  - `POST /api/v1/groups`
  - `POST /api/v1/groups/:id/join`
  - `GET /api/v1/groups/:id/messages`
- **Admin:**
  - `GET /api/v1/admin/dashboard`
  - `GET /api/v1/admin/users`

---

## 5. Development Phases

**Phase 1: Discovery & System Design (Weeks 1-2)**
- UI/UX wireframing and interactive prototypes.
- API contract design (Swagger/OpenAPI).
- Database schema and architecture finalization.

**Phase 2: Core Platform & Authentication (Weeks 3-4)**
- **Backend:** Node.js server setup, Database schemas, Authentication/User APIs.
- **Mobile:** Flutter initialization, GetX architecture setup, Onboarding and Auth flows.

**Phase 3: Content Delivery & Core Features (Weeks 5-7)**
- **Backend:** CMS APIs, Formations, and Micro-learning endpoints.
- **Mobile:** Home Dashboard, Content Consumption screens (Formations, Scenarios).
- **Admin Web:** Content builders and basic moderation tools.

**Phase 4: Journaling & AI Integration (Weeks 8-9)**
- **Backend:** Journal storage, OpenAI/Claude API integration.
- **Mobile:** Journal UI, AI Chat interface, Prompt integrations.

**Phase 5: Community, Groups, & Moderation (Weeks 10-11)**
- **Backend:** Groups APIs, WebSockets setup for real-time chat.
- **Mobile:** Group discovery, Joining logic, Group chat interface.
- **Admin Web:** Reporting queues and Group management.

**Phase 6: Notifications, Settings, & Polish (Week 12)**
- **Integration:** Firebase Cloud Messaging (Push Notifications).
- **Mobile:** Settings, Profile management, App Theme toggles.

**Phase 7: Testing & QA (Weeks 13-14)**
- Comprehensive functional, UI/UX, and API testing.
- Bug fixing and performance tuning.
- Executing pre-commit and deployment readiness checks.

**Phase 8: Launch (Week 15)**
- Production environment setup.
- App Store (iOS) & Google Play Store (Android) submissions.

---

## 6. Timeline Estimation
**Total Estimated Time:** 14 - 16 Weeks (~3.5 - 4 Months)
- Design & Architecture: 2 Weeks
- App & Backend Development: 10 Weeks
- QA & Testing: 2 Weeks
- Deployment & App Store Review: 1 - 2 Weeks

---

## 7. Recommended Folder Structure

### Mobile (Flutter with GetX)
```text
lib/
 ├── main.dart
 ├── core/              # Global constants, theme, network client, utils
 ├── routes/            # GetPages and route definitions
 ├── data/              # Models, repositories, and API providers
 ├── modules/           # Feature-first modules
 │    ├── auth/
 │    │    ├── controllers/
 │    │    ├── views/
 │    │    └── bindings/
 │    ├── home/
 │    ├── content/
 │    ├── journal/
 │    ├── ai_chat/
 │    └── groups/
 └── shared/            # Reusable widgets (buttons, input fields, cards)
```

### Backend (Node.js)
```text
src/
 ├── server.js          # App entry point
 ├── config/            # DB configuration, ENV variables
 ├── routes/            # Express or Nest route definitions
 ├── controllers/       # HTTP request handlers
 ├── services/          # Core business logic
 ├── models/            # Database schemas/entities
 ├── middlewares/       # Auth guards, validators, error handlers
 └── utils/             # Helpers (logger, specific parsers)
```

---

## 8. Team Requirements and Workflow

### Team Composition
- **1 Project Manager / Scrum Master:** Oversees sprint planning, unblocks the team.
- **1 UI/UX Designer:** Designs user flows, wireframes, and final UI.
- **2 Mobile Developers (Flutter):** 1 Lead and 1 Mid-level focusing on the GetX app.
- **2 Backend Developers (Node.js):** Managing APIs, Database, and WebSockets.
- **1 Web Developer:** Building the Admin CMS Web dashboard.
- **1 QA Engineer:** Manual testing, automated script generation, App Store guidelines check.

### Workflow Methodology
- **Agile Scrum:** 2-week Sprint cycles with planning, daily stand-ups, and retrospectives.
- **Version Control:** GitFlow (branches: `main`, `develop`, `feature/*`, `bugfix/*`).
- **CI/CD:** Automated pipelines (e.g., GitHub Actions, Bitrise) to run tests, linting, and build preview APKs/TestFlight builds automatically on push to `develop`.
- **Code Review:** Mandatory Pull Requests (PRs) requiring at least one peer approval before merging.