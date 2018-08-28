<template>
  <v-container
    class="pa-0"
    fluid
  >
    <swiper
      ref="swiper"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="m in months"
        :key="m.getTime()"
      >
        <v-container
          class="pa-1"
          fluid
          grid-list-xs
          text-xs-center
          style="box-sizing: border-box;"
        >
          <calendar
            ref="calendar"
            :year="m.getFullYear()"
            :month="m.getMonth() + 1"
          />
        </v-container>
      </swiper-slide>
      <!-- <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide> -->
    </swiper>
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
    const m = new Date(d.getFullYear(), d.getMonth())
    let months = [m]
    for (let i = 0; i < 2; i++) {
      const m = months[months.length - 1]
      months = [...months, new Date(m.getFullYear(), m.getMonth() + 1)]
    }

    for (let i = 0; i < 2; i++) {
      const m = months[0]
      months = [new Date(m.getFullYear(), m.getMonth() - 1), ...months]
    }
    return {
      threshold: 1,
      month: m,
      months,
      swiperOption: {
        direction: 'vertical',
        height: 384,
        initialSlide: 2,
        on: {
          slideChangeTransitionEnd: (a, b) => {
            if (!this.$refs.swiper.swiper) {
              return
            }
            const index = this.$refs.swiper.swiper.activeIndex
            console.log(index)
            if (index < 2) {
              for (let i = 0; i < 1; i++) {
                const m = this.months[0]
                this.months = [new Date(m.getFullYear(), m.getMonth() - 1), ...this.months.slice(0, 4)]
              }
              this.$refs.swiper.swiper.slideTo(2, 0)
            }
            if (index > 2) {
              for (let i = 0; i < 1; i++) {
                const m = this.months[this.months.length - 1]
                this.months = [...this.months.slice(1), new Date(m.getFullYear(), m.getMonth() + 1)]
              }
              this.$refs.swiper.swiper.slideTo(2, 0)
            }
            console.log(this.months)
          }
        }
      }
    }
  },
  watch: {
    month (value) {
      // console.log(value)
    }
  },
  async mounted () {
    // let i = 0
    // while (true) {
    //   // if (this.$el.offsetHeight > window.innerHeight * (1 + this.threshold)) {
    //   //   break
    //   // }
    //   if (i++ > 5) {
    //     break
    //   }
    //   this.append()
    //   // await this.$nextTick()
    // }
    // i = 0
    // while (true) {
    //   // if (window.pageYOffset > window.innerHeight * this.threshold) {
    //   //   break
    //   // }
    //   if (i++ > 5) {
    //     break
    //   }
    //   await this.prepend()
    //   // await this.$nextTick()
    // }
  },
  methods: {
    onScroll (e) {
      const top = window.pageYOffset
      // console.log(top)
      // console.log(window.innerHeight, this.$el.offsetHeight)
      if (this.$el.offsetHeight - top < window.innerHeight * (1 + this.threshold)) {
        this.append()
      }
      if (top < window.innerHeight * this.threshold) {
        this.prepend()
      }
      // console.log(top)
      // console.log(this.$refs.calendar.map((c) => [c.year, c.month, c.$el.offsetTop, c.$el.offsetTop + c.$el.offsetHeight]))
      const c = this.$refs.calendar.find((c) => c.$el.offsetTop - 55 < top && top < c.$el.offsetTop - 55 + c.$el.offsetHeight)
      if (!c) {
        return
      }
      this.month = new Date(c.year, c.month - 1)
      // console.log(c.year, c.month)
      // console.log(this.month)
    },
    getClass (month) {
      return {
        current: this.month.getFullYear() === month.getFullYear() && this.month.getMonth() === month.getMonth()
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
      // const top = window.pageYOffset
      // const height = this.$el.offsetHeight
      // await this.$nextTick()
      // window.scroll(0, top + (this.$el.offsetHeight - height))
    }
  }
}
</script>

<style scoped>
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
