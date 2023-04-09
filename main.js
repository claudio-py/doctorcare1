window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
	showNavOnScroll()
	showBackToTopButton()
}
function showNavOnScroll(){
	if (scrollY > 0) {
		nav.classList.add('scroll')
	} else {
		nav.classList.remove('scroll')
	}
}

function showBackToTopButton(){
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

