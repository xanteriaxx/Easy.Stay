import { useEffect, useState } from 'react'
import { Search } from '../components/Search'
import './Offers.css'

const API_BASE_URL = 'https://69d608741c120e733ccd7cb2.mockapi.io/easystay'
const OFFERS_ENDPOINT = 'offers'

interface ApiOffer {
  id: string
  title?: string
  name?: string
  description?: string
  image?: string
  imageUrl?: string
  price?: string
  location?: string
}

export const OffersPage = () => {
  const [offers, setOffers] = useState<ApiOffer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(`${API_BASE_URL}/${OFFERS_ENDPOINT}`)

        if (!response.ok) {
          throw new Error('Failed to fetch offers')
        }

        const data: ApiOffer[] = await response.json()
        setOffers(data)
      } catch (fetchError) {
        const message = fetchError instanceof Error ? fetchError.message : 'Unknown error'
        setError(message)
      } finally {
        setLoading(false)
      }
    }

    fetchOffers()
  }, [])

  return (
    <section className="offers-page">
      <div className="offers-page__header">
        <h1 className="offers-page__title">ბოლო წუთის გარიგებები</h1>

        <div className="offers-page__search">
          <Search />
        </div>

        <p className="offers-page__copy"></p>
      </div>

      {loading ? <p className="offers-page__state">იტვირთება...</p> : null}
      {error ? <p className="offers-page__state offers-page__state--error">{error}</p> : null}

      {!loading && !error ? (
        <div className="offers-page__grid">
          {offers.map((offer) => (
            <article key={offer.id} className="offers-page__card">
              {offer.imageUrl || offer.image ? (
                <img
                  className="offers-page__image"
                  src={offer.imageUrl ?? offer.image}
                  alt={offer.title ?? offer.name ?? 'Offer'}
                />
              ) : null}

              <div className="offers-page__body">
                <h2 className="offers-page__card-title">{offer.title ?? offer.name ?? 'Untitled offer'}</h2>
                <p className="offers-page__card-copy">{offer.description ?? 'Description is not available yet.'}</p>

                <div className="offers-page__meta">
                  {offer.location ? <span>{offer.location}</span> : null}
                  {offer.price ? <span>{offer.price}</span> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  )
}
