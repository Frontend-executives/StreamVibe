import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { Typography } from '@/shared/core/ui/typography'

const headerClassName = cx(
  //* Блочная модель
  'flex flex-col',
  'desktop:gap-3.5 before-desktop:gap-2.5',
)
const textClassName = cx(
  //* Оформление
  'text-ui-grey-60',
)

type SectionHeaderProps = {
  text: string
  title: string
}

export const SectionHeader = ({ title, text }: SectionHeaderProps): ReactElement => {
  return (
    <header className={headerClassName}>
      <Typography text={title} type={'TitleBold'} />
      <Typography className={textClassName} text={text} type={'TextRegular'} />
    </header>
  )
}
