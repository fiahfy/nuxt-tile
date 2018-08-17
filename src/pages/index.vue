<template>
  <v-container
    v-scroll="onScroll"
    fluid
    grid-list-md
    text-xs-center
  >
    <calendar
      v-for="m in months"
      :key="m.getTime()"
      :year="m.getFullYear()"
      :month="m.getMonth() + 1"
    />
  </v-container>
</template>

<script>
import Calendar from '~/components/Calendar'

export default {
  components: {
    Calendar
  },
  data () {
    const d = new Date()
    return {
      threshold: 1,
      months: [
        new Date(d.getFullYear(), d.getMonth())
      ]
    }
  },
  async mounted () {
    while (true) {
      if (this.$el.offsetHeight > window.innerHeight * (1 + this.threshold)) {
        break
      }
      this.append()
      await this.$nextTick()
    }
    while (true) {
      const top = window.pageYOffset || document.documentElement.scrollTop
      if (top > window.innerHeight * this.threshold) {
        break
      }
      this.prepend()
      await this.$nextTick()
    }
  },
  methods: {
    onScroll (e) {
      const top = window.pageYOffset || document.documentElement.scrollTop
      console.log(top)
      console.log(window.innerHeight, this.$el.offsetHeight)
      if (this.$el.offsetHeight - top < window.innerHeight * (1 + this.threshold)) {
        this.append()
      }
      if (top < window.innerHeight * this.threshold) {
        this.prepend()
      }
    },
    color (d) {
      return [
        'white',
        'grey lighten-5',
        'grey lighten-4',
        'grey lighten-3',
        'grey lighten-2',
        'grey lighten-1',
        'grey',
        'grey darken-1',
        'grey darken-2',
        'grey darken-3',
        'grey darken-4',
        'black'
      ][d.getMonth()]
    },
    append () {
      const m = this.months[this.months.length - 1]
      this.months = [...this.months, new Date(m.getFullYear(), m.getMonth() + 1)]
    },
    async prepend () {
      const m = this.months[0]
      this.months = [new Date(m.getFullYear(), m.getMonth() - 1), ...this.months]
      const top = window.pageYOffset || document.documentElement.scrollTop
      const height = this.$el.offsetHeight
      await this.$nextTick()
      document.documentElement.scrollTop = top + (this.$el.offsetHeight - height)
    }
  }
}
</script>
