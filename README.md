# Laravel + InertiaJS + VueJS Worksspace

## Framework

-   https://laravel.com/docs/9.x

-   https://vuejs.org/
-   https://tailwindcss.com
-   https://tailwind-elements.com/

## Tools:

-   https://inertiajs.com/
-   https://freefrontend.com/tailwind-code-examples/
-   https://freefrontend.com/vue-code-examples/
-   https://fonts.google.com/
-   https://icons.getbootstrap.com/

## Clone and Install

1. composer install

2. copy .env.example to .env

3. php artisan key:generate

4. npm install

5. run 2 terminal

    ```
    Terminal 1:
        npm run dev

    Terminal 2:
        php artisan serve

    ```

<hr>

## SPA Guide

Jika pakai SPA pindah laman bisa pakai tag `<Link>` dari Inertia

```vue
<template>
    <Link href="/about">to About</Link>
</template>

<script>
import { Head, Link } from "@inertiajs/vue3";
</script>
```

<hr>

## Komponen Life Cycle di SPA

Setiap komponen dari "Tailwind Elements" yang memiliki interaksi seperti

-   Modal
-   Dropdown
-   Carousel
-   Collapse
-   dll

atur lifecycle Elementnya pada file `resources/js/twelemets.js`

```js
import { Collapse, Dropdown } from "tw-elements";

function mountEl() {
    initTE({
        Collapse,
        Dropdown,
    });
}
```
