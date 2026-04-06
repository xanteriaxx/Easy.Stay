export const createAboutPage = () => {
  const section = document.createElement('section')
  section.className = 'page-block'
  section.innerHTML = `
    <h1 class="page-block__title">ჩვენი შესახებ</h1>
  `

  return section
}
