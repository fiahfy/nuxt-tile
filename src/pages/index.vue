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
        v-for="(categoryId, index) in virtualData.slides"
        :key="categoryId"
        :style="{ left: `${virtualData.offset}px` }"
      >
        <calendar
          :ref="`calendar-${index}`"
          :category-id="categoryId"
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
import { mapGetters, mapMutations, mapState } from 'vuex'
import Calendar from '~/components/Calendar'

export default {
  components: {
    Calendar
  },
  data () {
    const slides = this.$store.state.categories.map((category) => category.id)
    const initialSlide = slides.indexOf(this.$store.state.categoryId)
    return {
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
            const categoryId = this.slides[this.$refs.swiper.swiper.activeIndex]
            this.setCategoryId({ categoryId })
          }
        }
      }
    }
  },
  computed: {
    buttonColor () {
      const color = this.category.color
      return `${color} darken-1`
    },
    today () {
      return (new Date(this.now)).getDate()
    },
    ...mapState([
      'categoryId',
      'now'
    ]),
    ...mapGetters([
      'category'
    ])
  },
  watch: {
    categoryId (value) {
      const index = this.slides.indexOf(value)
      this.$refs.swiper.swiper.slideTo(index)
    }
  },
  methods: {
    onClick () {
      const index = this.$refs.swiper.swiper.activeIndex ? 1 : 0
      const ref = 'calendar-' + index
      const calendar = this.$refs[ref][0]
      calendar.moveToday()
    },
    ...mapMutations([
      'setCategoryId'
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
