<template>
  <v-container
    id="scroll-target"
    class="calendar-month-list pa-0"
    fluid
    scroll-y
  >
    <v-container
      ref="container"
      v-scroll:#scroll-target="onScroll"
      class="pa-0"
    >
      <calendar-month
        v-for="month in months"
        ref="calendar-month"
        :key="month"
        :category-id="categoryId"
        :year="(new Date(month)).getFullYear()"
        :month="(new Date(month)).getMonth() + 1"
      />
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import CalendarMonth from '~/components/CalendarMonth'

export default {
  components: {
    CalendarMonth
  },
  props: {
    categoryId: {
      type: Number,
      required: true
    }
  },
  data() {
    const d = new Date()
    const m = new Date(d.getFullYear(), d.getMonth()).getTime()
    return {
      threshold: 1,
      currentMonth: m,
      months: [m]
    }
  },
  computed: {
    ...mapState(['scrollTop'])
  },
  watch: {
    scrollTop(value) {
      console.log(value)
      // this.$el.scrollTo(0, value)
    }
  },
  async mounted() {
    await this.append()
    // await this.prepend()
  },
  methods: {
    async onScroll() {
      const top = this.$el.scrollTop
      console.log(top, this.$refs.container.offsetHeight - this.$el.offsetHeight * 2)
      if (top > this.$refs.container.offsetHeight - this.$el.offsetHeight * 2) {
        this.append()
      }
      if (top < this.$el.offsetHeight) {
        // await this.prepend()
      }
      this.setScrollTop({ scrollTop: top })
      return
      const c = this.$refs.calendar.find(
        (c) =>
          c.$refs.container.offsetTop - 55 < top &&
          top <
            c.$refs.container.offsetTop - 55 + c.$refs.container.offsetHeight
      )
      if (!c) {
        return
      }
      this.currentMonth = new Date(c.year, c.month - 1)
      // console.log(c.year, c.month)
      // console.log(this.month)
    },
    async append() {
      const m = this.months[this.months.length - 1]
      const d = new Date(m)
      this.months = [
        ...this.months,
        ...[...Array(4).keys()].map((i) =>
          new Date(d.getFullYear(), d.getMonth() + i + 1).getTime()
        )
      ]
      await this.$nextTick()
    },
    async prepend() {
      const scrollTop = this.$el.scrollTop
      const offsetHeight = this.$refs.container.offsetHeight

      const m = this.months[0]
      const d = new Date(m)
      this.months = [
        ...[...Array(12).keys()]
          .map((i) => new Date(d.getFullYear(), d.getMonth() - i - 1).getTime())
          .reverse(),
        ...this.months
      ]
      await this.$nextTick()

      const top = scrollTop + this.$refs.container.offsetHeight - offsetHeight
      this.$el.style['-webkit-overflow-scrolling'] = 'auto'
      this.$el.scrollTo(0, top)
      this.$el.style['-webkit-overflow-scrolling'] = 'touch'
    },
    ...mapMutations(['setScrollTop'])
  }
}
</script>

<style scoped>
.calendar-month-list {
  -webkit-overflow-scrolling: touch;
}
.container.grid-list-xs .layout:only-child,
.container.grid-list-xs .layout:not(:only-child) {
  margin: 0 -1px;
}
.calendar {
  opacity: 1;
}
.calendar.current {
  opacity: 1;
}
</style>
