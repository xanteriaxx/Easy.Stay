export const createContactPage = () => {
  const section = document.createElement('section')
  section.className = 'page-block'
  section.innerHTML = `
    <h1 class="page-block__title">დაგვიკავშირდით</h1>
  `

  return section
}
