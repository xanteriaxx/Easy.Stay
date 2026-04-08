import homeImageUrl from '../assets/home/pic.svg'
import type { CardItem, HotelCardItem, PostCardItem, WhyUsItem } from '../types'

export const featureCards: readonly CardItem[] = [
  {
    eyebrow: 'Easy Stay',
    title: 'Flexible booking',
    description: 'Plan your stay with simple reservation rules and clear conditions for every room.',
    meta: 'Updated today',
    linkLabel: 'View details',
    linkHref: '#/reservation',
  },
  {
    eyebrow: 'Destinations',
    title: 'Comfort in every city',
    description: 'Discover spaces designed for business trips, weekends, and longer family stays.',
    meta: '12 locations',
    linkLabel: 'About us',
    linkHref: '#/about',
  },
  {
    eyebrow: 'Support',
    title: 'Stay connected',
    description: 'Reach our team anytime for booking help, local recommendations, and travel questions.',
    meta: '24/7 support',
    linkLabel: 'Contact',
    linkHref: '#/contact',
  },
] as const

export const popularHotelCards: readonly HotelCardItem[] = [
  {
    imageUrl: homeImageUrl,
    rating: '4.9',
    title: 'Panorama Suite',
    location: 'Tbilisi, Georgia',
    date: 'Available all week',
    price: '$120',
    priceSuffix: '/ night',
    features: ['1 king bed', '2 guests', '45 m²'],
  },
  {
    imageUrl: homeImageUrl,
    rating: '4.8',
    title: 'City Light Room',
    location: 'Batumi, Georgia',
    date: 'Free cancellation',
    price: '$95',
    priceSuffix: '/ night',
    features: ['2 beds', '3 guests', '38 m²'],
  },
  {
    imageUrl: homeImageUrl,
    rating: '4.7',
    title: 'Garden Retreat',
    location: 'Kutaisi, Georgia',
    date: 'Breakfast included',
    price: '$110',
    priceSuffix: '/ night',
    features: ['1 queen bed', '2 guests', '42 m²'],
  },
] as const

export const blogPostCards: readonly PostCardItem[] = [
  {
    imageUrl: homeImageUrl,
    date: 'Apr 7, 2026',
    readTime: '5 min read',
    title: 'How to choose the right room for your trip',
    description: 'A quick guide to matching room types with your travel plans, budget, and comfort needs.',
  },
  {
    imageUrl: homeImageUrl,
    date: 'Apr 5, 2026',
    readTime: '4 min read',
    title: 'Weekend stay checklist',
    description: 'Simple things to prepare before your trip so check-in and relaxation both go smoothly.',
  },
  {
    imageUrl: homeImageUrl,
    date: 'Apr 1, 2026',
    readTime: '6 min read',
    title: 'What makes a hotel feel like home',
    description: 'From location to little details, here is what guests value most in a memorable stay.',
  },
] as const

export const whyUsItems: readonly WhyUsItem[] = [
  {
    title: 'სწრაფი დაჯავშნა',
    description: 'მარტივი პროცესი და გასაგები პირობები, რომ ოთახი რამდენიმე ნაბიჯში შეარჩიო.',
  },
  {
    title: 'სანდო არჩევანი',
    description: 'ყოველი შეთავაზება აღწერილია დეტალურად, რათა არჩევანი მშვიდად და თავდაჯერებით გააკეთო.',
  },
  {
    title: 'მხარდაჭერა 24/7',
    description: 'ჩვენი გუნდი მზად არის დაგეხმაროს როგორც დაჯავშნამდე, ისე დარჩენის განმავლობაში.',
  },
] as const
