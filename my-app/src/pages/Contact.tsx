import type { FormEvent } from 'react'
import { useState } from 'react'
import './Contact.css'

const contactDetails = [
  { label: 'Телефон', value: '+995 555 12 34 56' },
  { label: 'Email', value: 'hello@easystay.ge' },
  { label: 'Адрес', value: 'Tbilisi, Georgia' },
] as const

interface ContactFormState {
  name: string
  phone: string
  email: string
  message: string
}

export const ContactPage = () => {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }))
    setIsSubmitted(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="contact-page">
      <div className="contact-page__panel">
        <p className="contact-page__eyebrow">Easy Stay</p>
        <h1 className="contact-page__title">დაგვიკავშირდით</h1>
        <p className="contact-page__copy">
          თუ გაქვს კითხვა დაჯავშნაზე, ნომრებზე ან სპეციალურ შეთავაზებებზე, მოგვწერე და ჩვენი გუნდი მალე
          დაგიბრუნდება.
        </p>

        <div className="contact-page__details">
          {contactDetails.map((item) => (
            <div key={item.label} className="contact-page__detail">
              <span className="contact-page__detail-label">{item.label}</span>
              <p className="contact-page__detail-value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-page__form-card">
        <form className="contact-page__form" onSubmit={handleSubmit}>
          <div className="contact-page__field-group">
            <label className="contact-page__field-label" htmlFor="contact-name">
              Имя
            </label>
            <input
              className="contact-page__input"
              id="contact-name"
              name="name"
              type="text"
              placeholder="Ваше имя"
              value={form.name}
              onChange={(event) => handleChange('name', event.target.value)}
            />
          </div>

          <div className="contact-page__field-group">
            <label className="contact-page__field-label" htmlFor="contact-phone">
              Телефон
            </label>
            <input
              className="contact-page__input"
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="+995 5XX XX XX XX"
              value={form.phone}
              onChange={(event) => handleChange('phone', event.target.value)}
            />
          </div>

          <div className="contact-page__field-group">
            <label className="contact-page__field-label" htmlFor="contact-email">
              Email
            </label>
            <input
              className="contact-page__input"
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(event) => handleChange('email', event.target.value)}
            />
          </div>

          <div className="contact-page__field-group">
            <label className="contact-page__field-label" htmlFor="contact-message">
              Сообщение
            </label>
            <textarea
              className="contact-page__textarea"
              id="contact-message"
              name="message"
              placeholder="Напишите ваш вопрос или пожелание"
              value={form.message}
              onChange={(event) => handleChange('message', event.target.value)}
            />
          </div>

          <button className="contact-page__submit" type="submit">
            Отправить
          </button>

          {isSubmitted ? <p className="contact-page__success">Спасибо! Мы скоро свяжемся с вами.</p> : null}
        </form>
      </div>
    </section>
  )
}
