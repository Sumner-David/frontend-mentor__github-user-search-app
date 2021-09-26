<template>
  <div class="flex items-center min-h-screen py-24 bg-light-gray">

    <div class="container max-w-4xl space-y-6">
      <Headline></Headline>
      <UserSearch></UserSearch>

      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Headline from '@/components/Headline.vue'
import UserSearch from '@/components/UserSearch.vue'


export default {
  name: 'Home',

  components: {
    HelloWorld,
    Headline,
    UserSearch
  },

}
</script>
