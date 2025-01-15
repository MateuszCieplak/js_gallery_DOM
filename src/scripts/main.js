'use strict';

const largeImage = document.querySelector('.gallery__large-img');

const imageList = document.querySelector('.gallery__list');

const links = document.querySelectorAll('.list-item__link');

links.forEach((link) => {
  link.addEventListener('click', linkClick);
});

imageList.addEventListener('click', function (element) {
  if (element.target.tagName === 'IMG') {
    largeImage.setAttribute('src', element.target.src);
  }

  if (element.target.tagName === 'A') {
    largeImage.setAttribute('href', element.target.href);
  }
});

function linkClick(element) {
  element.preventDefault();
}
