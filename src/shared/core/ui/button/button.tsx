import { cva, VariantProps } from 'class-variance-authority'
import { ReactElement } from 'react'

const buttonClassName = cva(
  [
    //* Блочная модель
    'flex gap-1 items-center justify-center',
    //* Оформление
    'rounded-lg disabled:bg-ui-grey-60 disabled:pointer-events-none select-none',
    //* Типографика
    'desktop:text-lg before-desktop:text-sm',
    //* Анимация
    'active:scale-95 transition-all',
  ],
  {
    variants: {
      type: {
        primary: 'bg-ui-red-45 hover:bg-ui-red-50 active:bg-ui-red-55',
        secondary: 'bg-ui-black-8 hover:bg-ui-black-10 active:bg-ui-black-12 border border-ui-black-15',
      },
      isLoading: {
        true: 'animate-pulse',
        false: '',
      },
      isOnlyIcon: {
        true: 'p-3',
        false: 'px-6 before-desktop:py-3.5 desktop:py-18px',
      },
    },
    defaultVariants: {
      type: 'primary',
      isLoading: false,
      isOnlyIcon: false,
    },
  },
)

type BaseButtonProps = {
  isDisabled?: boolean
  isLoading?: boolean
  onClick: VoidFunction
  type: 'primary' | 'secondary'
} & VariantProps<typeof buttonClassName>

type ButtonWithIcon = BaseButtonProps & {
  icon: ReactElement
  text?: never
}

type ButtonWithText = BaseButtonProps & {
  icon?: never
  text: string
}

type ButtonWithIconAndText = BaseButtonProps & {
  icon: ReactElement
  text: string
}

type ButtonProps = ButtonWithIcon | ButtonWithText | ButtonWithIconAndText

export const Button = ({
  text,
  isLoading = false,
  isDisabled = false,
  icon,
  type,
  onClick,
}: ButtonProps): ReactElement => {
  const isOnlyIcon = Boolean(icon) && !text

  return (
    <button
      className={buttonClassName({ type, isLoading, isOnlyIcon })}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {icon && icon}
      {text && text}
    </button>
  )
}
