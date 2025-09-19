# Hire This Hero

An interactive, RPG-themed online curriculum vitae (CV) that transforms your professional profile into a D&D-style character sheet. Built with React, TypeScript, and Tailwind CSS, this project gamifies career achievements, skills, and experiences using classic RPG metaphors, constructed as one would for a RPG character.

## 📋 Current Status

> ⚠️ **This is an ongoing project** - not yet deployed or fully tested

## Setup

### Prerequisites

- Node.js (this project was built using Node.js v24)
  - some of the packages like Vite will require a specific Node version to work properly.
- pnpm (recommended)
  - `npm` or `yarn` should without issues, make to delete `pnpm-workspace.yaml` and `pnpm-lock.yaml` if you decide to not go with `pnpm`

### Installation

1. Clone the repository:

```bash
git clone https://github.com/joao-mbn/hire-this-hero
cd hire-this-hero
```

2. Install dependencies:

```bash
pnpm i
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/             # React components
│   ├── base/               # Reusable UI components
│   ├── header/             # Character header components
│   ├── statsTabs/          # Main content sections
│   └── CharacterSheet.tsx  # Main character sheet component
├── contexts/               # React context providers
├── data/                   # Character data and types
│   ├── character.json      # Main character data file
│   └── types.ts            # TypeScript type definitions
├── hooks/                  # Custom React hooks
└── lib/                    # Utility functions
```

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Package Manager**: pnpm
- **Code Quality**: ESLint, Prettier
