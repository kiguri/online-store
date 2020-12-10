const colors = require('tailwindcss/colors');
module.exports = {
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            minHeight: {
                '8/10': '80vh',
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000',
            white: '#fff',
            teal: colors.teal,
            green: colors.green,
            gray: colors.coolGray,
            yellow: colors.amber,
            red: colors.red,
            blue: colors.blue,
            pink: colors.pink,
            indigo: colors.indigo,
        },
    },
    variants: {
        extend: {
            backgroundColor: ['disabled'],
            pointerEvents: ['disabled'],
            textColor: ['disabled'],
        },
    },
    plugins: [],
};
