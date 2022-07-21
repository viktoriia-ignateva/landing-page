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
let sections

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



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
    let nuvNames = []

    for (let i = 0; i < sections.length; i++) {
        const attr = sections[i].attributes.getNamedItem("data-nav").value;
        nuvNames.push(attr);
    }

    const navItem = document.createDocumentFragment();

    for (let i = 0; i <= nuvNames.length-1; i++) {
        const newElement = document.createElement('li');
        newElement.innerText = nuvNames[i];
        navItem.appendChild(newElement);
    }

    document.getElementById("navbar__list").appendChild(navItem);
});

// Scroll to section on link click

// Set sections as active
document.addEventListener("scroll", function() {
    for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect()

        if (rect.top <= 150 && rect.bottom >= 150) {
            console.log("active section" + i)
        }
    }
});


