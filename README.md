# Shiritori Game

A simple **multiplayer Shiritori game** built with **React**, **Tailwind CSS**, **ESLint**, and **Prettier**.  
Two players can play from the same screen, taking turns to enter valid English words.

---

## Features

- Turn-based gameplay for 2 players
- Word validation rules:
  - Minimum 4 letters
  - Cannot repeat words
  - Must start with the last letter of previous word
- Dictionary API validation for English words
- Score tracking
- Countdown timer (15 seconds per turn)
- Word history display with last word highlighted per player
- Responsive design

---

## Screenshots

_Add screenshots here if desired._

---

## Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <repo-folder>
```

2. Install dependencies using **pnpm**:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open in browser:

```
http://localhost:5173
```

---

## Build for Production

```bash
pnpm build
```

The production-ready files will be in the `dist/` folder.

---

## Deployment (Vercel)

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Connect your GitHub repository.
4. Vercel will automatically detect your project and use:
   - **Framework Preset:** Other / React (Vite)
   - **Build Command:** `pnpm build`
   - **Output Directory:** `dist`
5. Click Deploy. Your Shiritori game will be live!

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is MIT licensed.
