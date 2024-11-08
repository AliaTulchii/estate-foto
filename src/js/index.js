
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
});

import mobileNav from './modules/mobile-nav.js';
mobileNav();

import cookies from './modules/cookies.js';
cookies();

import heroAnimation from './modules/heroAnimation.js';
heroAnimation();

import scrollImg from './modules/lensAnimation.js';
scrollImg()

import scroll from './modules/swiperOpinions.js';
scroll();

import reliseScroll from './modules/relise/reliseScroll.js';
reliseScroll()

import reliseMiniSlider from './modules/relise/reliseMiniSlider.js';
reliseMiniSlider()

import requiredInput from './modules/requiredInput.js';
requiredInput()

import contactAnimation from './modules/contactAnimation.js';
contactAnimation();

import formValidation from './modules/formValidation.js';
formValidation();


