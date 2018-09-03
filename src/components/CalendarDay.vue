<template>
  <div
    v-ripple
    :class="classes"
    class="calendar-day py-3"
    @click="onClick"
  >
    {{ day }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
    checked () {
      return this.isChecked({ category: this.category, date: this.date })
    },
    classes () {
      if (this.current) {
        return this.checked ? 'green lighten-2 white--text' : 'green lighten-3'
      }
      return this.checked ? 'light-green lighten-1 white--text' : 'light-green lighten-4'
    },
    ...mapGetters([
      'isChecked'
    ])
  },
  methods: {
    onClick () {
      this.toggleChecked({ category: this.category, date: this.date })
    },
    ...mapActions([
      'toggleChecked'
    ])
  }
}
</script>
