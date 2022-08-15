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