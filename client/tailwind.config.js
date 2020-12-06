module.exports = {
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            minHeight: {
                '80vh': '80vh',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            pointerEvents: ['disabled'],
        },
    },
    plugins: [],
};
