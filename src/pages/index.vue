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
        v-for="(categoryId) in virtualData.slides"
        :key="categoryId"
        :style="{ left: `${virtualData.offset}px` }"
      >
        <calendar-month-swiper :category-id="categoryId" />
      </swiper-slide>
    </swiper>
    <v-btn
      :color="color"
      :dark="active"
      fab
      fixed
      bottom
      right
      @click="onClick"
    >
      <v-icon medium>done</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import CalendarMonthSwiper from '~/components/CalendarMonthSwiper'

export default {
  components: {
    CalendarMonthSwiper
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
    today () {
      return (new Date(this.now)).getDate()
    },
    active () {
      return this.isActive({ categoryId: this.categoryId, timestamp: this.nowDay })
    },
    color () {
      const color = this.category.color
      return this.active ? `${color} darken-1` : `${color}--text text--darken-1`
    },
    ...mapState([
      'categoryId',
      'now'
    ]),
    ...mapGetters([
      'category',
      'nowDay'
    ]),
    ...mapGetters('active', [
      'isActive'
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
      const timestamp = this.now
      this.setTimestamp({ timestamp })
      this.toggle({ categoryId: this.categoryId, timestamp: this.nowDay })
    },
    ...mapMutations([
      'setCategoryId',
      'setTimestamp'
    ]),
    ...mapActions('active', [
      'toggle'
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
