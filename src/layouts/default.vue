<template>
  <v-app>
    <v-toolbar
      app
      extension-height="18"
    >
      <v-spacer />
      <v-toolbar-title class="ml-0">
        <app-icon
          :color="color"
          size="20"
        />
        <span>addy</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        href="https://github.com/fiahfy/paddy"
      >
        <img src="~/assets/github-mark.svg">
      </v-btn>
      <calendar-header slot="extension" />
    </v-toolbar>
    <v-content class="fill-height">
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import AppIcon from '~/components/AppIcon'
import CalendarHeader from '~/components/CalendarHeader'
import * as Category from '~/utils/category'

export default {
  components: {
    AppIcon,
    CalendarHeader
  },
  computed: {
    color () {
      return Category.getColor(this.category)
    },
    ...mapState([
      'category'
    ])
  }
}
</script>

<style>
html {
  position: fixed;
  width: 100%;
}
html, body, #__nuxt, #__layout, #app {
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
  height: 24px;
}
.v-toolbar >>> .v-toolbar__extension {
  padding: 0;
}
.calendar-header {
  margin: auto;
}
</style>
