function mobileNav() {

	const navBtn = document.querySelector('.mobilenav-btn');
	const nav = document.querySelector('.mobile-nav');
	const navLinks = document.querySelectorAll('.mobile-nav__list a');
	const menuText = document.querySelector('.mobilenav-text');
	const iconCamera = document.querySelector('.icon-camera');
	const iconClose = document.querySelector('.icon-close');
	const backdrop = document.querySelector('.mobile-nav__backdrop');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		backdrop.classList.toggle('mobile-nav__backdrop--active');
		document.body.classList.toggle('no-scroll');

		if (nav.classList.contains('mobile-nav--open')) {
			menuText.textContent = 'Zamknij';
			navBtn.classList.add('mobilenav-btn--active');
			iconCamera.style.visibility = 'none';
			iconClose.style.display = 'inline';
		} else {
			menuText.textContent = 'Menu';
			navBtn.classList.remove('mobilenav-btn--active');
			iconCamera.style.display = 'inline';
			iconClose.style.display = 'none';
		}
	};

	navLinks.forEach(link => {
		link.onclick = function () {
			nav.classList.remove('mobile-nav--open');
			backdrop.classList.remove('mobile-nav__backdrop--active');
			document.body.classList.remove('no-scroll');
			menuText.textContent = 'Menu';
			navBtn.classList.remove('mobilenav-btn--active');
			iconCamera.style.display = 'inline';
			iconClose.style.display = 'none';
		};
	});
}

export default mobileNav;