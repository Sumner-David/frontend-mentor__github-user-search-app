<template>
  <div>
    <ul class="grid grid-cols-3 gap-8 px-4 py-4 rounded-lg sm:px-8 sm:gap-12 bg-light-gray">
      <StatItem :statValue="publicRepos" statName="Repos"></StatItem>
      <StatItem :statValue="followers" statName="Followers"></StatItem>
      <StatItem :statValue = "following" statName="Following"></StatItem>
    </ul>
  </div>
</template>

<script>

import StatItem from '@/components/StatItem.vue'


export default {
  components: {
    StatItem
  },

  props: [
    'followers',
    'following',
    'publicRepos'
  ]
}
</script>

<style>
</style>