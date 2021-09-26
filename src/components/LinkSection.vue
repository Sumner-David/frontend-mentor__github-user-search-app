<template>
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 text-light-blue-darker">

    <div class="flex items-center space-x-4">
      <LocationIcon/>
      <p v-if="location">
        {{location}}
      </p>

      <p
        class="disabled"
        v-else
      >
        No Location
      </p>
    </div>

    <div class="flex items-center space-x-4">
      <TwitterIcon/>

      <p v-if="twitter" >
        {{twitter}}
      </p>

      <p
        class="disabled"
        v-else
      >
        Not Available
      </p>
    </div>

    <div class="flex items-center space-x-4">
      <WebsiteIcon/>
      <div>
        <a v-if="githubUrl" :href="githubUrl" class="hover:underline">
          {{githubUrl}}
        </a>

        <p
          class="disabled"
          v-else
        >
          No github Found?
        </p>
      </div>
    </div>

    <div class="flex items-center space-x-4">
      <CompanyIcon/>
      <p v-if="company">
        {{company}}
      </p>

      <p
        class="disabled"
        v-else
      >
        No affiliation
      </p>
    </div>
  </div>
</template>

<script>

import LocationIcon from '@/components/svg_components/LocationIcon'
import WebsiteIcon from '@/components/svg_components/WebsiteIcon'
import TwitterIcon from '@/components/svg_components/TwitterIcon'
import CompanyIcon from '@/components/svg_components/CompanyIcon'


export default {
  components: {
    LocationIcon,
    WebsiteIcon,
    TwitterIcon,
    CompanyIcon,
  },

  props: {
    twitter: {
      type: String,
      default: 'Repos'
    },
    githubUrl: {
      type: String,
      default: 'https://github.blog'
    },
    company: {
      type: String,
      default: 'No company'
    },
    location: {
      type: String,
      default: 'San Francisco'
    },
  },

  updated() {
    console.log(this.githubUrl.length > 1)
  },


  computed: {
    hasTwitter: function() {
      if(this.twitter) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>

</style>