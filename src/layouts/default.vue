<template>
  <v-app>
    <v-toolbar app>
      <v-spacer />
      <h1>
        <img src="~/assets/icon.svg">
        <span class="headline">addy</span>
      </h1>
      <v-spacer />
    </v-toolbar>
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

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
