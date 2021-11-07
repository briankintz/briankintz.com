<template>
  <div class="aurora-bg w-screen overflow-hidden pb-56" :style="cssProps">
    <div
      class="
        container
        mx-auto
        grid grid-cols-12
        lg:gap-x-10
        gap-y-16
        lg:gap-y-24
        text-center
        lg:text-left
      "
    >
      <slot />
    </div>
  </div>
</template>

<script>
const variants = {
  blue: {
    gradientProp: '--bk-aurora-blue',
    highlightColorProp: '--bk-accent-teal',
  },
  orange: {
    gradientProp: '--bk-aurora-orange',
    highlightColorProp: '--bk-accent-red',
  },
}

function cssProps() {
  if (!process.browser) return {}

  const v = variants[this.variant]

  const styles = window.getComputedStyle(document.documentElement)

  const auroraVariant = styles.getPropertyValue(v.gradientProp)
  const highlightColor = styles.getPropertyValue(v.highlightColorProp)

  return {
    '--aurora-variant': auroraVariant,
    '--highlight-color': highlightColor,
  }
}

export default {
  props: {
    variant: {
      type: String,
      required: true,
    },
  },
  computed: {
    cssProps,
  },
}
</script>

<style lang="postcss" scoped>
div.aurora-bg {
  position: relative;
  z-index: 1;
}
div.aurora-bg::before {
  content: '';
  position: absolute;
  top: 10%;
  height: 80%;
  width: 100%;

  background: var(--aurora-variant);
  transform: rotate(-2.5deg) scale(1.3, 1.1);
  transform-origin: center center;
  z-index: -1;
}
</style>
