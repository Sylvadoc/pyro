<template>
    <div>
        <h1>Homepage immobilier.lefigaro.fr</h1>
        <p>{{ text }}</p>
        <ul>
            <li>
                <router-link to="/immobilier">Home page hub</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import { Modules, HubGetters } from '~/store'

export default defineComponent({
    computed: {
        ...mapGetters(Modules.HUB, [HubGetters.GET_TEXT])
    }
})
</script>

<route lang="yaml">
meta:
    layout: default
</route>
