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
        '10px': '10px',
      },
      width: {
        '30px': '30px',
        '42px': '42px',
        '50px': '50px',
        '62px': '62px',
        '116px': '116px',
        '166px': '166px',
        '200px': '200px',
        '300px': '300px',
        '470px': '470px',
      },
      height: {
        '30px': '30px',
        '36px': '36px',
        '46px': '46px',
        '50px': '50px',
        '54px': '54px',
        '60px': '60px',
        '68px': '68px',
        '200px': '200px',
        '300px': '300px',
        '470px': '470px',
      },
      gap: {
        '14px': '14px',
        '30px': '30px',
        '60px': '60px',
        '100px': '100px',
        '120px': '120px',
        '150px': '150px',
      },
      padding: {
        '18px': '18px',
        '22px': '22px',
        '34px': '34px',
        '46px': '46px',
        '50px': '50px',
        '120px': '120px',
        '150px': '150px',
        '162px': '162px',
        '196px': '196px',
      },
      margin: {
        '30px': '30px',
        '50px': '50px',
        '100px': '100px',
        '130px': '130px',
        '150px': '150px',
      },
    },
  },
  plugins: [],
}
export default config
