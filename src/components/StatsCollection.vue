<template>

  <div>
    <ul class="px-8 py-4 rounded-lg bg-light-gray grid grid-cols-3 gap-12">
      <StatItem statName="Repos"></StatItem>
      <StatItem statName="Followers"></StatItem>
      <StatItem statName="Following"></StatItem>
    </ul>
  </div>
</template>

<script>

import StatItem from '@/components/StatItem.vue'


export default {
  components: {
    StatItem
  },
}
</script>

<style>

</style>