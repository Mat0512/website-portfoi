/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            blue: "#05D9E8",
            orchid: "#C252E1",
            white: "#fff",
            black: "#10101A",
        },
        fontFamily: {
            sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            transitionProperty: {
                width: "width",
                mainButton: "width, border, background",
            },
            dropShadow: {
                blue: "0 0 4px rgba(5, 217, 232, 1)",
                orchid: "0 0 4px rgba(194, 82, 225, 1)",
                white: "0 0 4px rgba(255, 255, 255, .5)",
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".scrollbar-hide": {
                    /* IE and Edge */
                    "-ms-overflow-style": "none",

                    /* Firefox */
                    "scrollbar-width": "none",

                    /* Safari and Chrome */
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
            });
        }),
    ],
};
