const BACKDROP = document.getElementById('backdrop');
const MENU = document.querySelector('.Menu');
const MENU_BTN = document.querySelector('.Menu').firstElementChild;
const CLOSE_MENU = document.querySelector('.CloseMenu');
const CLOSE_MENU_BTN = document.querySelector('.CloseMenu').firstElementChild;
const MENU_MODAL = document.getElementById('menu_modal').parentElement;
const BACK_PROJECT_BTN = document.querySelector('.BackProjectBox');
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
};

const BackProjectHandler = () => {
	BackDrop();
	PROJECT_DETAILS_BTN.classList.toggle('visible');
	ContinuePledge();
};

const CloseModalBtnHandler = () => {
	BackDropHandler();
};

ContinuePledgeHandler = () => {
	BackDrop();
	BackProjectHandler();
	GRATITUDE.classList.toggle('visible');
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};

SELECT_REWARD1.onclick = () => {
	BackProjectHandler();
	INPUT2.checked = 'checked';
	InputHandler();
	window.location.href = '#radio_1';
};

SELECT_REWARD2.onclick = () => {
	BackProjectHandler();
	INPUT3.checked = 'checked';
	InputHandler();
	window.location.href = '#radio_2';
};
const ContinuePledge = () => {
	for (const CONT of CONTINUE_PLEDGE) {
		CONT.addEventListener('click', ContinuePledgeHandler);
	}
};

const OkBtnHandler = () => {
	BackDropHandler();
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
