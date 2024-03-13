import { cva, cx, VariantProps } from 'class-variance-authority'
import { createElement, ReactElement } from 'react'

const typographyClassName = cva('leading-normal', {
  variants: {
    type: {
      HeadingBold: 'desktop:text-[58px] tablet:text-[48px] mobile:text-[28px] font-bold',
      TitleBold: 'desktop:text-[38px] tablet:text-[28px] mobile:text-[24px] font-bold',
      TextRegular: 'desktop:text-[18px] tablet:text-[16px] mobile:text-[14px] font-normal',
      SubtitleBold: 'font-semibold desktop:text-[24px] tablet:text-[20px] mobile:text-[18px] font-normal',
    },
  },
})

type TypographyProps = {
  className?: string
  element?: 'p' | 'span' | 'label' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  text: string
  type: 'HeadingBold' | 'TitleBold' | 'TextRegular' | 'SubtitleBold'
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
