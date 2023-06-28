<template>
  <header
    class="hero w-screen min-h-screen flex items-center justify-around"
    data-aos="fade-out"
    data-aos-anchor-placement="top-top"
    data-aos-offset="300"
  >
    <div
      class="container max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center text-center"
    >
      <div>
        <h1 class="mb-5">Hey there!</h1>
        <h2 class="mb-5 leading-none">
          I'm Brian...a cloud<br />and DevOps engineer<br />based in Germany.
        </h2>
        <h2 class="mb-5 leading-none">
          Scroll on down to find<br />out a bit about me!
        </h2>
      </div>
      <div
        class="rounded-full shadow order-first lg:order-last p-[3px] bg-aurora-orange"
      >
        <img
          class="rounded-full lazyload blur-up"
          :src="loading"
          :data-src="cover"
          width="275"
          height="275"
          alt="Brian Kintz"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => {
    return {
      cover: require('~/assets/img/profile.jpg'),
      loading: require('~/assets/img/profile_loading.jpg'),
    }
  },
}
</script>

<style lang="postcss" scoped>
.blur-up {
  filter: blur(5px);
  transition: filter 400ms;
}

.blur-up.lazyloaded {
  filter: blur(0);
}
</style>
