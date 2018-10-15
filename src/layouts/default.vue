<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-toolbar
        color="transparent"
        flat
      >
        <v-toolbar-title>
          <app-icon
            color="light-green"
            size="20"
          /><!--
          --><span>addy</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-divider />
      <v-list dense>
        <v-subheader class="grey--text text--darken-1">CATEGORIES</v-subheader>
        <v-list dense>
          <v-list-tile
            v-for="category in categories"
            :key="category.id"
            :class="getClasses(category)"
            @click="(e) => onListTileClick(e, category)"
          >
            <v-list-tile-action>
              <app-icon
                :color="category.color"
                size="20"
              />
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="category.name" />
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider />
        <v-list dense>
          <v-list-tile href="https://github.com/fiahfy/paddy">
            <v-list-tile-action>
              <img
                src="~/assets/github-mark.svg"
                height="24"
                width="24"
              >
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>GitHub</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      extension-height="18"
    >
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn
        class="today"
        icon
        @click="onIconClick"
      >
        {{ today }}
        <v-icon>calendar_today</v-icon>
      </v-btn>
      <calendar-header slot="extension" />
    </v-toolbar>

    <v-content class="fill-height">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import AppIcon from '~/components/AppIcon'
import CalendarHeader from '~/components/CalendarHeader'

export default {
  components: {
    AppIcon,
    CalendarHeader
  },
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    title() {
      const date = new Date(this.month)
      return date.toLocaleString('en-US', { month: 'long', year: 'numeric' })
    },
    today() {
      return new Date(this.now).getDate()
    },
    ...mapState(['categories', 'now']),
    ...mapGetters(['category', 'month'])
  },
  methods: {
    getClasses(category) {
      return {
        'primary--text': category.id === this.category.id
      }
    },
    onListTileClick(e, category) {
      this.setCategoryId({ categoryId: category.id })
    },
    onIconClick() {
      const timestamp = this.now
      this.setTimestamp({ timestamp })
    },
    ...mapMutations(['setCategoryId', 'setTimestamp'])
  }
}
</script>

<style>
html {
  position: fixed;
  width: 100%;
}
html,
body,
#__nuxt,
#__layout,
#app {
  height: 100%;
}
</style>

<style scoped>
.application >>> .application--wrap {
  min-height: unset;
}
.v-navigation-drawer .v-toolbar__title {
  font-family: 'Trebuchet MS', 'Roboto', sans-serif !important;
}
.today.v-btn >>> .v-btn__content {
  font-size: 10px;
  margin-top: 4px;
}
.today .v-icon {
  position: absolute;
  left: 0;
  right: 0;
  top: -7px;
}
.v-toolbar >>> .v-toolbar__extension {
  padding: 0;
}
.calendar-header {
  margin: auto;
}
</style>
