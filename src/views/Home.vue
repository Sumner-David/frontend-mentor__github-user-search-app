<template>
  <div class="home h-screen flex items-center  bg-light-gray">

    <div class="container space-y-6 max-w-4xl">
      <Headline></Headline>

      <div class="space-y-6 font-sans">
        <div class="">
          <div class="rounded-lg bg-light-white shadow-lg p-3 w-full flex justify-between items-center">
            <div class="w-full flex space-x-6 h-full py-2 pl-4 items-center">
              <SearchIcon styling="h-8 text-light-blue w-auto"></SearchIcon>

              <p class="text-lg">
                Search github username...
              </p>
            </div>

            <button class="py-3 text-lg px-8 flex-shrink-0 text-white font-sans bg-light-blue font-bold rounded-lg">
              Search
            </button>
          </div>
        </div>

        <div class="p-8 bg-light-white rounded-lg shadow-lg">
          <div class="w-full h-full grid grid-cols-5">
            <div class="flex-shrink-0">
              <div class=" rounded-full overflow-hidden h-32 w-32">
                <img src="../assets/octocat.png" class="w-full h-full object-cover" alt="">
              </div>
            </div>

            <div class="col-span-4 space-y-8">
              <div class="space-y-4">
                <div class="flex justify-between">
                  <div>
                    <h2 class="text-3xl font-bold">
                      The Octocat
                    </h2>

                    <p class="text-light-blue">
                      @octocat
                    </p>
                  </div>

                  <p class="text-light-blue-darker pt-2 text-lg">
                    Joined 25 Jan 2011
                  </p>
                </div>

                <div class="text-light-blue-darkest">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                  </p>
                </div>
              </div>

              <StatsCollection></StatsCollection>
              <LinkSection></LinkSection>
            </div>

          </div>
        </div>
      </div>

      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Headline from '@/components/Headline.vue'
import StatsCollection from '@/components/StatsCollection.vue'
import LinkSection from '@/components/LinkSection.vue'

import SearchIcon from '@/components/svg_components/SearchIcon.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Headline,
    StatsCollection,
    SearchIcon,
    LinkSection
  }
}
</script>
