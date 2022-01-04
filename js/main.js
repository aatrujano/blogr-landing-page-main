/*DROPDOWN MENUS*/
const body = document.getElementById('body');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('menu');
const product = document.getElementById(1);
const company = document.getElementById(2);
const connect = document.getElementById(3);
const productDropdown = document.getElementById('productDropdown');
const companyDropdown = document.getElementById('companyDropdown');
const connectDropdown = document.getElementById('connectDropdown');
const hamburgerIcon = document.getElementById('hamburger');
let dropDownArr = [productDropdown, companyDropdown, connectDropdown];
let menuArr = [product, company, connect];

const addClass = (tag, className) => {
  tag.classList.add(className);
};
const removeClass = (tag, className) => {
  tag.classList.remove(className);
};

const showDropDown = ({ target }) => {
  const { id } = target;

  const unselected = menuArr.filter((menu) => menu !== target);
  unselected.forEach((div) =>
    div.classList.contains('selectedMenu')
      ? removeClass(div, 'selectedMenu')
      : null
  );

  target.classList.toggle('selectedMenu');
  overlay.classList.toggle('showOverlay');
};

menuArr.forEach((menu) => menu.addEventListener('click', showDropDown));
hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('open');
  menu.classList.toggle('showMobileMenu');  
});

// OVERLAY

overlay.addEventListener('click', () => {
  menuArr.forEach((menu) => {
    if (menu.classList.contains('selectedMenu')) {
      removeClass(menu, 'selectedMenu');
    }
  });
  overlay.classList.toggle('showOverlay');
});
