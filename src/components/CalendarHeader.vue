<template>
  <v-container
    class="calendar-header px-1 py-0"
    grid-list-xs
    text-xs-center
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="(weekday, index) in weekdays"
        :key="index"
        :class="classes"
        class="caption"
      >{{ weekday }}</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import * as Category from '~/utils/category'

export default {
  data () {
    const weekdays = (new Array(7)).fill(1).map((value, index) => {
      const d = new Date()
      d.setDate(d.getDate() + index - d.getDay())
      return d.toLocaleString('en-US', { weekday: 'narrow' })
    })
    return {
      weekdays
    }
  },
  computed: {
    classes () {
      const color = Category.getColor(this.category)
      return `${color}--text text--darken-4`
    },
    ...mapState([
      'category'
    ])
  }
}
</script>

<style scoped>
.calendar-header {
  box-sizing: border-box;
}
.flex {
  flex-basis: calc(100% / 7);
  max-width: calc(100% / 7);
}
</style>
