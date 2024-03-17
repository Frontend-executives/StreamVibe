'use client'

import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { Question } from '@/entities/core/ui/question'

import { Button } from '@/shared/core/ui/button'
import { SectionHeader } from '@/shared/core/ui/section-header'

const sectionClassName = cx(
  //* Блочная модель
  'flex flex-col',
  'desktop:gap-20 tablet:gap-60px mobile:gap-10',
)
const listClassName = cx(
  //* Блочная модель
  'grid grid-cols-2 mobile:grid-cols-1',
  'desktop:gap-x-20 tablet:gap-x-10',
)

export const Faq = (): ReactElement => {
  return (
    <section className={sectionClassName}>
      <SectionHeader
        component={<Button onClick={() => {}} text={'Ask a Question'} type={'primary'} />}
        text={
          // eslint-disable-next-line max-len
          'Got questions? We have got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.'
        }
        title={'Frequently Asked Questions'}
      />
      <ul className={listClassName}>
        {/* TODO - сложить в массив и промапить */}
        <Question
          order={1}
          text={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
          title={'What is StreamVibe?'}
        />
        <Question
          order={2}
          text={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
          title={'What is StreamVibe?'}
        />
        <Question
          order={3}
          text={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
          title={'What is StreamVibe?'}
        />
        <Question
          order={4}
          text={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
          title={'What is StreamVibe?'}
        />
        <Question
          order={5}
          text={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
          title={'What is StreamVibe?'}
        />
        <Question
          order={6}
          text={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
          title={'What is StreamVibe?'}
        />
        <Question
          order={7}
          text={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
          title={'What is StreamVibe?'}
        />
        <Question
          order={8}
          text={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
          title={'What is StreamVibe?'}
        />
      </ul>
    </section>
  )
}
