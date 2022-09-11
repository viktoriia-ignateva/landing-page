/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */


/**
 * Global Variables
 *
 */
let sections = []

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// The function to get the currently active section in the viewport
function getActiveSection() {
  for (let i = 0; i < sections.length; i++) {
    const rect = sections[i].getBoundingClientRect()

    if (rect.top <= 150 && rect.bottom >= 150) {
      return sections[i]
    }
  }
  return null
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// The function to update class of an active section
function updateActiveSection() {
  let activeSection = getActiveSection()
  if (activeSection !== null) {
    for (let section of sections) {
      section.classList.remove('your-active-class')
    }
    activeSection.classList.add('your-active-class')
  }
}

// The function to create a menu of sections
function createMenu() {
  let navNames = []
  let navId = []

  for (let i = 0; i < sections.length; i++) {
    const name = sections[i].attributes.getNamedItem('data-nav').value
    navNames.push(name)
    const id = sections[i].id
    navId.push(id)
  }

  const navItem = document.createDocumentFragment()

  for (let i = 0; i <= navNames.length - 1; i++) {
    const newElement = document.createElement('li')
    const newLink = document.createElement('a')
    newLink.classList.add('menu__link')
    newLink.innerText = navNames[i]
    newLink.href = '#' + navId[i]
    newLink.addEventListener('click', (event) => {
      event.preventDefault()
      document.getElementById(navId[i]).scrollIntoView({ behavior: 'smooth' })
    })
    newElement.appendChild(newLink)
    navItem.appendChild(newElement)
  }

  document.getElementById('navbar__list').appendChild(navItem)
}

/**
 * End Main Functions
 * Begin Events
 *
 */

window.addEventListener('load', () => {
  sections = document.getElementsByTagName('section')

  createMenu()

  updateActiveSection()

  document.addEventListener('scroll', updateActiveSection)
})


