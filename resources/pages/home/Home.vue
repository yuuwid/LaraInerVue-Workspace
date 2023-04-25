<template>
    <Head title="Home"></Head>


    <h1 class="text-2xl">HOME</h1>

    <Link href="/about">to About</Link>
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
