<template>
  <div class="space-y-6 font-sans">
    <SearchBar @searchUser = "lookupUser"></SearchBar>
    <SearchResults :userData = "userData"></SearchResults>
  </div>
</template>

<script>

import SearchBar from '@/components/SearchBar.vue'
import SearchResults from '@/components/SearchResults.vue'


export default {

  data() {
    return {
      userData: {
        name: 'The Ocotcat',
        login: '@octocat',
        avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
        created_at: '25 Jan 2011'
      }
    }
  },

  components: {
    SearchBar,
    SearchResults
  },

  methods: {
    async lookupUser(event) {
      console.log(`The user to search is ${event}`)

      let githubUrl = 'https://api.github.com'
      let userSearched = `/users/${event}`
      let searchQuery = githubUrl + userSearched

      await fetch(searchQuery, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then( (response) => {
        return response = response.json()
      }).then( response => {
        return this.userData = response
      } ).catch(err => console.log(err.message));
    }

  },

  updated() {
    console.log('The change is')
    console.log(this.userData.location)
  }
}
</script>

<style>

</style>