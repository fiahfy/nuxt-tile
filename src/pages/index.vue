<template>
  <v-container
    class="pa-0"
    fill-height
  >
    <swiper
      ref="swiper"
      :options="swiperOptions"
      class="fill-height"
    >
      <swiper-slide
        v-for="(category, index) in virtualData.slides"
        :key="category"
        :style="{ left: `${virtualData.offset}px` }"
      >
        <calendar
          :ref="`calendar-${index}`"
          :category="category"
        />
      </swiper-slide>
    </swiper>
    <v-btn
      :color="buttonColor"
      class="caption"
      dark
      fab
      fixed
      bottom
      right
      @click="onClick"
    >
      {{ today }}
      <v-icon medium>calendar_today</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Calendar from '~/components/Calendar'
import * as Category from '~/utils/category'

export default {
  components: {
    Calendar
  },
  data () {
    const today = (new Date()).getDate()
    const slides = this.$store.state.categories
    const initialSlide = slides.indexOf(this.$store.state.category)
    return {
      today,
      slides,
      virtualData: {
        slides: []
      },
      swiperOptions: {
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
            const category = this.slides[this.$refs.swiper.swiper.activeIndex]
            this.setCategory({ category })
          }
        }
      }
    }
  },
  computed: {
    buttonColor () {
      const color = Category.getColor(this.category)
      return `${color} darken-1`
    },
    ...mapState([
      'category'
    ])
  },
  methods: {
    onClick () {
      const index = this.$refs.swiper.swiper.activeIndex ? 1 : 0
      const ref = 'calendar-' + index
      const calendar = this.$refs[ref][0]
      calendar.moveToday()
    },
    ...mapMutations([
      'setCategory'
    ])
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
