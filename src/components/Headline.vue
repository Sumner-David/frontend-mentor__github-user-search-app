<template>
  <div :class="isDarkMode">
    <div class="flex flex-wrap justify-between font-sans font-bold">
      <h1 class="py-2 pr-2 text-3xl font-bold transition-colors text-light-black dark:text-dark-white">
        Dev Finder
      </h1>

      <button v-if="!darkMode" @click="toggleModes" class="flex items-center space-x-6">
        <p class="text-xl font-semibold">
          Dark
        </p>

        <p>
          <MoonIcon styling="text-light-blue-darker w-6 h-6"></MoonIcon>
        </p>
      </button>

      <button v-else @click="toggleModes" class="flex items-center space-x-6 text-dark-white">
        <p class="text-xl font-semibold">
          Light
        </p>

        <p>
          <SunIcon styling="w-6 h-6"></SunIcon>
        </p>
      </button>

    </div>
  </div>
</template>

<script>
  import MoonIcon from '@/components/svg_components/MoonIcon'
  import SunIcon from '@/components/svg_components/SunIcon'

  export default {
    components: {
      MoonIcon,
      SunIcon
    },

    props: {
      darkMode: {
        type: Boolean,
        default: true
      }
    },

    computed: {
      isDarkMode: function() {
        if (this.darkMode) {
          return 'dark'
        } else
        return ''
      },
    },

    methods: {
      toggleModes: function() {
        console.log('toggleMode clicked')
        this.$emit('toggleMode')
      }
    }
  }
</script>