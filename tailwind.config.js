const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './index.html',
      './src/**/*.vue',
      './src/styles/*.scss'
    ],

    options: {
      keyframes: true,
      safelist: [
        'type',
        'group-hover:border-opacity-0',
        'bouncy-animation'
      ],
    },
  },

  darkmode: 'class',

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
    },

    extend: {
      colors: {
        'light' : {
          'DEFAULT': 'red',
          'blue': {
            'DEFAULT': '#0079FF',
            'darker': '#697C9A',
            'darkest': '#4B6A9B'
          },
          'black': {
            'DEFAULT': '#2B3442'
          },
          'gray': {
            'DEFAULT': '#F6F8FF'
          },
          'white': {
            'DEFAULT': '#FEFEFE'
          }
        },
        'dark' : {
          'DEFAULT': 'red',
          'blue': {
            'DEFAULT': '#0079FF',
            'darker': '#1E2A47',
          },
          'black': {
            'DEFAULT': '#141D2F'
          },
          'white': {
            'DEFAULT': '#FFFFFF'
          }
        }
      },

      fontFamily: {
        sans: ['Space Mono',  ...defaultTheme.fontFamily.sans]
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
