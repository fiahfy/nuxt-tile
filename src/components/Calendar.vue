<template>
  <swiper
    ref="swiper"
    :options="swiperOptions"
    class="calendar"
  >
    <swiper-slide
      v-for="(timestamp) in virtualData.slides"
      :key="timestamp"
      :style="{ top: `${virtualData.offset}px` }"
    >
      <calendar-month
        ref="calendar"
        :category="category"
        :year="(new Date(timestamp)).getFullYear()"
        :month="(new Date(timestamp)).getMonth() + 1"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import CalendarMonth from '~/components/CalendarMonth'
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  components: {
    CalendarMonth
  },
  props: {
    category: {
      type: Number,
      required: true
    }
  },
  data () {
    const slides = (() => {
      const d = new Date()
      const m = new Date(d.getFullYear(), d.getMonth())
      let slides = [m.getTime()]
      for (let i = 1; i < 12 * 10; i++) { // 10 years
        const previous = (new Date(m.getFullYear(), m.getMonth() - i)).getTime()
        const next = (new Date(m.getFullYear(), m.getMonth() + i)).getTime()
        slides = [previous, ...slides, next]
      }
      return slides
    })()
    const initialSlide = slides.indexOf(this.$store.getters.month)
    return {
      slides,
      virtualData: {
        slides: []
      },
      swiperOptions: {
        direction: 'vertical',
        slidesPerView: 3,
        height: 376 * 3,
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
      'date'
    ]),
    ...mapGetters([
      'isCurrentCategory',
      'month'
    ])
  },
  watch: {
    month (value) {
      if (this.isCurrentCategory({ category: this.category })) {
        return
      }
      const index = this.slides.indexOf(value)
      this.$refs.swiper.swiper.slideTo(index)
    }
  },
  methods: {
    moveToday () {
      const d = new Date()
      const m = new Date(d.getFullYear(), d.getMonth())
      const index = this.slides.indexOf(m.getTime())
      this.$refs.swiper.swiper.slideTo(index)
    },
    ...mapMutations([
      'setDate'
    ])
  }
}
</script>
