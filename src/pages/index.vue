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
        v-for="(m, index) in virtualData.slides"
        :key="index"
        :style="{top: `${virtualData.offset}px`}"
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
    const slides = (() => {
      let slides = [m]
      for (let i = 1; i < 12 * 10; i++) { // 10 years
        const previous = new Date(m.getFullYear(), m.getMonth() - i)
        const next = new Date(m.getFullYear(), m.getMonth() + i)
        slides = [previous, ...slides, next]
      }
      return slides
    })()
    const initialSlide = slides.indexOf(m)
    return {
      virtualData: {
        slides: []
      },
      swiperOption: {
        direction: 'vertical',
        height: 384,
        initialSlide,
        virtual: {
          slides,
          renderExternal: (data) => {
            this.virtualData = data
          }
        }
      }
    }
  },
  methods: {
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
