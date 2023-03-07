/// Burger Menu

(function() {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header-nav');
  const list = document.querySelector('.header-nav-list');
  const menuCloseItem = document.querySelector('.header-nav-close');

  burgerItem.addEventListener('click', () => {
    menu.classList.add('header-nav-active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header-nav-active');  
  })
  list.addEventListener('click', () => {
    menu.classList.remove('header-nav-active');
  })  
}());

/// Contact Section

const cityList = document.querySelectorAll('.select-body');
const cityCard = document.querySelectorAll('.select-card');
const cardItem = document.querySelector('.select-card-info');
const select = document.querySelector('.select');
const summary = document.querySelector('.select-header');
const tel = document.querySelector('.select-card-link');

const city = [
  { name: 'Yonkers, NY',     phone: '+1 914 678 0003', adress: '511 Warburton Ave'},
  { name: 'Canandaigua, NY', phone: '+1 585 393 0001', adress: '151 Charlotte Street'},
  { name: 'Sherrill, NY',    phone: '+1 315 908 0004', adress: '14 WEST Noyes BLVD'},
  { name: 'New York City',   phone: '+1 212 456 0002', adress: '9 East 91st Street'} 
];

function setCity(city) {
  cardItem.children[0].textContent = city.name;
  cardItem.children[1].textContent = city.phone;
  cardItem.children[2].textContent = city.adress;
  tel.setAttribute("href", `tel:${city.phone.split(' ').join('')}`);
}

cityList.forEach(function(item) {
  item.addEventListener('click', function(e) {
    const cityName = e.target.textContent;
    setCity(city.find(x => x.name === cityName));
    summary.innerHTML = cityName + '<img src="./img/accordion_btn.png" alt="accordion" class="select-icon-pic">';
    select.removeAttribute('open');
    summary.textContent !== 'City' ? cityCard[0].classList.add('select-card-show') :'';
  });
});

/// Price Section

const list = document.querySelectorAll('.prices-button-container');

list.forEach(function(item) {
  item.addEventListener('click', function(element) {
    setTimeout(function () {
      if (!item.hasAttribute('open')) {
        item.removeAttribute('open');
      } else {
        list.forEach(item => item.removeAttribute('open'));
        item.setAttribute('open', 'open');
      };
    });
  });
});

/// Service Section

let buttonsProject = document.querySelector('.service-buttons');
let buttonProject = document.querySelectorAll('.service-content-button');
let projectItem = document.querySelectorAll('.select-blur');
let gardens = localStorage.getItem('gardens' || 0);
let planting = localStorage.getItem('planting' || 0);
let lawn = localStorage.getItem('lawn' || 0);

renderProjects();
blurRender(projectItem, gardens, planting, lawn);

buttonsProject.addEventListener('click', buttonProjectClick);

function buttonProjectClick(event) {

    if (event.target.className !== '.service-content-button')



        if (event.target.dataset.name === "Gardens") {

            gardens = 'Gardens';
            planting = '';
            lawn = '';
            saveButton();
            renderProjects();
            blur(projectItem, event.target);

        } else if (event.target.dataset.name === "Planting") {

            gardens = '';
            planting = 'Planting';
            lawn = '';
            saveButton();
            renderProjects();
            blur(projectItem, event.target);


        } else if (event.target.dataset.name === "Lawn") {

            gardens = '';
            planting = '';
            lawn = 'Lawn';
            saveButton();
            renderProjects();
            blur(projectItem, event.target);
        }
    return;
}

function renderProjects() {

    if (gardens === 'Gardens') {

        buttonProject[0].classList.add('service-content-button-active');
        buttonProject[1].classList.remove('service-content-button-active');
        buttonProject[2].classList.remove('service-content-button-active');

    } else {
        buttonProject[0].classList.remove('service-content-button-active');
    }

    if (lawn === 'Lawn') {

        buttonProject[0].classList.remove('service-content-button-active');
        buttonProject[1].classList.add('service-content-button-active');
        buttonProject[2].classList.remove('service-content-button-active');

    } else {
        buttonProject[1].classList.remove('service-content-button-active');
    }

    if (planting === 'Planting') {

        buttonProject[0].classList.remove('service-content-button-active');
        buttonProject[1].classList.remove('service-content-button-active');
        buttonProject[2].classList.add('service-content-button-active');

    } else {
        buttonProject[2].classList.remove('service-content-button-active');
        return;
    }
};

function saveButton() {
    +localStorage.setItem('Gardens', gardens);
    +localStorage.setItem('Planting', planting);
    +localStorage.setItem('Lawn', lawn);
};

function blur(array, element) {

    array.forEach(item => {

        if (element.dataset.name !== item.dataset.name) {
            item.classList.add('blur');
        } else {
            item.classList.remove('blur');
            return;
        }
    });
}

function blurRender(array, element1, element2, element3) {

    array.forEach(item => {

        if (+element1 === 0 && +element2 === 0 && +element3 === 0) {
            item.classList.remove('blur');
            return;
        }
        if (element1 === item.dataset.name) {
            item.classList.remove('blur');
            return;
        }
        if (element2 === item.dataset.name) {
            item.classList.remove('blur');
            return;
        }
        if (element3 === item.dataset.name) {
            item.classList.remove('blur');
            return;
        }
    });
}
