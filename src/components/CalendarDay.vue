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
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  props: {
    categoryId: {
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
    timestamp () {
      return (new Date(this.year, this.month - 1, this.day)).getTime()
    },
    current () {
      const d = new Date(this.now)
      return this.year === d.getFullYear() && this.month - 1 === d.getMonth() && this.day === d.getDate()
    },
    active () {
      return this.isActive({ categoryId: this.categoryId, timestamp: this.timestamp })
    },
    classes () {
      const color = this.getCategory({ id: this.categoryId }).color
      let classes = [this.active ? `${color} lighten-3 ${color}--text text--darken-4` : `grey lighten-4 ${color}--text text--darken-4`]
      if (this.current) {
        classes = [...classes, 'current']
      }
      return classes
    },
    ...mapState([
      'now'
    ]),
    ...mapGetters([
      'getCategory'
    ]),
    ...mapGetters('active', [
      'isActive'
    ])
  },
  methods: {
    onClick () {
      this.toggle({ categoryId: this.categoryId, timestamp: this.timestamp })
    },
    ...mapActions('active', [
      'toggle'
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
  bottom: 8px;
  left: 0;
  height: 8px;
  margin: 0 auto;
  position: absolute;
  right: 0;
  width: 8px;
}
</style>
