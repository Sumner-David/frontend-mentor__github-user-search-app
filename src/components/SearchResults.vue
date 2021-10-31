<template>
  <div class="p-6 transition-colors rounded-lg shadow-lg sm:p-8 bg-light-white dark:bg-dark-blue-darker">
    <div class="grid w-full h-full grid-cols-5 gap-8">
      <div class="flex-shrink-0 hidden md:block">
        <div class="w-32 h-32 overflow-hidden rounded-full">
          <img :src="userData.avatar_url" class="object-cover w-full h-full" alt="">
        </div>
      </div>

      <div class="col-span-5 space-y-8 md:col-span-4">
        <div class="space-y-8 md:space-y-4">
          <div class="flex items-center justify-between md:items-start">
            <div class="mr-4 sm:mr-8 md:hidden">
              <div class="w-20 h-20 overflow-hidden rounded-full sm:w-24 sm:h-24">
                <img :src="userData.avatar_url"  class="object-cover w-full h-full shadow-xl" alt="">
              </div>
            </div>
            <div class="justify-between w-full md:flex">
              <div>
                <h2 class="font-bold transition-colors sm:text-2xl md:text-3xl dark:text-dark-white">
                  <span v-if="userData.name">
                    {{userData.name}}
                  </span>
                  <span v-else>
                    No Username 😬
                  </span>
                </h2>

                <p class="transition-colors text-light-blue dark:text-dark-blue">
                  @{{userData.login}}
                </p>
              </div>

              <p class="pt-2 mt-2 text-sm transition-colors sm:pt-0 sm:mt-0 sm:text-lg text-light-blue-darker">
                Joined {{joinDate}}
              </p>
            </div>
          </div>

          <div class="transition-colors text-light-blue-darkest dark:text-light-gray">
            <p v-if="userData.bio">
              {{userData.bio}}
            </p>

            <p v-else>
              This Profile has no bio 🤔
            </p>
          </div>
        </div>

        <StatsCollection
          :following = userData.following
          :followers = userData.followers
          :publicRepos = userData.public_repos
        >

        </StatsCollection>


        <LinkSection
          :location = "userData.location"
          :twitter= "userData.twitter_username"
          :github = "userData.html_url"
          :company = "userData.company"
        ></LinkSection>
      </div>

    </div>
  </div>
</template>


<script>

import StatsCollection from '@/components/StatsCollection.vue'
import LinkSection from '@/components/LinkSection.vue'

export default {


  computed: {
    joinDate: function() {
      let date = new Date( this.userData.created_at)
      let formattedDate = date.toLocaleString('default', {day: 'numeric', month: 'long', year: 'numeric'})
      return formattedDate
    }

  },


  components: {
    StatsCollection,
    LinkSection,
  },

  props: {
    userData: {
      type: Object,
    }
  }
}
</script>

<style>

</style>