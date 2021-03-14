<template>
  <a
    :href="href"
    class="inline-block rounded focus:outline-none focus:ring ring-blue-light"
    :aria-label="`Social media link to ${faIcon}`"
  >
    <FontAwesomeIcon
      :icon="[faFamily, faIcon]"
      class="mx-5 lg:mx-2 p-1 fa-2x text-gray-50 hover:text-blue-light transition-colors"
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
