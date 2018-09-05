<template>
  <svg
    :width="size"
    :height="size"
    x="0"
    y="0"
    viewBox="0 0 512 512"
  >
    <polygon
      :class="classes"
      points="0 0, 235 0, 235 235, 0 235"
    />
    <polygon
      :class="classes"
      points="277 0, 512 0, 512 235, 277 235"
    />
    <polygon
      :class="classes"
      points="0 277, 235 277, 235 512, 0 512"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: [String, Number],
      default: 512
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return this.color
    }
  }
}
</script>

<style scoped>
polygon {
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.light-green {
  fill: #8bc34a;
}
.orange {
  fill: #ff9800;
}
.red {
  fill: #f44336;
}
</style>
