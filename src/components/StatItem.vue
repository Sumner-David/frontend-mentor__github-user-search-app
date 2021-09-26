<template>
  <li>
    <p class="text-sm text-center text-light-blue-darker sm:text-base md:text-left">
      {{statName}}
    </p>

    <p class="mt-1 text-lg font-bold text-center sm:text-3xl text-light-black md:text-left">
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