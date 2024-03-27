import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { Typography } from '@/shared/core/ui/typography'

const headerClassName = cx(
  //* Блочная модель
  'flex justify-between items-end mobile:flex-col mobile:items-start',
  'desktop:gap-100px tablet:gap-20 mobile:gap-2.5',
)
const textClassName = cx(
  //* Оформление
  'text-ui-grey-60',
)
const wrapperClassName = cx(
  //* Блочная модель
  'flex flex-col',
  'desktop:gap-3.5 before-desktop:gap-2.5',
)

type SectionHeaderProps = {
  component?: ReactElement
  text: string
  title: string
}

export const SectionHeader = ({ title, text, component }: SectionHeaderProps): ReactElement => {
  return (
    <header className={headerClassName}>
      <div className={wrapperClassName}>
        <Typography text={title} type='TitleBold' />
        <Typography className={textClassName} text={text} type='TextRegular' />
      </div>
      {component && component}
    </header>
  )
}
