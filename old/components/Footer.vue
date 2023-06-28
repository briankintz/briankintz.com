<template>
  <footer class="py-5 text-center text-xs">
    <p class="mb-3">
      Handcrafted with
      <FontAwesomeIcon class="text-accent-red mx-1" :icon="['fas', 'heart']" />
      by Brian Kintz
    </p>
    <p class="font-thin">
      <a
        :href="gitUrl"
        class="hover:underline"
        rel="noopener"
        target="_blank"
        >{{ gitCommitShaShort }}</a
      >
      ©
      {{ buildYear }}
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      buildDate: process.env.buildDate,
      gitCommitSha: process.env.gitCommitSha,
      gitCommitShaShort: process.env.gitCommitShaShort,
    }
  },
  computed: {
    buildYear() {
      return new Date(this.buildDate).getFullYear()
    },
    gitUrl() {
      return `https://github.com/briankintz/briankintz.com/commit/${this.gitCommitSha}`
    },
  },
}
</script>
