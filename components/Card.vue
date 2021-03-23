<template>
  <div class="card">
    <FontAwesomeIcon :icon="['fal', faIcon]" class="fa-3x" />
    <div>
      <h3 class="mb-2">{{ title }}</h3>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    faIcon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.card {
  @apply mx-10 p-5 lg:px-10 py-8 lg:py-5 leading-none;
  @apply flex lg:flex-row flex-col gap-5 lg:gap-10 items-center;
  @apply bg-light-white border-light-darker border-[1px] shadow rounded-xl;
}

.card-vertical {
  @apply flex-col gap-5 px-5 py-8 text-center;
}

p,
li {
  @apply font-thin;

  &:not(:last-of-type) {
    @apply mb-2;
  }
}

svg {
  color: rgb(var(--highlight-color));
}
</style>
