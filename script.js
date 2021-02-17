IMask(document.querySelector(".phone-input"), {
	mask: "+{7}(000)000-00-00",
});

const dateInputs = document.querySelectorAll(".birthday-input");

dateInputs.forEach((el) => {
	IMask(el, {
		mask: Date,
		// Возраст должен быть от 5 до 18
		min: new Date(1990, 0, 1),
    max: new Date(),
		lazy: true,
	});
});

const modal = document.querySelector('.custom-modal');
const modalClose = document.querySelector('.close-modal');

modalClose.addEventListener('click', () => {
	modal.classList.remove('active');
});

const formButtom = document.querySelector('button[type="submit"]');
formButtom.addEventListener('click', () => {
	
	const userDateEl = document.getElementById('childBirthday');
	const userDate = new Date(userDateEl.value);

	const userAge = new Date().getFullYear() - userDate.getFullYear();

	if (userAge < 5) {
		modal.classList.add('active');
	} else if (userAge > 18) {
		modal.classList.add('active');
	}
});
