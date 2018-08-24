<template>
  <v-layout
    class="calendar"
    row
    wrap
  >
    <v-flex xs12>
      <h2 class="subheading mt-3 mb-1">{{ headline }}</h2>
    </v-flex>
    <v-flex
      v-for="i in offsetBegin"
      :key="`b${i}`"
      class="day"
    />
    <v-flex
      v-for="day in days"
      :key="day"
      class="day"
    >
      <calendar-item
        :year="year"
        :month="month"
        :day="day"
      />
    </v-flex>
    <v-flex
      v-for="i in offsetEnd"
      :key="`e${i}`"
      class="day"
    />
  </v-layout>
</template>

<script>
import CalendarItem from '~/components/CalendarItem'

export default {
  components: {
    CalendarItem
  },
  props: {
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
    headline () {
      const date = new Date(this.year, this.month - 1)
      return date.toLocaleString('en-US', { month: 'long', year: 'numeric' })
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
.flex.day {
  flex-basis: calc(100% / 7);
  max-width: calc(100% / 7);
}
.v-card {
  /* opacity: 0.1; */
}
</style>
