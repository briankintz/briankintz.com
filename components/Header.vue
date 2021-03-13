<template>
  <div class="relative bg-gray-900">
    <picture>
      <source
        media="(min-width: 1280px)"
        :srcset="preloadSet('lg', 'xl')"
        :data-srcset="coverSet('lg', 'xl')"
      />
      <source
        media="(min-width: 1024px)"
        :srcset="preloadSet('md')"
        :data-srcset="coverSet('md')"
      />
      <img
        class="w-full h-screen object-cover object-top opacity-40 lazyload"
        :srcset="preloadSet('sm')"
        :data-srcset="coverSet('sm')"
      />
    </picture>
    <h1>BRIAN KINTZ</h1>
    <FontAwesomeIcon
      class="absolute inset-x-1/2 bottom-0 fa-3x text-gray-50 animate-bounce"
      :icon="['fal', 'angle-down']"
    />
  </div>
</template>

<script>
const cover = {
  sm: {
    preload: require('~/assets/img/cover/cover_8x10_preload.jpg'),
    image: require('~/assets/img/cover/cover_8x10.jpg'),
    width: '768w',
  },
  md: {
    preload: require('~/assets/img/cover/cover_4x3_preload.jpg'),
    image: require('~/assets/img/cover/cover_4x3.jpg'),
    width: '1600w',
  },
  lg: {
    preload: require('~/assets/img/cover/cover_16x10_preload.jpg'),
    image: require('~/assets/img/cover/cover_16x10_sm.jpg'),
    width: '1600w',
  },
  xl: {
    preload: require('~/assets/img/cover/cover_16x10_preload.jpg'),
    image: require('~/assets/img/cover/cover_16x10_lg.jpg'),
    width: '2880w',
  },
}

export default {
  methods: {
    preloadSet(...breakpoints) {
      return breakpoints
        .map(
          (breakpoint) =>
            `${cover[breakpoint].preload} ${cover[breakpoint].width}`
        )
        .join(', ')
    },

    coverSet(...breakpoints) {
      return breakpoints
        .map(
          (breakpoint) =>
            `${cover[breakpoint].image} ${cover[breakpoint].width}`
        )
        .join(', ')
    },
  },
}
</script>

<style lang="postcss" scoped>
img {
  filter: blur(10px);
  transition: filter 500ms;

  &.lazyloaded {
    filter: blur(0);
  }
}

h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  right: 0;

  @apply font-brand text-gray-50;

  text-align: center;
  text-shadow: 4px 6px 16px rgba(#0f172a, 0.7), 2px 4px 6px rgba(#0f172a, 0.4);

  font-size: 24px;
  letter-spacing: 15px;
  @media (min-width: 640px) {
    font-size: 32px;
    letter-spacing: 16px;
    top: 7%;
  }
  @media (min-width: 768px) {
    font-size: 38px;
    letter-spacing: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 42px;
    letter-spacing: 20px;
    top: 40%;
    left: 50%;
  }
  @media (min-width: 1280px) {
    font-size: 52px;
  }
}
</style>
