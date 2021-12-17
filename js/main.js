/*DROPDOWN MENUS*/
const body = document.getElementById('body');
const product = document.getElementById(1);
const company = document.getElementById(2);
const connect = document.getElementById(3);
const productDropdown = document.getElementById('productDropdown');
const companyDropdown = document.getElementById('companyDropdown');
const connectDropdown = document.getElementById('connectDropdown');
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

  target.classList.contains('selectedMenu')
    ? removeClass(target, 'selectedMenu')
    : addClass(target, 'selectedMenu');

  const displayed = dropDownArr[id - 1];
  const removed = dropDownArr.filter((dropdown) => dropdown !== displayed);
  removed.forEach((div) =>
    div.classList.contains('displayMenu')
      ? removeClass(div, 'displayMenu')
      : null
  );
  displayed.classList.contains('displayMenu')
    ? removeClass(displayed, 'displayMenu')
    : addClass(displayed, 'displayMenu');
};

const hideDropDown = ({ target }) => {
  target.classList.contains('displayMenu')
    ? removeClass(target, 'displayMenu')
    : null;

  menuArr.forEach((menu) =>
    menu.classList.contains('selectedMenu')
      ? removeClass(menu, 'selectedMenu')
      : null
  );
};

menuArr.forEach((menu) => menu.addEventListener('click', showDropDown));
dropDownArr.forEach((dropdown) =>
  dropdown.addEventListener('mouseleave', hideDropDown)
);
