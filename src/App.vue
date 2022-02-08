<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { DEFAULT_HEAD_META_DESCRIPTION, DEFAULT_HEAD_META_TITLE } from '~/constants/meta-constants'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
    title: DEFAULT_HEAD_META_TITLE,
    meta: [
        { name: 'description', content: DEFAULT_HEAD_META_DESCRIPTION },
        { property: 'og:title', content: DEFAULT_HEAD_META_TITLE }
    ],
    link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous'},
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
        { rel: 'preconnect', href: 'https://lh3.googleusercontent.com', crossorigin: 'anonymous'},
        { rel: 'preconnect', href: 'https://immo-cdn.immo.fcms.io', crossorigin: 'anonymous'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap'}
    ]
})
</script>

<template>
    <router-view />
</template>
