<template>
  <v-app>
    <v-toolbar app>
      <v-spacer />
      <img
        src="/icon.svg"
        class="mb-2"
      >
      <span class="headline">addy</span>
      <v-spacer />
    </v-toolbar>
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
import AppIcon from '~/components/AppIcon'

export default {
  components: {
    AppIcon
  }
}
</script>

<style scoped>
img {
  height: 25px;
}
.headline {
  font-family: 'Trebuchet MS', 'Roboto', sans-serif !important;
}
</style>
