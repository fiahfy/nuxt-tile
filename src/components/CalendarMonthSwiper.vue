<template>
  <swiper
    ref="swiper"
    :options="swiperOptions"
    class="calendar-month-swiper"
  >
    <swiper-slide
      v-for="(timestamp) in virtualData.slides"
      :key="timestamp"
      :style="{ top: `${virtualData.offset}px` }"
    >
      <v-container class="pa-0">
        <calendar-month
          :category-id="categoryId"
          :year="(new Date(timestamp)).getFullYear()"
          :month="(new Date(timestamp)).getMonth() + 1"
        />
      </v-container>
    </swiper-slide>
  </swiper>
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
    const slides = (() => {
      const d = new Date()
      const m = new Date(d.getFullYear(), d.getMonth())
      let slides = [m.getTime()]
      for (let i = 1; i < 12 * 10; i++) {
        // 10 years
        const previous = new Date(m.getFullYear(), m.getMonth() - i).getTime()
        const next = new Date(m.getFullYear(), m.getMonth() + i).getTime()
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
        // freeMode: true,
        mousewheel: true,
        direction: 'vertical',
        slidesPerView: 5,
        height: 376 * 5,
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
            const timestamp = this.slides[this.$refs.swiper.swiper.activeIndex]
            this.setTimestamp({ timestamp })
          }
        }
      }
    }
  },
  computed: {
    ...mapState(['now']),
    ...mapGetters(['month'])
  },
  watch: {
    month(value) {
      const index = this.slides.indexOf(value)
      // this.$refs.swiper.swiper.slideTo(index)
    }
  },
  methods: {
    ...mapMutations(['setTimestamp'])
  }
}
</script>
