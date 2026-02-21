# Password Generator 🔐

**Password Generator** is a high-performance, responsive password generator built with React and Tailwind CSS. It allows users to create cryptographically-inspired random passwords with customizable lengths and character sets including numbers and special symbols.

---

## ✨ Features

* **Real-time Generation:** Passwords update instantly as you toggle settings or adjust the length.
* **Customizable Complexity:** * Adjust length from 6 to 50 characters.
    * Toggle numerical digits.
    * Toggle special characters.
* **One-Click Copy:** Integrated Clipboard API with visual "Success" feedback.
* **Premium UI:** A modern, dark-mode interface featuring glassmorphism effects and high-contrast typography.
* **Mobile Responsive:** Fully optimized for desktop, tablet, and smartphone screens.

## 🚀 Tech Stack

* **Framework:** [React.js](https://reactjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Hooks:** `useState`, `useEffect`, `useCallback`, `useRef`
* **Typography:** System Monospace for secure character readability.

## 🛠️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/Password Generator.git](https://github.com/your-username/Password Generator.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Password Generator
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

## 📖 How It Works

The core logic utilizes the `useCallback` hook to memoize the generation function, ensuring the application remains performant even with frequent state changes. 

The password is generated using a character-pool strategy:
1. A base string of alphabets is initialized.
2. If "Numbers" or "Special Characters" are checked, they are appended to the pool.
3. A `for` loop picks random indices based on the selected `length`.

## 🎨 Design System

* **Primary Background:** `Slate-950` (Deep Navy)
* **Accent Color:** `Indigo-600`
* **Success State:** `Emerald-500` (for copy confirmation)
* **Password Font:** `Font-Mono` to ensure characters like `0` vs `O` and `l` vs `1` are easily distinguishable.

---

**Would you like me to add a "Deployment" section with instructions for platforms like Vercel or Netlify?**