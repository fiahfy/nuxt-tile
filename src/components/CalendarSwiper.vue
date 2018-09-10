<template>
  <swiper
    ref="swiper"
    :options="swiperOptions"
    class="calendar-swiper"
  >
    <swiper-slide
      v-for="(timestamp) in virtualData.slides"
      :key="timestamp"
      :style="{ top: `${virtualData.offset}px` }"
    >
      <calendar
        ref="calendar"
        :category-id="categoryId"
        :year="(new Date(timestamp)).getFullYear()"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import Calendar from '~/components/Calendar'
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  components: {
    Calendar
  },
  props: {
    categoryId: {
      type: Number,
      required: true
    }
  },
  data () {
    const slides = (() => {
      const d = new Date()
      const y = new Date(d.getFullYear(), 0)
      let slides = [y.getTime()]
      for (let i = 1; i < 10; i++) { // 10 years
        const previous = (new Date(y.getFullYear() - i, 0)).getTime()
        const next = (new Date(y.getFullYear() + i, 0)).getTime()
        slides = [previous, ...slides, next]
      }
      return slides
    })()
    const initialSlide = slides.indexOf(this.$store.getters.year)
    return {
      slides,
      virtualData: {
        slides: []
      },
      swiperOptions: {
        direction: 'vertical',
        slidesPerView: 3,
        height: 744 * 3,
        initialSlide,
        virtual: {
          slides,
          renderExternal: (data) => {
            this.virtualData = data
          }
        },
        on: {
          slideChange: () => {
            if (!this.$refs.swiper.swiper) {
              return
            }
            const date = this.slides[this.$refs.swiper.swiper.activeIndex]
            this.setDate({ date })
          }
        }
      }
    }
  },
  computed: {
    ...mapState([
      'now'
    ]),
    ...mapGetters([
      'year'
    ])
  },
  watch: {
    year (value) {
      const index = this.slides.indexOf(value)
      this.$refs.swiper.swiper.slideTo(index)
    }
  },
  methods: {
    moveToday () {
      const d = new Date(this.now)
      const y = new Date(d.getFullYear(), 1)
      const index = this.slides.indexOf(y.getTime())
      this.$refs.swiper.swiper.slideTo(index)
    },
    ...mapMutations([
      'setDate'
    ])
  }
}
</script>
