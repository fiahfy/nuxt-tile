<template>
  <svg
    :width="size"
    :height="size"
    x="0"
    y="0"
    viewBox="0 0 512 512"
  >
    <polygon
      :fill="color"
      points="0 0, 235 0, 235 235, 0 235"
    />
    <polygon
      :fill="color"
      points="277 0, 512 0, 512 235, 277 235"
    />
    <polygon
      :fill="color"
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
      default: '#9ccc65'
    }
  }
}
</script>
