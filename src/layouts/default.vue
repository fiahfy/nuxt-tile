<template>
  <v-app>
    <v-toolbar app>
      <v-spacer />
      <img
        src="~/assets/icon.svg"
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

<style>
html, body, #__nuxt, #__layout, #app, main, .v-content__wrap>div, .swiper-container {
  height: 100%;
}
</style>

<style scoped>
img {
  height: 25px;
}
.headline {
  font-family: 'Trebuchet MS', 'Roboto', sans-serif !important;
}
.application >>> .application--wrap {
  min-height: unset;
}
</style>
