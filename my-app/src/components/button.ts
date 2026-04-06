type ButtonVariant = 'primary' | 'secondary'

type ButtonOptions = {
  label: string
  variant: ButtonVariant
  href?: string
  type?: 'button' | 'submit' | 'reset'
}

export const createButton = ({
  label,
  variant,
  href,
  type = 'button',
}: ButtonOptions): HTMLElement => {
  const className = `button button--${variant}`

  if (href) {
    const link = document.createElement('a')
    link.className = className
    link.href = href
    link.textContent = label
    return link
  }

  const button = document.createElement('button')
  button.className = className
  button.type = type
  button.textContent = label
  return button
}
