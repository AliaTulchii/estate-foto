// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

import scrollImg from './modules/scrollImg.js';
scrollImg()

import scroll from './modules/scroll.js';
scroll();

import reliseScroll from './modules/relise/reliseScroll.js';
reliseScroll()

import reliseMiniSlider from './modules/relise/reliseMiniSlider.js';
reliseMiniSlider()

// import heroAnimation from './modules/animation.js';
// heroAnimation();

// window.onload = heroAnimation;