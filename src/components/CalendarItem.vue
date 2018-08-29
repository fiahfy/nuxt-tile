<template>
  <v-card
    v-ripple
    :class="classes"
    flat
    tile
    @click.native="onClick"
  >
    <v-card-text
      class="px-0"
    >{{ day }}</v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
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
      return this.isChecked({ date: this.date })
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
      this.toggleChecked({ date: this.date })
    },
    ...mapActions([
      'toggleChecked'
    ])
  }
}
</script>
