import { cx } from 'class-variance-authority'
import { observer } from 'mobx-react-lite'
import { ReactElement, useMemo } from 'react'

import { QuestionStore } from '@/entities/core/ui/question/stores/QuestionStore'

import { IconMinus } from '@/shared/core/ui/icons/icon-minus'
import { IconPlus } from '@/shared/core/ui/icons/icon-plus'
import { Typography } from '@/shared/core/ui/typography'

const questionClassName = cx(
  //* Блочная модель
  'flex items-start desktop:gap-5 before-desktop:gap-4',
  'desktop:p-34px tablet:p-6 mobile:py-5 mobile:px-2.5',
  //* Позиционирование
  'relative',
)
const orderClassName = cx(
  //* Блочная модель
  'flex items-center justify-center flex-shrink-0',
  'desktop:w-62px desktop:h-68px tablet:w-50px tablet:h-54px mobile:w-42px mobile:h-46px',
  //* Оформление
  'bg-ui-black-12 border-2 border-ui-black-15 rounded-10px',
)
const textClassName = cx(
  //* Оформление
  'text-ui-grey-60',
)
const wrapperClassName = cx(
  //* Блочная модель
  'flex flex-col',
  'desktop:gap-5 tablet:gap-14px mobile:gap-3',
)
const buttonClassName = cx(
  //* Блочная модель
  'flex-shrink-0 ml-auto',
)
const borderClassName = cx(
  //* Блочная модель
  'w-full h-[1px]',
  //* Позиционирование
  'absolute bottom-0 left-0 right-0',
  //* Оформление
  'bg-gradient-to-r from-transparent via-ui-red-45 via-20% to-transparent',
)

type QuestionProps = {
  order: number
  text: string
  title: string
}

export const Question = observer(({ order, title, text }: QuestionProps): ReactElement => {
  const { isOpen, onOpen, onClose } = useMemo(() => new QuestionStore(), [])

  return (
    <li className={questionClassName}>
      <div className={orderClassName}>
        <Typography text={order} type={'faqOrder'} />
      </div>
      <div className={wrapperClassName}>
        <Typography text={title} type={'faqTitle'} />
        {isOpen && <Typography className={textClassName} text={text} type={'faqText'} />}
      </div>
      <button className={buttonClassName} onClick={isOpen ? onClose : onOpen}>
        {isOpen ? <IconMinus /> : <IconPlus />}
      </button>
      {/* TODO: доработать отображение границы по макету */}
      <span className={borderClassName} />
    </li>
  )
})
