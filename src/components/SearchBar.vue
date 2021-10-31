<template>
  <form
    class="flex items-center justify-between w-full p-3 transition-colors rounded-lg shadow-lg bg-light-white dark:bg-dark-blue-darker"
    @submit.prevent= "handleSubmit"
  >
    <div class="flex items-center w-full h-full pl-2 space-x-4 md:space-x-6 md:pl-4">
      <SearchIcon styling="h-6 sm:h-8 text-light-blue w-4 w-auto"/>

      <input v-model="username" class="w-full h-full pl-2 mr-4 text-xl transition-colors bg-transparent dark:text-dark-white placeholder:text-opacity-70" placeholder="Search Gitub..." />
    </div>

    <button class="flex-shrink-0 px-4 py-2 ml-4 font-sans text-lg font-bold text-white transition-all rounded-lg md:px-8 md:py-3 opacity-90 bg-light-blue hover:opacity-100">
      <span class="hidden md:block">Search</span>
      <span class="md:hidden">Go</span>
    </button>
  </form>
</template>

<script>

import SearchIcon from '@/components/svg_components/SearchIcon.vue'

export default {

  data() {
    return {
      username: 'sumner-david'
    }
  },

  components: {
    SearchIcon,
  },

  methods: {
    handleSubmit() {
      this.$emit('searchUser', this.username)
    }
  }

}
</script>

<style>

</style>