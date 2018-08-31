<template>
  <v-container
    class="calendar-header px-1 py-0"
    grid-list-xs
    text-xs-center
    style="box-sizing: border-box;"
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="(weekday, index) in weekdays"
        :key="index"
        class="caption"
      >{{ weekday }}</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    weekdays () {
      return (new Array(7)).fill(1).map((value, index) => {
        const d = new Date()
        d.setDate(d.getDate() + index - d.getDay())
        return d.toLocaleString('en-US', { weekday: 'narrow' })
      })
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
