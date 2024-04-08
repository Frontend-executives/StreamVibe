import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { ArrowButton } from '@/shared/core/ui/arrowButton'

const wrapperClassName = cx(
  //Блочная модель
  'flex gap-[16px]',
  'p-[16px]',

  //Что-то (Дописать)
  'bg-ui-black-6 border-[1px] border-ui-black-12 rounded-r12',
)

export const Switcher = (): ReactElement => {
  return (
    <div className={wrapperClassName}>
      <ArrowButton type='prev' />
      {/* Стилизовать тут */}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <ArrowButton type='next' />
    </div>
  )
}
