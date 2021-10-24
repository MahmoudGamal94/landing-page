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
//get all sections 
const getSections = document.querySelectorAll('section')

//get navbar element
const getNavList = document.getElementById('navbar__list')


                                            // start Build Navbar//

//  build navbar according to sections 

    let navBar = '';

    // looping through getSections list 

    getSections.forEach(sectionElement => {
        navBar += `<li class='menu__link ${sectionElement.className}' data-link=${sectionElement.id}><a href="#${sectionElement.id}">${sectionElement.dataset.nav}</li>`;
    });
    // append all navBar <li> elements to the getNavList <ul> element 

    getNavList.innerHTML = navBar;

//  build navbar according to sections 

                                                // End Build Navbar //


                                                 // Start Scrolling //

// scrolling to section according to nav link clicked

getNavList.addEventListener('click', event => {
    event.preventDefault();
    let parent = ""
    if(event.target.hasAttribute('data-link')){
        parent= event.target;
    } else{
        parent=event.target.parentElement;
    }

    //// Smooth scroll to anchor ID using scrollTO event

    let scrollTO = document.getElementById(parent.dataset.link)
    scrollTO.scrollIntoView({block: 'start', behavior: 'smooth'})
  })

//  scrolling to section according to nav link clicked

                                                   // End Scrolling //

                                        // Start Add Active//

// Add using the IntersectionObserver pattern
  
  // Setting an observer with options and Callback 
  // for class 'active' to section when near top of viewport and remove active from other sections

  const observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
      let navElement = document.querySelector(
        `.menu__link[data-link='${entry.target.id}']`,
      )
      let targetSection = document.getElementById(entry.target.id)
  
      if (entry && entry.isIntersecting) {
        navElement.classList.add('your-active-class')
        targetSection.classList.add('your-active-class')
      } else {
        if (navElement.classList.contains('your-active-class')) {
          navElement.classList.remove('your-active-class')
        }
  
        if (targetSection.classList.contains('your-active-class')) {
          targetSection.classList.remove('your-active-class')
        }
      }
    })
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  })
  getSections.forEach(el => {
    observer.observe(document.getElementById(el.id))
  })

                                            // End Add Active

                                            // Start Top Btn
                                            
// When the user clicks on the button, page is scrolled to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

                                             // End Top Btn

  