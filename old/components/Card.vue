<template>
  <div class="card">
    <FontAwesomeIcon :icon="['fal', faIcon]" class="fa-3x fa-fw" />
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
  @apply mx-10 p-5 py-8 lg:py-5 leading-none;
  @apply flex lg:flex-row flex-col items-center;
  @apply bg-light-white border-light-darker border-[1px] shadow rounded-xl;

  & .svg-inline--fa {
    @apply mb-5 lg:mb-0 lg:ml-5 lg:mr-10;
  }
}

.card-vertical {
  @apply flex-col px-5 py-8 text-center;

  & .svg-inline--fa {
    @apply mb-5 mx-0;
  }
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
