<template>
  <v-container
    class="pa-0"
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
        <calendar
          ref="calendar"
          :year="m.getFullYear()"
          :month="m.getMonth() + 1"
        />
      </swiper-slide>
    </swiper>
    <v-btn
      class="caption"
      fab
      fixed
      bottom
      right
      @click="onClick"
    >
      {{ today.getDate() }}
      <v-icon medium>calendar_today</v-icon>
    </v-btn>
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
      today: d,
      virtualData: {
        slides: []
      },
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 3,
        height: 382 * 3,
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
    onClick () {
      this.$refs.swiper.swiper.slideTo(this.swiperOption.initialSlide)
    }
  }
}
</script>

<style scoped>
.v-btn >>> .v-btn__content {
  margin-top: 3px;
}
.v-icon {
  position: absolute;
  left: 0;
  right: 0;
  top: -3px;
}
</style>
