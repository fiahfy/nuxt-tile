<template>
  <v-container
    class="pa-0"
  >
    <swiper
      ref="swiper"
      :options="swiperOption"
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
      class="caption"
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
import Calendar from '~/components/Calendar'

export default {
  components: {
    Calendar
  },
  data () {
    const today = (new Date()).getDate()
    const slides = this.$store.state.categories
    const category = slides[0]
    const d = new Date()
    const month = (new Date(d.getFullYear(), d.getMonth())).getTime()
    return {
      today,
      category,
      month,
      virtualData: {
        slides: []
      },
      swiperOption: {
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
      const ref = 'calendar-' + this.$refs.swiper.swiper.activeIndex
      const calendar = this.$refs[ref][0]
      calendar.moveToday()
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
