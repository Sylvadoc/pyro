<template>
  <div>
      <h1>Page Index Home</h1>
      <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import { Modules, HubGetters } from '~/store'

export default defineComponent({
    computed: {
        ...mapGetters(Modules.HUB, [HubGetters.GET_TEXT])
    },
})
</script>

<route lang="yaml">
meta:
  layout: home
</route>
