<template>
  <div
    v-ripple
    :class="classes"
    class="calendar-day py-3"
    @click="onClick"
  >
    <span
      v-if="current"
      class="d-inline-block red"
    />
    {{ day }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import * as Theme from '~/utils/Theme'

export default {
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
    },
    day: {
      type: Number,
      required: true
    }
  },
  computed: {
    date () {
      return new Date(this.year, this.month - 1, this.day)
    },
    current () {
      const now = new Date()
      return this.year === now.getFullYear() && this.month - 1 === now.getMonth() && this.day === now.getDate()
    },
    active () {
      return this.isActive({ category: this.category, date: this.date })
    },
    classes () {
      let classes = [this.active ? Theme.getActiveDayColor(this.category) : Theme.getHeaderColor(this.category) + ' grey lighten-4']
      if (this.current) {
        classes = [...classes, 'current']
      }
      return classes
    },
    ...mapGetters([
      'isActive'
    ])
  },
  methods: {
    onClick () {
      this.toggleActive({ category: this.category, date: this.date })
    },
    ...mapActions([
      'toggleActive'
    ])
  }
}
</script>

<style scoped>
.calendar-day {
  cursor: pointer;
  position: relative;
}
span {
  border-radius: 50%;
  height: 8px;
  position: absolute;
  bottom: 8px;
  width: 8px;
}
</style>
