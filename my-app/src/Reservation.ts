export const createReservationPage = () => {
  const section = document.createElement('section')
  section.className = 'page-block'
  section.innerHTML = `
    <h1 class="page-block__title">დაჯავშნა</h1>
  `

  return section
}
