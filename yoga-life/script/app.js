// toggle first list
document.querySelector('.nav__hamburguer').addEventListener('click', () => {
	document.querySelector('.nav__list').classList.toggle('nav__list--toggle');
});

// toggle second list

document.querySelector('.nav__link:not(:only-child)').addEventListener('click', () => {
	document.querySelector('.nav__dropdown--list').classList.toggle('nav__dropdown--list--toggle');
});

//  toggle third list

document.querySelector('.nav__dropdown--have-child').addEventListener('click', () => {
	document.querySelector('.nav__dropdown--have-child--list').classList.toggle('nav__dropdown--have-child--toggle');
});
