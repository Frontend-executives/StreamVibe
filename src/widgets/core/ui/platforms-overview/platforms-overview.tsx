import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { Platform } from '@/entities/core/ui/platform'

import { SectionHeader } from '@/shared/core/ui/section-header'

const sectionClassName = cx(
  //* Блочная модель
  'flex flex-col',
  'desktop:gap-20 tablet:gap-60px mobile:gap-10',
)
const listClassName = cx(
  //* Блочная модель
  'grid',
  'desktop:gap-30px before-desktop:gap-5',
  'desktop:grid-cols-3 before-desktop:grid-cols-1',
)

export const PlatformsOverview = (): ReactElement => {
  return (
    <section className={sectionClassName}>
      <SectionHeader
        text={
          // eslint-disable-next-line max-len
          'With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.'
        }
        title={'We Provide you streaming experience across various devices.'}
      />
      <ul className={listClassName}>
        {/* TODO - сложить в массив и промапить */}
        <Platform
          icon={'/icons/smartphone.svg'}
          text={
            // eslint-disable-next-line max-len
            'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
          }
          title={'Smartphones'}
        />
        <Platform
          icon={'/icons/tablet.svg'}
          text={
            // eslint-disable-next-line max-len
            'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
          }
          title={'Tablet'}
        />
        <Platform
          icon={'/icons/smart-tv.svg'}
          text={
            // eslint-disable-next-line max-len
            'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
          }
          title={'Smart TV'}
        />
        <Platform
          icon={'/icons/laptop.svg'}
          text={
            // eslint-disable-next-line max-len
            'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
          }
          title={'Laptops'}
        />
        <Platform
          icon={'/icons/console.svg'}
          text={
            // eslint-disable-next-line max-len
            'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
          }
          title={'Gaming Consoles'}
        />
        <Platform
          icon={'/icons/vr.svg'}
          text={
            // eslint-disable-next-line max-len
            'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
          }
          title={'VR Headsets'}
        />
      </ul>
    </section>
  )
}
