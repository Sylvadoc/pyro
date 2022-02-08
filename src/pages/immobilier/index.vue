<template>
    <h1>Homepage page hub</h1>
    <ul>
        <li>
            <a href="https://immobilier.lefigaro.fr">Immobilier Figaro</a>
        </li>
        <li>
            <router-link to="/">Home page</router-link>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HubPage'
})
</script>

<style lang="scss">
@import '../../styles/02-layouts/page-hub';
</style>

<route lang="yaml">
meta:
    layout: hub
</route>
