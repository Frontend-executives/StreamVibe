import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    screens: {
      mobile: { max: '767px' },
      'after-mobile': { min: '768px' },
      tablet: { min: '768px', max: '1439px' },
      'before-desktop': { max: '1439px' },
      desktop: { min: '1440px' },
    },
    extend: {
      colors: {
        'ui-grey': {
          60: '#999999',
          75: '#BFBFBF',
          90: '#E4E4E7',
          95: '#F1F1F3',
        },
        'ui-black': {
          0: '#0F0F0F',
          6: '#0F0F0F',
          8: '#141414',
          10: '#1A1A1A',
          12: '#1F1F1F',
          15: '#262626',
          20: '#333333',
        },
        'ui-red': {
          10: '#200e0e',
          45: '#E50000',
          50: '#FF0000',
          55: '#FF1A1A',
        },
      },
      borderRadius: {
        r10: '10px',
      },
    },
  },
  plugins: [],
}
export default config
