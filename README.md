# Animated Theme Toggle

An animated theme toggle component built using Next.js, Tailwind CSS, Framer Motion, and Lucide Icons. This component uses local storage to remember the user’s theme preference and provides a smooth animation transition between light and dark modes.

# Features

	•	Animated Transitions: Smooth transitions between light and dark themes using Framer Motion.
	•	Persistent Theme: Theme preference is saved using local storage, ensuring the user’s preference is remembered across sessions.
	•	Responsive Design: Fully responsive and works across all devices, thanks to Tailwind CSS.
	•	Customizable: Easy to customize to fit the design needs of any project.
	•	Accessible: Designed with accessibility in mind, ensuring it is usable by everyone.

# Preview 

https://github.com/user-attachments/assets/db5a32a9-f8e3-4d41-a72e-65cffdfe4658

# Installation

Prerequisites:
Ensure you have the following installed:

	•	Node.js (version 12 or later)
	•	Next.js project setup

Step 1: Install Dependencies

  Run the following command to install the required dependencies:
  
  `npm install framer-motion lucide-react tailwindcss`

Step 2: Configure Tailwind CSS

  1.	Install Tailwind CSS:
  If you haven’t already set up Tailwind CSS in your Next.js project, follow these steps:

  `npm install -D tailwindcss postcss autoprefixer`
  `npx tailwindcss init -p`
  
  2.	Update tailwind.config.js:
  Enable dark mode by adding the darkMode option. This tells Tailwind to look for the dark class on the <html> or <body> element.

  `module.exports = {
    darkMode: 'class', // Enable class-based dark mode
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`
  
  3.	Add Tailwind Directives to CSS:
  In your global CSS file (e.g., styles/globals.css), add the Tailwind directives:

  `@tailwind base;`
  `@tailwind components;`
  `@tailwind utilities;`

Step 3: Using the Theme Toggle Component

  1.	Import the Component:
  Import the DarkToggle component into your Next.js project.

  `import DarkToggle from './components/DarkToggle';`

  2.	Add the Component to Your Layout:
  Use the DarkToggle component in your main layout or specific pages.

  export default function MyApp() {
      return (
          <div className="container">
              <header className="flex justify-between items-center py-4">
                  <h1 className="text-2xl font-bold">My App</h1>
                  <DarkToggle />
              </header>
              {/* Rest of your app */}
          </div>
      );`
  }
