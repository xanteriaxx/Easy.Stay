import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import type { ButtonOptions } from '../types'

type ButtonProps = ButtonOptions &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export const Button = ({ label, variant, href, type = 'button', className, ...props }: ButtonProps) => {
  const buttonClassName = ['button', `button--${variant}`, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a className={buttonClassName} href={href} {...props}>
        {label}
      </a>
    )
  }

  return (
    <button className={buttonClassName} type={type} {...props}>
      {label}
    </button>
  )
}
