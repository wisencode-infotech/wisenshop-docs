/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Enable class-based dark mode
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
        "./resources/**/*.css",
        './node_modules/primereact/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                theme: {
                    DEFAULT: '#3d5f8a', // Default primary color (light mode)
                    dark: '#0E0D0E', // Dark mode primary color (darker shade of blue)
                    light: '#F5FDFD', // Light theme accent color (soft light blue)
                    accent: '#F1F8FF', // Light theme accent background (pale light blue)
                    code: '#4de77a', // Code highlighting color (green)
                    codebg: '#3f3f3f', // Code background (dark gray)
                    lightBackground: '#dededed', // Light mode background color (white)
                    lightText: '#333333', // Light mode text color (dark gray)
                    lightBorder: '#e0e0e0', // Light mode border color (light gray)
                    darkBackground: '#121212', // Dark mode background color (blackish)
                    darkText: '#ffffff', // Dark mode text color (light gray)
                    darkBorder: '#444444', // Dark mode border color (darker gray)
                },
            },
        },
    },
    plugins: [],
};