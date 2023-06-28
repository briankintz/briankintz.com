<template>
  <div class="w-screen min-h-[75vh] flex justify-center items-center">
    <div
      class="content p-3"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.content * {
  @apply text-center leading-loose;
}
</style>
