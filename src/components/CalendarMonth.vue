<template>
  <v-container
    class="calendar-month pa-1"
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
        v-for="i in offsetBegin"
        :key="`b${i}`"
      />
      <v-flex
        v-for="day in days"
        :key="day"
      >
        <calendar-day
          :category="category"
          :year="year"
          :month="month"
          :day="day"
        />
      </v-flex>
      <v-flex
        v-for="i in offsetEnd"
        :key="`e${i}`"
      />
    </v-layout>
  </v-container>
</template>

<script>
import CalendarDay from '~/components/CalendarDay'
import * as Theme from '~/utils/Theme'

export default {
  components: {
    CalendarDay
  },
  props: {
    category: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    month: {
      type: Number,
      required: true
    }
  },
  computed: {
    caption () {
      const date = new Date(this.year, this.month - 1)
      return date.toLocaleString('en-US', { month: 'long', year: 'numeric' })
    },
    classes () {
      return Theme.getHeaderColor(this.category)
    },
    days () {
      const days = (new Date(this.year, this.month, 0)).getDate()
      return [...Array(days).keys()].map((i) => i + 1)
    },
    offsetBegin () {
      return (new Date(this.year, this.month - 1, 1)).getDay()
    },
    offsetEnd () {
      return 6 - (new Date(this.year, this.month, 0)).getDay()
    }
  }
}
</script>

<style scoped>
.calendar-month {
  box-sizing: border-box;
}
.flex:not(.xs12) {
  flex-basis: calc(100% / 7);
  max-width: calc(100% / 7);
}
</style>
