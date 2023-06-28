<template>
  <header class="fixed top-0 w-screen px-5 py-3 flex justify-between">
    <a href="/">
      <span class="text-accent-magenta">/</span
      ><span class="text-accent-orange">/</span>
      Brian Kintz
    </a>

    <div>
      <SocialLink
        fa-icon="instagram"
        href="https://www.instagram.com/brr.ian/"
      />
      <SocialLink fa-icon="github" href="https://github.com/briankintz" />
      <SocialLink
        fa-icon="linkedin"
        href="https://www.linkedin.com/in/bkintz"
      />
    </div>
  </header>
</template>

<style lang="postcss" scoped>
header {
  background: rgba(var(--bk-light-default), 0.9);
  backdrop-filter: blur(5px);

  padding-right: 2rem;

  z-index: 999;
}
</style>
