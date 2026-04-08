export type ButtonVariant = 'primary' | 'secondary'

export type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonOptions {
  label: string
  variant: ButtonVariant
  href?: string
  type?: ButtonType
}

export interface CardItem {
  eyebrow: string
  title: string
  description: string
  meta: string
  linkLabel: string
  linkHref: string
}

export type HotelCardFeatureTriple = [string, string, string]

export interface HotelCardItem {
  imageUrl: string
  rating: string
  title: string
  location: string
  date: string
  price: string
  priceSuffix: string
  features: HotelCardFeatureTriple
}

export interface PostCardItem {
  imageUrl: string
  date: string
  readTime: string
  title: string
  description: string
}

export interface WhyUsItem {
  title: string
  description: string
}
