const BACKDROP = document.getElementById('backdrop');
const MENU = document.querySelector(".Menu");
const MENU_BTN = document.querySelector(".Menu").firstElementChild;
const CLOSE_MENU = document.querySelector(".CloseMenu");
const CLOSE_MENU_BTN = document.querySelector(".CloseMenu").firstElementChild;
const MENU_MODAL = document.getElementById("menu_modal").parentElement;
const BACK_PROJECT_BTN = document.querySelector('.BackProjectBox');
const PROJECT_DETAILS_BTN = document.getElementById('project_detail').parentElement;
const CLOSE_MODAL_BTN = document.getElementById("close_modal").lastElementChild;
const INPUTS = document.querySelectorAll('input');  


const BackDrop = () => {
	BACKDROP.classList.toggle('visible');
};

const BackDropHandler = () => {
	// MenuBtnHandler();
};

const StopScroll = () => {
	document.body.classList.toggle('StopScroll');
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
	if (FORM2.classList.contains('hidden') && FORM3.classList.contains('hidden')) {
		document.querySelectorAll('.PledgeBoxModal')[1].style.border =
			'2px solid #39b5ab';
	} else if (
		FORM1.classList.contains('hidden') &&
		FORM3.classList.contains('hidden')
	) {
		document.querySelectorAll('.PledgeBoxModal')[1].style.border =
			'2px solid #39b5ab';
	} else if (
		FORM1.classList.contains('hidden') &&
		FORM2.classList.contains('hidden')
	) {
		document.querySelectorAll('.PledgeBoxModal')[1].style.border =
			'2px solid #39b5ab';
	} else {
		document.querySelectorAll('.PledgeBoxModal')[1].style.border =
			'1px solid #dbdbdb';
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
};

const CloseModalBtnHandler = () => {
	BackProjectHandler();
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
