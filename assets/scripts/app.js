const BACKDROP = document.getElementById('backdrop');
const MENU = document.querySelector(".Menu");
const MENU_BTN = document.querySelector(".Menu").firstElementChild;
const CLOSE_MENU = document.querySelector(".CloseMenu");
const CLOSE_MENU_BTN = document.querySelector(".CloseMenu").firstElementChild;
const MENU_MODAL = document.getElementById("menu_modal").parentElement;
const BACK_PROJECT_BTN = document.querySelector('.BackProjectBox');
const PROJECT_DETAILS_BTN = document.getElementById('project_detail').parentElement;
const CLOSE_MODAL_BTN = document.getElementById("close_modal").lastElementChild;



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
