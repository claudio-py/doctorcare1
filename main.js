const navigation = document.getElementById('navigation')
window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
	showNavOnScroll()
	showBackToTopButton()
	activateMenuAtCurrentSection(home)
	activateMenuAtCurrentSection(services)
	activateMenuAtCurrentSection(about)
	activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
	const targetLine = scrollY + innerHeight / 2
	const sectionTop = section.offsetTop
	const sectionHeight = section.offsetHeight
	const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop 


const sectionEndsAt = sectionTop + sectionHeight
const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
const sectionId = section.getAttribute('id')
const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
menuElement.classList.remove('active')
if(sectionBoundaries){
menuElement.classList.add('active')
}


}

function showNavOnScroll() {
	if (scrollY > 0) {
		navigation.classList.add('scroll')
	} else {
		navigation.classList.remove('scroll')
	}
}

function showBackToTopButton() {
	if (scrollY > 2000) {
		backToTheTop.classList.add('show')
	} else {
		backToTheTop.classList.remove('show')
	}
}

function openMenu() {
	document.body.classList.add('menu-expanded')
}
function closeMenu() {
	document.body.classList.remove('menu-expanded')
}

// scrollreveal
ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 1000
}).reveal(`
#home, 
#home img,
 #home .stats, 
 #services
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content
 `)
