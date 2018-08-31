<template>
  <v-app>
    <v-toolbar
      app
      extension-height="18"
    >
      <v-spacer />
      <v-toolbar-title class="ml-0">
        <img src="~/assets/icon.svg">
        <span>addy</span>
      </v-toolbar-title>
      <v-spacer />
      <calendar-header slot="extension" />
    </v-toolbar>
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
import CalendarHeader from '~/components/CalendarHeader'

export default {
  components: {
    CalendarHeader
  }
}
</script>

<style>
html, body, #__nuxt, #__layout, #app, main, .v-content__wrap>div, .swiper-container {
  height: 100%;
}
</style>

<style scoped>
.application >>> .application--wrap {
  min-height: unset;
}
.v-toolbar__title {
  font-family: 'Trebuchet MS', 'Roboto', sans-serif !important;
}
img {
  height: 20px;
}
.v-toolbar >>> .v-toolbar__extension {
  padding: 0;
}
.calendar-header {
  margin: auto;
}
</style>
