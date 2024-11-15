/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playwrite: ['Playwrite SK', 'sans-serif'],
        pridi: ['Pridi', 'sans-serif'],
        monserat : ['Monserat', 'sans-serif']
      },
      colors : {
        'primary-color' : '#23A6F0',
        'secondary-color-1' : '#23856D',
        'secondary-color-2' : '#3C403D',
        'dark-background' : '#252B42',
        'light-color' : '#FFFFFF',
        'succes-color' : '#2DC071',
        'alert-color' : '#E77C40',
        'alert-color' : '#E77C40',
        'danger-color' : '#E74040',
        'danger-color' : '#E74040',
        'hover-color' : '#2A7CC7',
        'disabled-text' : '#8EC2F2',
        'secondary-text-1' : '#40BB15',
        'secondary-text-2' : '#3C403D',
        'text-color' : '#3C403D',
        'second-text-color' : '#252B42',
        'light-text-color' : '#737373',
        'success-text-color' : '#2DC071',
        'alert-text-color' : '#E77C40',
        'danger-text-color' : '#E74040',
        'hover-text-color' : '#2A7CC7',
        'disabled-element-color' : '#8EC2F2',
        'muted-color' : '#BDBDBD',
        'light-gray-1' : '#FAFAFA',
        'light-gray-2' : '#ECECEC',
        'faded-primary' : '#B2E3FF',
        'faded-secondary' : '#B9EAA7',
        'faded-secondary-2' : '#FFDCD1',
        'light-color' : '#FFFFFF',
      }
    },
  },
  plugins: [],
}
