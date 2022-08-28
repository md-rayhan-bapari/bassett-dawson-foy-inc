// ================= Responsive JS =================
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
});

// ================= Scroll Header JS =================
window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});

// Blog Slider
const wrapper = document.querySelector('.resouces-wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
	item.addEventListener('click', () => {
		indicators[currentTestimonial].classList.remove('active');
		wrapper.style.marginLeft = `-${100 * i}%`;
		item.classList.add('active');
		currentTestimonial = i;
	});
});
