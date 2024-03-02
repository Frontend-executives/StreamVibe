import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      mobile: { max: '767px' },
      tablet: { min: '768px', max: '1439px' },
      desktop: { min: '1440px' },
    },
  },
  plugins: [],
}
export default config
