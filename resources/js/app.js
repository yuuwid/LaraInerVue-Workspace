import "./bootstrap";
import "../css/app.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import mountEl from "./twelements";

const appName = window.document.getElementsByTagName("title")[0]?.innerText;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `../pages/${name}.vue`,
            import.meta.glob("../pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        const app = createApp({
            render: () => h(App, props),
            // Fix Bug in SPA (Single Page Application)
            mounted: () => {
                mountEl();
            },
        });

        app.use(plugin).use(ZiggyVue, Ziggy);

        return app.mount(el);
    },
    progress: {
        color: "#4B56D2",
    },
});
