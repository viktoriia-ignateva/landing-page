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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let sections = []

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function getActiveSection() {
  for (let i = 0; i < sections.length; i++) {
    const rect = sections[i].getBoundingClientRect()

    if (rect.top <= 150 && rect.bottom >= 150) {
      return sections[i]
    }
  }
  return null
}

function updateActiveSection() {
  let activeSection = getActiveSection()
  if (activeSection !== null) {
    for (let section of sections) {
      section.classList.remove('your-active-class')
    }
    activeSection.classList.add('your-active-class')
  }
}

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
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
window.addEventListener('load', () => {
  sections = document.getElementsByTagName('section')

  createMenu()

  updateActiveSection()

  document.addEventListener('scroll', updateActiveSection)
})

// Scroll to section on link click

// Set sections as active


