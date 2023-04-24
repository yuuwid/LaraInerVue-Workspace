<template>
    <Head title="Home"></Head>

    <h1>Home</h1>

    <Link href="/about">to About</Link>
</template>

<script setup>
import { onMounted } from "vue";
import { Head, Link } from "@inertiajs/vue3";

onMounted(() => {});

defineProps({});
</script>

<style>
</style>
