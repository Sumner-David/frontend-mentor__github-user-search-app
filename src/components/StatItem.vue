<template>
  <li>
    <p class="text-light-blue-darker">
      {{statName}}
    </p>

    <p class="text-3xl font-bold text-light-black mt-1">
      {{statValue}}
    </p>
  </li>

</template>

<script>
export default {

  props: {
    statName: {
      type: String,
      default: 'Repos'
    },
    statValue: {
      type: Number,
      default: 42
    }
  }

}
</script>

<style>

</style>