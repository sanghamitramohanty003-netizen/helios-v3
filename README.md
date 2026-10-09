# ☀️ Helios V3 — Ultimate Study OS

> The most addictive productivity + learning platform for NEET, JEE, Boards, and MBBS students.
> Duolingo × Notion × Finch × Pokémon — built for Indian competitive exam warriors.

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🔐 **Auth** | Google Sign-In via Firebase + Demo mode |
| 🧙 **Onboarding** | 4-step wizard: track, theme, goal, launch |
| 📊 **Dashboard** | XP, streak, mood, quests, weekly chart, loot chest |
| ⏱️ **Pomodoro** | 25/5, 50/10, 90/20, custom · soundscapes · session log |
| 📓 **Journal + Mood AI** | Mood detection (focused/calm/stressed/burnout) + AI insights |
| 🏥 **MBBS Hub** | Anatomy roadmap, physiology viva, biochem flashcards, clinical cases |
| ⚔️ **Gamification** | Levels, XP, ranks (Rookie→Scholar→Elite→Legend), loot, boss battles |
| 🎨 **8 Theme Worlds** | Anime, Luxury, Fantasy, Gen Z, Barbie, Birbal, Ladybug, Phoenix |

---

## 🛠 Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** for utility styling
- **Zustand** (with persist) for global state
- **Firebase Auth** + **Firestore**
- **Framer Motion** (add animations as needed)
- **Lucide React** for icons

---

## ⚡ Quick Start

### 1. Clone & Install

```bash
git clone <your-repo>
cd helios-v3
npm install
```

### 2. Configure Firebase

```bash
cp .env.example .env.local
# Fill in your Firebase project values
```

Create a Firebase project at https://console.firebase.google.com:
- Enable **Authentication → Google Sign-In**
- Create a **Firestore Database**
- Copy your config values to `.env.local`

### 3. Run dev server

```bash
npm run dev
```

Open http://localhost:5173

### 4. Build for production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/             # Reusable primitives (Button, Card, Badge, etc.)
│   ├── onboarding/     # Onboarding wizard
│   └── Sidebar.tsx     # Navigation
├── hooks/
│   ├── usePomodoro.ts  # Full timer state machine
│   └── useXPPop.ts     # XP animation hook
├── lib/
│   ├── constants.ts    # Themes, ranks, XP values, loot
│   ├── firebase.ts     # Firebase init
│   └── store.ts        # Zustand global store
├── pages/
│   ├── AuthPage.tsx    # Google Sign-In
│   ├── DashboardPage.tsx
│   ├── PomodoroPage.tsx
│   ├── JournalPage.tsx
│   ├── MBBSPage.tsx
│   ├── GamifyPage.tsx
│   └── ThemesPage.tsx
├── styles/
│   └── globals.css     # CSS variables, animations, utilities
├── types/
│   └── index.ts        # All TypeScript types
├── App.tsx             # Root + routing
└── main.tsx            # Entry point
```

---

## 🎨 Theming System

Themes are applied via CSS custom properties on `:root`. Switching themes:

```ts
document.documentElement.style.setProperty('--accent', '#fc5c9c')
document.documentElement.style.setProperty('--accent2', '#f472b6')
// etc.
```

All 8 themes defined in `src/lib/constants.ts`:
`anime | luxury | fantasy | genz | barbie | birbal | ladybug | phoenix`

---

## 🧠 State Architecture

Everything lives in a single **Zustand store** (`src/lib/store.ts`) with `persist` middleware for localStorage.

Key slices:
- `user` — Firebase auth user
- `onboarding` — track, theme, goal, completed
- `stats` — XP, level, streak, rank, loot
- `quests` — today's quest list with XP rewards
- `pomodoro` — timer state, sessions
- `currentMood` + `journalEntries`
- `bossHP` — weekly boss battle state

---

## 🔌 Adding Claude AI (Mood Analysis)

In `JournalPage.tsx`, replace the simulated analysis with:

```ts
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 300,
    messages: [{
      role: 'user',
      content: `Analyse this student's journal entry and detect their mood state.
      Return JSON: { mood: 'focused'|'calm'|'stressed'|'burnout', insight: string }
      Entry: "${journalText}"`
    }]
  })
})
```

---

## 🗺 Roadmap

- [ ] Firestore sync for cross-device persistence
- [ ] Push notifications for streak reminders
- [ ] Multiplayer boss battles
- [ ] AI-generated quiz questions per chapter
- [ ] Spaced repetition flashcard engine
- [ ] Mobile app (React Native / Expo)
- [ ] Leaderboard with friends

---

## 📄 License

MIT — Built with 🔥 for India's toppers.
