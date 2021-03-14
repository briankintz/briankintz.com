<template>
  <footer class="py-10 bg-blue-dark">
    <p class="text-center text-gray-300 opacity-90 text-xs mb-3">
      Handcrafted with
      <FontAwesomeIcon class="text-orange mx-1" :icon="['fas', 'heart']" />
      by Brian Kintz
    </p>
    <p class="text-center text-gray-400 opacity-80 text-xs">
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
      return `https://gitlab.com/bkintz/briankintz.com/-/tree/${this.gitCommitSha}`
    },
  },
}
</script>
