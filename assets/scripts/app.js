const BACKDROP = document.getElementById('backdrop');
const MENU = document.querySelector('.Menu');
const MENU_BTN = document.querySelector('.Menu').firstElementChild;
const CLOSE_MENU = document.querySelector('.CloseMenu');
const CLOSE_MENU_BTN = document.querySelector('.CloseMenu').firstElementChild;
const BOOKMARK_BTN = document.getElementById('bookmark_icon');
const BOOKMARK_TEXT = document.getElementById('bookmark_text');
const MENU_MODAL = document.getElementById('menu_modal').parentElement;
const BACK_PROJECT_BTN = document.querySelector('.BackProjectBox');
const AMOUNT = document.getElementById('amount');
const BACKERS = document.getElementById('backers');
const METER_BAR = document.getElementById('meter_bar');
const USER_INPUTS = document.querySelectorAll('.PledgeInput');
const PROJECT_DETAILS_BTN =
	document.getElementById('project_detail').parentElement;
const CLOSE_MODAL_BTN = document.getElementById('close_modal').lastElementChild;
const SELECT_REWARD = document.querySelectorAll('.RewardBox');
const INPUTS = document.querySelectorAll('input');
const PLEDGE_FORM = document.querySelectorAll('.PledgeBoxForm');
const PLEDGE_MODAL = document.querySelectorAll('.PledgeBoxModal');
const CONTINUE_PLEDGE = document.querySelectorAll('.PledgeFormText');
const GRATITUDE = document.getElementById('gratitude').parentElement;
const OK_BTN = document.getElementById('gratitude').lastElementChild;
const BAMBOO_STAND = document.querySelectorAll('.BambooStand');
const BLACK_EDITION = document.querySelectorAll('.BlackEdition');
const INPUT1 = INPUTS[0];
const INPUT2 = INPUTS[2];
const INPUT3 = INPUTS[4];
const FORM1 = PLEDGE_FORM[0];
const FORM2 = PLEDGE_FORM[1];
const FORM3 = PLEDGE_FORM[2];
const SELECT_REWARD1 = SELECT_REWARD[0];
const SELECT_REWARD2 = SELECT_REWARD[1];
const PLEDGE_MODAL1 = PLEDGE_MODAL[0];
const PLEDGE_MODAL2 = PLEDGE_MODAL[1];
const PLEDGE_MODAL3 = PLEDGE_MODAL[2];
let backers = 5007;
let amount = 89914;
let Black_left = 64;
let Bamboo_left = 101;
const BambooStand = 'BambooStand';
const BlackEdition = 'BlackEdition';

const BackDrop = () => {
	BACKDROP.classList.toggle('visible');
};

const StopScroll = () => {
	document.body.classList.toggle('StopScroll');
};

const ClearInput = () => {
	INPUT1.checked = false;
	INPUT2.checked = false;
	INPUT3.checked = false;
	FORM1.classList.add('hidden');
	FORM2.classList.add('hidden');
	FORM3.classList.add('hidden');
	BorderColorFunction();
};

const BackDropHandler = () => {
	if (GRATITUDE.classList.contains('visible')) {
		UpdateUi();
	}
	PledgeSubtractionHandler();
	BackDrop();
	document.body.classList.remove('StopScroll');
	MENU_MODAL.classList.remove('visible');
	MENU.classList.remove('hidden');
	CLOSE_MENU.classList.add('hidden');
	PROJECT_DETAILS_BTN.classList.remove('visible');
	GRATITUDE.classList.remove('visible');
	ClearInput();
};

const MenuBtnHandler = () => {
	BackDrop();
	StopScroll();
	CLOSE_MENU.classList.toggle('hidden');
	MENU.classList.toggle('hidden');
	MENU_MODAL.classList.toggle('visible');
};

const CloseMenuBtnHandler = () => {
	MenuBtnHandler();
};

const BorderColorFunction = () => {
	if (
		FORM1.classList.contains('hidden') &&
		FORM2.classList.contains('hidden') &&
		FORM3.classList.contains('hidden')
	) {
		PLEDGE_MODAL1.classList.remove('Borderline');
		PLEDGE_MODAL2.classList.remove('Borderline');
		PLEDGE_MODAL3.classList.remove('Borderline');
	} else if (
		FORM2.classList.contains('hidden') &&
		FORM3.classList.contains('hidden')
	) {
		PLEDGE_MODAL1.classList.add('Borderline');
		PLEDGE_MODAL2.classList.remove('Borderline');
		PLEDGE_MODAL3.classList.remove('Borderline');
	} else if (
		FORM1.classList.contains('hidden') &&
		FORM3.classList.contains('hidden')
	) {
		PLEDGE_MODAL1.classList.remove('Borderline');
		PLEDGE_MODAL2.classList.add('Borderline');
		PLEDGE_MODAL3.classList.remove('Borderline');
	} else if (
		FORM1.classList.contains('hidden') &&
		FORM2.classList.contains('hidden')
	) {
		PLEDGE_MODAL1.classList.remove('Borderline');
		PLEDGE_MODAL2.classList.remove('Borderline');
		PLEDGE_MODAL3.classList.add('Borderline');
	}
};

