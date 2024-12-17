/** @type {import('tailwindcss').Config} */
module.exports = {
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
                    DEFAULT: '#3d5f8a',
                    dark: '#3d5f8a',
                    light: '#CAF0F8',
                    accent: '#CAF0F8',
                    code: '#4de77a',
                    codebg: '#3f3f3f',
                },
            },
        },
    },
    plugins: [],
};


