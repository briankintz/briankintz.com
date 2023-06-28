<template>
  <h3>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </h3>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
h3 {
  @apply leading-loose text-center h-8 overflow-hidden;
}

ul {
  animation: rolodex 10s infinite;
}

@keyframes rolodex {
  0%,
  15% {
    transform: translate3d(0, 0, 0);
  }
  20%,
  35% {
    transform: translate3d(0, -20%, 0);
  }
  40%,
  55% {
    transform: translate3d(0, -40%, 0);
  }
  60%,
  75% {
    transform: translate3d(0, -60%, 0);
  }
  80%,
  95% {
    transform: translate3d(0, -80%, 0);
  }
}
</style>
