import { cva, cx, VariantProps } from 'class-variance-authority'
import { createElement, ReactElement } from 'react'

const typographyClassName = cva('leading-normal font-normal antialiased', {
  variants: {
    type: {
      HeadingBold: 'font-bold desktop:text-58px tablet:text-48px mobile:text-28px',
      TitleBold: 'font-bold desktop:text-38px tablet:text-28px mobile:text-24px',
      TextRegular: 'desktop:text-18px tablet:text-16px mobile:text-14px',
      SubtitleBold: 'font-semibold desktop:text-24px tablet:text-20px mobile:text-18px',
      faqOrder: 'font-semibold desktop:text-20px before-desktop:text-16px',
      faqTitle: 'font-medium desktop:text-22px tablet:text-20px mobile:text-18px',
      faqText: 'desktop:text-18px tablet:text-16px mobile:text-14px',
      footerCaption: 'desktop:text-18px before-desktop:text-14px',
    },
  },
})

type TypographyProps = {
  className?: string
  element?: 'p' | 'span' | 'label' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  text: string | number
  type:
    | 'HeadingBold'
    | 'TitleBold'
    | 'TextRegular'
    | 'SubtitleBold'
    | 'faqOrder'
    | 'faqTitle'
    | 'faqText'
    | 'footerCaption'
} & VariantProps<typeof typographyClassName>

export const Typography = ({ text, element = 'p', type, className }: TypographyProps): ReactElement => {
  return createElement(
    element,
    {
      className: cx(typographyClassName({ type }), className),
    },
    text,
  )
}
