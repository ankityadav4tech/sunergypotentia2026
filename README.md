# Sunergy Website

A modern, responsive React-based website for **Sunergy**, built with Vite and designed to showcase the company's capabilities, credibility, and business models in the energy sector.

## 🚀 Features

- **Modern Architecture**: Built with [React 19](https://react.dev/) and [Vite](https://vitejs.dev/) for lightning-fast performance.
- **Dynamic Animations**: Utilizes [GSAP](https://gsap.com/) for smooth, engaging visual effects.
- **Iconography**: Integrated with [Lucide React](https://lucide.dev/) for clean and consistent icons.
- **Responsive Design**: Fully responsive layout optimized for all devices.
- **Production Ready**: Configured for seamless deployment on Netlify.

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (modular design)
- **Animations**: GSAP (GreenSock Animation Platform)
- **Deployment**: Netlify

## 📁 Project Structure

```bash
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components
│   ├── layout/      # Layout components (Header, Footer)
│   ├── sections/    # Page sections (Hero, Capabilities, etc.)
│   └── ui/          # Generic UI elements (Buttons, Cards)
├── hooks/           # Custom React hooks
├── styles/          # Global styles and CSS variables
└── App.jsx          # Main application component
```

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd sunergy-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

## 📦 Building for Production

To build the project for production, run:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

To locally preview the production build:

```bash
npm run preview
```

## ☁️ Deployment

This project is configured for **Netlify**.

- `netlify.toml` included for automatic build configuration and redirect handling.
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

## 🤝 Contributing

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'Add some amazing feature'`).
4.  Push to the branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.

## 📄 License

[MIT](LICENSE)
