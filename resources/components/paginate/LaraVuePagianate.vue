<template>
    <nav class="" aria-label="Page navigation example">
        <ul class="inline-flex items-center -space-x-px">
            <!-- BUTTON PREV -->
            <li>
                <Link
                    :href="`${urls.prev_page_url ? urls.prev_page_url : '#'}`"
                    class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                    :class="`${urls.prev_page_url == null ? 'disabled' : ''}`"
                >
                    <span class="sr-only">Previous</span>
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </Link>
            </li>

            <li class="">
                <div
                    class="block px-3 py-2 leading-tight border text-gray-500 bg-white border-gray-300 text-sm"
                >
                    {{ currentPage }} / {{ lastPage }}
                    <span class="text-xs">page</span>
                </div>
            </li>

            <!-- BUTTON NEXT -->
            <li>
                <Link
                    :href="`${urls.next_page_url ? urls.next_page_url : '#'}`"
                    class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                    :class="`${urls.next_page_url == null ? 'disabled' : ''}`"
                >
                    <span class="sr-only">Next</span>
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </Link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { Link } from "@inertiajs/vue3";

export default {
    props: {
        data: {
            type: Object,
            default: {},
        },
    },
    computed: {},
    components: {
        Link,
    },
    data() {
        return {
            currentPage: this.data["current_page"],
            lastPage: this.data["last_page"],
            urls: {
                next_page_url: this.data["next_page_url"],
                prev_page_url: this.data["prev_page_url"],
            },
            links: this.data["links"].slice(1, -1),
        };
    },
    mounted: () => {},
};
</script>

<style>
.disabled {
    @apply bg-gray-200;
    pointer-events: none;
    cursor: default;
}
</style>

