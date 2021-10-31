<template>
  <div class="flex items-center min-h-screen py-24 transition-colors" :class="{'dark bg-dark-black' : darkMode, 'bg-light-gray' : !darkMode }">
    <div class="container max-w-4xl space-y-6">
      <Headline :darkMode="darkMode" @toggleMode="toggleMode"></Headline>
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

  data() {
    return {
      darkMode: false
    }
  },

  components: {
    HelloWorld,
    Headline,
    UserSearch
  },

  methods: {
    toggleMode: function() {
      this.darkMode = !this.darkMode;
    }
  },

}
</script>
