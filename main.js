function onScroll() {
	if (scrollY > 0) {
		nav.classList.add('scroll')
	} else {
		nav.classList.remove('scroll')
	}
}
function openMenu() {
	document.body.classList.add('menu-expanded')
}
function closeMenu() {
	document.body.classList.remove('menu-expanded')
}

// scrolreveal
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
