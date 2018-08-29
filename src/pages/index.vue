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
        <calendar
          ref="calendar"
          :year="m.getFullYear()"
          :month="m.getMonth() + 1"
        />
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
  }
}
</script>
