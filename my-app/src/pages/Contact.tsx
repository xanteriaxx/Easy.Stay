import './Contact.css'

const contactDetails = [
  { label: 'Телефон', value: '+995 555 12 34 56' },
  { label: 'Email', value: 'hello@easystay.ge' },
  { label: 'Адрес', value: 'Tbilisi, Georgia' },
] as const

export const ContactPage = () => {
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
        <form className="contact-page__form">
          <div className="contact-page__field-group">
            <label className="contact-page__field-label" htmlFor="contact-name">
              Имя
            </label>
            <input className="contact-page__input" id="contact-name" name="name" type="text" placeholder="Ваше имя" />
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
            />
          </div>

          <button className="contact-page__submit" type="submit">
            Отправить
          </button>
        </form>
      </div>
    </section>
  )
}
