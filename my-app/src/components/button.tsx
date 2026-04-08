import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import type { ButtonOptions } from '../types'

type ButtonProps = ButtonOptions &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export const Button = ({ label, variant, href, type = 'button', ...props }: ButtonProps) => {
  const className = `button button--${variant}`

  if (href) {
    return (
      <a className={className} href={href} {...props}>
        {label}
      </a>
    )
  }

  return (
    <button className={className} type={type} {...props}>
      {label}
    </button>
  )
}
