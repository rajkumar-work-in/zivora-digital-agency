<div align="center">

# Zivora Digital Agency

**Where ideas become digital experiences.**

A modern, fast and fully responsive agency website built with React, Tailwind CSS and Framer Motion.

[Live Demo](https://your-live-url.com) · [Report a Bug](https://github.com/rajkumar-work-in/zivora/issues) · [Request a Feature](https://github.com/rajkumar-work-in/zivora/issues)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Web3Forms](https://img.shields.io/badge/Web3Forms-000000?style=for-the-badge&logo=maildotru&logoColor=white)

</div>

---

## Table of Contents

- [About the Project](#about-the-project)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Contact Form Setup](#contact-form-setup)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Author](#author)

---

## About the Project

**Zivora Digital Agency** is a single-page marketing website that presents the agency's services, work and brand to potential clients. It is designed to load fast, look sharp on every screen size, and make it easy for visitors to get in touch.

**Goals of the project**

- Present the agency with a clean, premium and professional look
- Add smooth, purposeful animations without hurting performance
- Turn visitors into leads through a simple, reliable contact form
- Keep the codebase modular, readable and easy to extend

---

## Screenshots

> Replace these placeholders with real screenshots. Create a `screenshots/` folder and add your images.

| Home | Services |
| :---: | :---: |
| ![Home](screenshots/home.png) | ![Services](screenshots/services.png) |

| Portfolio | Contact |
| :---: | :---: |
| ![Portfolio](screenshots/portfolio.png) | ![Contact](screenshots/contact.png) |

---

## Features

- **Responsive design:** mobile-first layout that works from small phones to large desktops
- **Smooth animations:** scroll reveals, hover effects and page transitions powered by Framer Motion
- **Modern UI:** consistent spacing, typography and colour system built with Tailwind CSS
- **Working contact form:** submissions are delivered straight to your inbox with Web3Forms, no backend needed
- **Form validation:** required fields and clear success and error feedback
- **Reusable components:** sections and UI elements are split into small, maintainable components
- **SEO friendly:** semantic HTML, meta tags and descriptive page title
- **Fast performance:** lightweight build with optimized assets

---

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | [React](https://react.dev/) |
| Language | JavaScript (ES6+) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Forms | [Web3Forms](https://web3forms.com/) |
| Tooling | Vite, npm, Git, GitHub |

---

## Project Structure

```bash
zivora/
├── public/                 # Static assets (favicon, images)
├── screenshots/            # README screenshots
├── src/
│   ├── assets/             # Images, icons, fonts
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind directives and global styles
├── .env.example            # Example environment variables
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

> Update the file names above to match your actual folders and components.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)
- A free [Web3Forms](https://web3forms.com/) access key

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rajkumar-work-in/zivora.git
   cd zivora
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Then open `.env` and add your Web3Forms access key (see below).

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

> Never commit your `.env` file. Make sure it is listed in `.gitignore`.

---

## Contact Form Setup

The contact form uses **Web3Forms**, so no server is required.

1. Go to [web3forms.com](https://web3forms.com/) and enter your email address.
2. Copy the access key sent to your inbox.
3. Paste it into your `.env` file as `VITE_WEB3FORMS_ACCESS_KEY`.
4. Submit the form on your site. The message will arrive in your inbox.

**Example submission**

```javascript
const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  body: JSON.stringify({
    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
    name,
    email,
    message,
  }),
});
```

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

---

## Deployment

The site is a static build and can be hosted for free on:

- **[Vercel](https://vercel.com/):** import the repo, add `VITE_WEB3FORMS_ACCESS_KEY` in project settings, deploy
- **[Netlify](https://www.netlify.com/):** build command `npm run build`, publish directory `dist`
- **GitHub Pages:** build locally and publish the `dist` folder

Remember to add your environment variable on the hosting platform before deploying.

---

## Roadmap

- [x] Responsive layout
- [x] Framer Motion animations
- [x] Contact form with Web3Forms
- [ ] Dark / light theme toggle
- [ ] Blog or case studies section
- [ ] Testimonials slider
- [ ] Multi-language support
- [ ] Lighthouse score 95+ across all categories

---

## Contributing

Contributions, issues and feature requests are welcome.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## Author

**Rajkumar J**
Java Full Stack Developer

- GitHub: [@rajkumar-work-in](https://github.com/rajkumar-work-in)
- LinkedIn: [rajkumar-work-in](https://linkedin.com/in/rajkumar-work-in)

---

<div align="center">

If you like this project, please consider giving it a star.

**Built with care by Zivora Digital Agency**

</div>
