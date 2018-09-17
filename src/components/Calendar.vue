<template>
  <v-container
    class="calendar pa-1"
    fluid
    grid-list-xs
    text-xs-center
  >
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <h2
          :class="classes"
          class="caption font-weight-black mt-3 mb-1"
        >{{ caption }}</h2>
      </v-flex>
      <v-flex
        v-for="month in months"
        :key="month"
        xs4
      >
        <calendar-month
          :category-id="categoryId"
          :year="year"
          :month="month"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import CalendarMonth from '~/components/CalendarMonth'

export default {
  components: {
    CalendarMonth
  },
  props: {
    categoryId: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  },
  computed: {
    caption () {
      const date = new Date(this.year, 0)
      return date.toLocaleString('en-US', { year: 'numeric' })
    },
    classes () {
      const color = this.getCategory({ id: this.categoryId }).color
      return `${color}--text text--darken-4`
    },
    months () {
      return [...Array(12).keys()].map((i) => i + 1)
    },
    ...mapGetters([
      'getCategory'
    ])
  }
}
</script>

<style scoped>
.calendar {
  box-sizing: border-box;
}
.calendar >>> .calendar-day {
  padding: 0!important;
}
</style>
