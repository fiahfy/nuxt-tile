<template>
  <v-card
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
    classes () {
      return this.isChecked({ date: this.date }) ? 'light-green lighten-1' : 'light-green lighten-5'
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
