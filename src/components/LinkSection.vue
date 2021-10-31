<template>
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 text-light-blue-darker dark:text-light-gray">

    <div class="flex items-center space-x-4">
      <LocationIcon/>
      <p v-if="location">
        {{location}}
      </p>

      <p class="disabled"
        v-else
      >
        No Location
      </p>
    </div>

    <div class="flex items-center space-x-4">
      <TwitterIcon/>

      <a class="block" :href="twitterLink" v-if="twitter" target="_blank" rel="noreferrer" aria-label="To Twitter">
        {{twitter}}
      </a>

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
        <a v-if="github" :href="github" class="hover:underline" target="_blank" rel="noreferrer" aria-label="To github Link">
          {{githubLink}}
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
      },
      github: {
        type: String,
      },
      company: {
        type: String,
      },
      location: {
        type: String,
      },
    },

    updated() {
      console.log(this.company)
    },

    computed: {
      hasTwitter: function() {
        if(this.twitter) {
          return true
        } else {
          return false
        }
      },

      githubLink: function() {
        const githubURL = "https://github.com/";
        return this.github.replace(githubURL, '')
      },

      twitterLink: function() {
        const twitterURL = "https://twitter.com/";
        return twitterURL + this.twitter;
      }
    }
  }
</script>