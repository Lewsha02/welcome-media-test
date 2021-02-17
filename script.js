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

const priceEl = document.getElementById('final-price');

const monthsEl = document.querySelectorAll('.form-radio');
monthsEl.forEach((el) => {
	el.addEventListener('click', async () => {
		const countOfMonths = el.id.slice(6);
		const response = await fetch(`https://kontinent-lobby.com/travel/fullcalc.json?key=a000154a364e819d25b043e79d713e2d6ee62244&if[date_start]=01.04.2021&if[corona2]=${countOfMonths}&params[imageType]=white&lang=en&if[company]=rgslife`);
		const data = await response.json();

		priceEl.innerText = data.pay_sum[0];
	})
})