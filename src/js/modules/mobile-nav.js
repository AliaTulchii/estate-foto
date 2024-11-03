function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobilenav-btn');
	const nav = document.querySelector('.mobile-nav');
	const navLinks = document.querySelectorAll('.mobile-nav__list a');
	const menuText = document.querySelector('.mobilenav-text');
	// const menuIcon = document.querySelector('.mobilenav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		// menuIcon.classList.toggle('mobilenav-icon--active');
		document.body.classList.toggle('no-scroll');

		if (nav.classList.contains('mobile-nav--open')) {
			menuText.textContent = 'Zamknij';
			navBtn.classList.add('mobilenav-btn--active');
		} else {
			menuText.textContent = 'Menu';
			navBtn.classList.remove('mobilenav-btn--active');
		}
	};

	navLinks.forEach(link => {
		link.onclick = function () {
			nav.classList.remove('mobile-nav--open');
			document.body.classList.remove('no-scroll');
			menuText.textContent = 'Menu';
			navBtn.classList.remove('mobilenav-btn--active');
		};
	});
}

export default mobileNav;