function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobilenav-btn');
	const nav = document.querySelector('.mobile-nav');
	// const menuIcon = document.querySelector('.mobilenav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		// menuIcon.classList.toggle('mobilenav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;