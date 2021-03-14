<template>
  <div class="container mx-auto my-24 p-3 text-blue-dark">
    <h2 class="flex flex-col xl:flex-row items-baseline mb-3">
      <a class="mr-3" :href="href" rel="noopener" target="_blank">{{
        company
      }}</a>
      <small class="text-gray-500">{{ role }}</small>
    </h2>

    <div class="w-full grid grid-cols-3">
      <div class="col-span-3 lg:col-span-2">
        <slot />
        <hr class="my-4 border-4 border-blue rounded-full" />

        <p v-for="t of tags" :key="t.faIcon" class="text-gray-500 mb-1">
          <FontAwesomeIcon
            :icon="[t.faFamily, t.faIcon]"
            class="fa-fw fa-sm mr-1"
          />
          <small>{{ t.text }}</small>
        </p>
      </div>
      <img
        class="hidden lg:block justify-self-end h-16 lazyload"
        :data-src="logo"
        :alt="company"
        height="100%"
        width="auto"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    company: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
  },
}
</script>
