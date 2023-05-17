# Laravel + InertiaJS + VueJS Workspace

## Framework

-   https://laravel.com/docs/9.x

-   https://vuejs.org/
-   https://tailwindcss.com
-   https://flowbite.com/

<hr/>

## Tools:

-   https://inertiajs.com/
-   https://freefrontend.com/tailwind-code-examples/
-   https://freefrontend.com/vue-code-examples/
-   https://fonts.google.com/
-   https://icons.getbootstrap.com/

<hr/>

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

6. Open Web Browser with http://127.0.0.1:8000

<hr>

## Template

<br>

```js
<template>
    <Head title="Example"></Head>
</template>

<script>
import { Head, Link } from "@inertiajs/vue3";

export default {
    props: {},
    computed: {},
    components: {
        Head,
        Link,
    },
    data() {
        return {};
    },
    mounted: () => {},
};
</script>

<style>
</style>
```

<hr>

## SPA Guide

Jika pakai SPA pindah laman bisa pakai tag `<Link>` dari Inertia

```js
<template>
    <Link href="/about">to About</Link>
</template>

<script>
import { Head, Link } from "@inertiajs/vue3";
</script>
```

<hr>

## Komponen Life Cycle di SPA

Setiap komponen dari "Flowbite" yang memiliki interaksi seperti

-   Modal
-   Dropdown
-   Carousel
-   Collapse
-   dll

atur (hook) lifecycle Elementnya pada setiap File Component Vue yang memanggilnya

```js
<template>
    // Misal terdapat Modal
</template>

<script>
import { Head, Link } from "@inertiajs/vue3";
import { initFlowbite } from "flowbite"; // add this

export default {
    props: {},
    computed: {},
    components: {
        Head,
        Link,
    },
    data() {
        return {};
    },
    mounted: () => {
        initFlowbite() // add this
    },
};
</script>

<style></style>
```

<hr>

## Pagination Laravel in Vue

Untuk menggunakan Pagination Laravel pada VUE dapat menggunakan Customize Pagination yang telah disediakan pada
<br>

`resources\components\paginate\LaraVuePagianate.vue`
<br>

atau dapat dipanggil dengan cara
<br>

`@components/paginate/LaraVuePagianate.vue`

<br>

```js
<template>
    <div>
        <p v-for="user in users.data" :key="user.id_user">
            {{ user.id_user }}
        </p>
    </div>

    <LaraVuePagianate :data="users" />
</template>

<script>
import LaraVuePagianate from "@components/paginate/LaraVuePagianate.vue";

export default {
    props: {
        users: {
            type: Object,
            default: {},
        },
    },
    computed: {},
    components: {
        LaraVuePagianate,
    },
    data() {
        return {};
    },
    mounted: () => {},
};
</script>

<style>
</style>
```

<hr>

## Flash Message & Flash Error Message Laravel in Vue

Untuk memakai / mengembalikan sebuah feedback dari Laravel ke Vue dapat menggunakan sharing property.

Sharing Property yang dapat dipakai adalah

-   flash
-   flash_err

Contoh:

```php
return redirect()->back()->with('flash_err', 'Email or Password Invalid !');
```

untuk menangkapnya di Vue dapat menggunakan

```html
<div class="ml-3 text-sm font-medium">
    {{ $page.props.flash_err.flash_err }}
</div>
```

<hr>

## Passing Form Request Without CSRF Laravel

Untuk mengirim sebuah request dari Button Submit pada Form dapat menggunakan bantuan dari Form InertiaJS yang sudah include dengan sistem CSRF.

```js
<script>
...
import { useForm } from "@inertiajs/vue3"; // add this

export default {
    props: {},
    computed: {},
    components: {
        ...
    },
    data() {
        return {
            // add there
            form: useForm({
                email: null,
                password: null,
            }),
        };
    },
    mounted: () => {},
};
</scipt>
```

Sedangkan untuk mengisi atribut dari Form dapat menggunakan V-Model dari Vue.

```html
<input
    class="..."
    type="text"
    placeholder="Email"
    required
    v-model="form.email"
/>
```

Dan untuk action dari Form nya dapat diisi seperti berikut

-   form.post(...)
-   form.get(...)

```html
<form @submit.prevent="form.post('... url route laravel ...')">
    ...
</form>
```
