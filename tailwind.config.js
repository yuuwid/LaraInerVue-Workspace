const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/pages/**/*.vue",
        "./resources/js/**/*.vue",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],

    theme: {
        extend: {
            colors: {
                "yuuwid-purple": "#472183",
                "yuuwid-blue": "#4B56D2",
                "yuuwid-sky": "#82C3EC",
                "yuuwid-white": "#F1F6F5",
                "yuuwid-black": "#202020",
            },
            fontFamily: {
                nunito: ["Nunito"],
                oxygen: ["Oxygen"],
                prompt: ["Prompt"],
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require("@tailwindcss/forms"), require("tw-elements/dist/plugin.cjs")],
};
