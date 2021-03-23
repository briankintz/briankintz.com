<template>
  <a
    class="inline-block rounded focus:outline-none focus:ring ring-accent-magenta text-dark hover:text-accent-red transition-colors"
    :href="href"
    :aria-label="`Social media link to ${faIcon}`"
  >
    <FontAwesomeIcon
      :icon="[faFamily, faIcon]"
      class="mx-2 lg:mx-1 p-1"
      rel="noopener"
      target="_blank"
    />
  </a>
</template>

<script>
export default {
  props: {
    faFamily: {
      type: String,
      default: 'fab',
    },
    faIcon: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
svg {
  @apply text-2xl;
}
</style>
