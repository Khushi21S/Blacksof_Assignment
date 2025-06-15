# Supreme Group Website

A modern, responsive website for **Supreme Group**, featuring an interactive slideshow experience highlighting 360-degree nonwoven solutions for the automotive sector.

---

## 📆 Project Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repo-url>
   cd supreme-group
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

4. **Build for Production**

   ```bash
   npm run build
   npm start
   ```

---

## 🗂 Component Architecture Overview

```
/components
  ├── SlideShow
  │     ├── AssetSelector.jsx       # Displays asset thumbnails
  │     ├── ProgressBar.jsx         # Visual progress indicator for slides
  │     ├── Slide.jsx               # Renders each individual slide
  │     ├── SlideData.jsx           # Slide content (videos, text, assets)
  │     └── SlideSection.jsx        # Main slideshow controller
  ├── ContactForm.jsx               # Contact us form
  ├── Footer.jsx                    # Page footer
  ├── HeroSection.jsx               # Landing hero section
  └── Navbar.jsx                    # Sticky top navigation bar
```

---

## 📱 Responsive Design Strategy

* **Framework**: Tailwind CSS
* **Breakpoints**: Utilized `sm`, `md`, `lg`, and `xl` utilities for responsive layout.
* **Mobile First**: Components are designed mobile-first, progressively enhancing layouts for larger screens.
* **Navigation**: Fixed `Navbar` ensures quick access on all devices.

---

## ⚡ Performance Optimization Techniques

* **Lazy Loading**: Images/videos lazy loaded using Next.js `<Image />` and `<video>` where applicable.
* **Code Splitting**: Achieved by Next.js page/component-based routing.
* **Autoplay Optimization**: Controlled with manual play to prevent resource wastage.
* **Asset Optimization**: Used compressed images & videos to reduce load time.
* **Animation**: Leveraged **Framer Motion** for performant React animations.

---

## ♿ Accessibility Considerations

* **Alt Text**: All images and icons include descriptive `alt` attributes.
* **Keyboard Navigation**: Buttons and interactive elements support keyboard focus.
* **Readable Typography**: High contrast text; appropriate sizing for readability.
* **ARIA Roles/Labels**: Can be enhanced in future iterations for better screen reader support.

---

## 📚 Third-Party Libraries Used

| Library           | Purpose                                   |
| ----------------- | ----------------------------------------- |
| **Next.js**       | React framework for server-side rendering |
| **Tailwind CSS**  | Utility-first CSS framework for styling   |
| **Framer Motion** | Smooth animations and transitions         |

---

## 📝 Assumptions & Decisions

* **Autoplay Behavior**: Starts only when user clicks play → prevents annoying auto-navigation.
* **Slide Reset**: After completing all slides → resets back to first slide.
* **Video Format**: Assumed MP4s are web-optimized.
* **Language Toggle**: Currently placeholder → further development planned.

---

## 🛧 Challenges & Solutions

| Challenge                                         | Solution                                                    |
| ------------------------------------------------- | ----------------------------------------------------------- |
| Slide interaction conflicts (autoplay vs. manual) | Manual override stops autoplay for user control reliability |
| Animation Timing Clashes                          | Resolved with Framer Motion’s transition easing             |
| Asset navigation update delays                    | Fixed by refining index logic within `AssetSelector`        |

---

## ✨ Suggested Upcoming Features

* 🌍 **Language Selector** implementation with i18n support.
* 🖼 **Optimized Video Streaming** (HLS or adaptive formats for better mobile support).
* 📝 **Contact Form Validation & Backend Integration**.
* 🎨 **Theming** support for light/dark modes.

---

## ⚙ Tech Choices Justification

| Tech                 | Choice & Reason                                                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js**          | File-based routing, optimized image/video handling, SSR/SSG                                                                                                           |
| **Tailwind CSS**     | Rapid prototyping, responsive utilities, maintainability                                                                                                              |
| **Vite**             | ❗ **Not used** because Next.js uses **Webpack** internally by default. Migrating to Vite for Next.js is experimental and unnecessary for current project scope.       |
| **State Management** | **Not required** for this scale. Local state (`useState`) sufficient for slideshow/interaction. If scaling up → **Zustand** recommended for lightweight global state. |

---

## 💭 Additional Remarks

* ⚠ **Testing** phase pending: Automated testing setup (Jest/React Testing Library) recommended.
* 🚀 **Deployment**: Currently hosted on **Vercel** (Next.js’ preferred platform).
* 🌟 Focus was on delivering functionality matching provided design reference and interaction.

---

> Built with ❤️ using **Next.js**, **Tailwind CSS**, and **Framer Motion**.
