<template>
  <v-layout
    class="calendar"
    row
    wrap
  >
    <v-flex
      v-for="i in offsetBegin"
      :key="`b${i}`"
    />
    <v-flex
      v-for="d in dates"
      :key="d"
    >
      <v-card
        dark
      >
        <v-card-text
          class="px-0"
        >{{ d }}</v-card-text>
      </v-card>
    </v-flex>
    <v-flex
      v-for="i in offsetEnd"
      :key="`e${i}`"
    />
  </v-layout>
</template>

<script>
export default {
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
    dates () {
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
.flex {
  flex-basis: calc(100% / 7);
  max-width: calc(100% / 7);
}
</style>