const InputHandler = () => {
	if (INPUT1.checked) {
		FORM1.classList.remove('hidden');
		FORM2.classList.add('hidden');
		FORM3.classList.add('hidden');
		BorderColorFunction();
	} else if (INPUT2.checked) {
		FORM1.classList.add('hidden');
		FORM2.classList.remove('hidden');
		FORM3.classList.add('hidden');
		BorderColorFunction();
	} else if (INPUT3.checked) {
		FORM1.classList.add('hidden');
		FORM2.classList.add('hidden');
		FORM3.classList.remove('hidden');
		BorderColorFunction();
	} else {
		FORM1.classList.add('hidden');
		FORM2.classList.add('hidden');
		FORM3.classList.add('hidden');
		BorderColorFunction();
	}
	clearInput();
};

const BackProjectHandler = () => {
	BackDrop();
	PROJECT_DETAILS_BTN.classList.toggle('visible');
	ContinuePledge();
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	document.getElementById('project_detail').scrollTop = 0;
	StopScroll();
};

const CloseModalBtnHandler = () => {
	BackDropHandler();
};

ContinuePledgeHandler = () => {
	if (
		INPUT1.checked &&
		(UserInput() < 1 || UserInput() === '' || UserInput() === undefined)
	) {
		alert('Invalid Input, Minimum Pledge is $1');
	} else if (
		INPUT2.checked &&
		(UserInput() < 25 || UserInput() === '' || UserInput() === undefined)
	) {
		alert('Invalid Input, Minimum Pledge is $25');
	} else if (
		INPUT3.checked &&
		(UserInput() < 75 || UserInput() === '' || UserInput() === undefined)
	) {
		alert('Invalid Input, Minimum Pledge is $75');
	} else if (UserInput() > METER_BAR.max - METER_BAR.value) {
		alert(
			`Maximum donation exceeded, $${
				METER_BAR.max - METER_BAR.value
			} remaining `,
		);
	} else {
		BackDrop();
		BackProjectHandler();
		GRATITUDE.classList.toggle('visible');
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
};

const selectReward1 = () => {
   BackProjectHandler();
   INPUT2.checked = 'checked';
   InputHandler();
   document.body.scrollTop = 0;
   document.getElementById('project_detail').scrollTop = 100;
};

SELECT_REWARD2.onclick = () => {
	BackProjectHandler();
	INPUT3.checked = 'checked';
	InputHandler();
	document.body.scrollTop = 0;
	document.getElementById('project_detail').scrollTop = 400;
};
const ContinuePledge = () => {
	for (const CONT of CONTINUE_PLEDGE) {
		CONT.addEventListener('click', ContinuePledgeHandler);
	}
};

const MeterBarHandler = () => {
	METER_BAR.value = amount;
};

const UpdateUi = () => {
	amount += +UserInput();
	backers += 1;
	AMOUNT.innerHTML = `$${amount
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      `;
	BACKERS.innerHTML = `${backers
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
	MeterBarHandler();
};

const OkBtnHandler = () => {
	BackDropHandler();
};

const clearInput = () => {
	for (const ursInput of USER_INPUTS) {
		ursInput.value = '';
	}
};

const UserInput = () => {
	for (const ursInput of USER_INPUTS) {
		if (ursInput.value != '') {
			return +ursInput.value;
		}
	}
};

const BookmarkBtnHandler = () => {
	if (BOOKMARK_TEXT.textContent === 'Bookmark') {
		BOOKMARK_TEXT.textContent = 'Bookmarked';
		BOOKMARK_TEXT.style.color = 'rgb(21, 122, 116)';
		BOOKMARK_BTN.firstElementChild.innerHTML =
			'<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#39b5ab" cx="28" cy="28" r="28"/><path fill="#fff" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>';
	} else {
		BOOKMARK_TEXT.textContent = 'Bookmark';
		BOOKMARK_TEXT.style.color = 'rgb(132, 132, 132)';
		BOOKMARK_BTN.firstElementChild.innerHTML =
			'<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>';
	}
};

const PledgeSubtractionHandler = () => {
	if (INPUT2.checked && GRATITUDE.classList.contains('visible')) {
		PledgeSubtraction(BambooStand);
	} else if (INPUT3.checked && GRATITUDE.classList.contains('visible')) {
		PledgeSubtraction(BlackEdition);
	}
};

const PledgeSubtraction = (Pledge) => {
	if (Pledge === 'BambooStand') {
		Bamboo_left -= 1;
		for (const Element of BAMBOO_STAND) {
			Element.textContent = +Bamboo_left;
		}
	} else if (Pledge === 'BlackEdition') {
		Black_left -= 1;
		for (const Element1 of BLACK_EDITION) {
			Element1.textContent = +Black_left;
		}
	}
};

BACKDROP.addEventListener('click', BackDropHandler);
MENU_BTN.addEventListener('click', MenuBtnHandler);
CLOSE_MENU_BTN.addEventListener('click', CloseMenuBtnHandler);
BACK_PROJECT_BTN.addEventListener('click', BackProjectHandler);
CLOSE_MODAL_BTN.addEventListener('click', CloseModalBtnHandler);
INPUT1.addEventListener('change', InputHandler);
INPUT2.addEventListener('change', InputHandler);
INPUT3.addEventListener('change', InputHandler);
INPUTS[6].addEventListener('change', InputHandler);
OK_BTN.addEventListener('click', OkBtnHandler);
BOOKMARK_BTN.addEventListener('click', BookmarkBtnHandler);
