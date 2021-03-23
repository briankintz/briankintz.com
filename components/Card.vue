<template>
  <div
    class="mx-10 px-10 py-5 rounded-xl flex flex-col lg:flex-row items-center gap-10 bg-light-white border-light-darker border-[1px] shadow leading-none"
  >
    <FontAwesomeIcon
      :icon="['fal', faIcon]"
      class="fa-3x justify-self-center"
    />
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
.card-vertical {
  @apply flex-col gap-5 px-5 pt-8 text-center;
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
