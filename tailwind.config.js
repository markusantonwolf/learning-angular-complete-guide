module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        container: {
            center: true,
        },
        fontFamiliy: {
            sans: ["Raleway", "ui-sans-serif", "system-ui", "sans-serif"],
        },
        extend: {},
    },
    variants: {
        lineClamp: ["responsive", "hover"],
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
