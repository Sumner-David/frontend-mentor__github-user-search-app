<template>
  <div class="grid grid-cols-2 gap-8 text-light-blue-darker">

    <div class="flex items-center space-x-4">
      <LocationIcon/>
      <p>
        San francisco
      </p>
    </div>

    <div class="flex items-center space-x-4">
      <TwitterIcon/>
      <p>
        Twitter
      </p>
    </div>

    <div class="flex items-center space-x-4">
      <WebsiteIcon/>
      <p>
        Website
      </p>
    </div>

    <div class="flex items-center space-x-4">
      <CompanyIcon/>
      <p>
        Company
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
  }

}
</script>

<style>

</style>