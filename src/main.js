import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';

import { requestImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
const form = document.querySelector('.search-form');
const input = form.querySelector('input');
const content = document.querySelector('.content');
const fetchBtn = document.querySelector('.fetch-btn');
const imagesList = document.querySelector('.images-list');

let query;
let amount = 15;
let page = 1;
let lightbox;

form.addEventListener('submit', async event => {
  page = 1;
  imagesList.innerHTML = '';
  event.preventDefault();
  query = input.value;
  content.insertAdjacentHTML('beforeend', '<span class="loader"></span>');
  const loader = document.querySelector('.loader');

  try {
    const images = await requestImages(query, amount, page);
    renderImages(images);
  } catch (error) {
    console.log(error);
  }
  page++;
  loader.remove();

  input.value = '';
  lightbox = new SimpleLightbox('.images-list a', {
    overlayOpacity: 0.8,
  });
});

fetchBtn.addEventListener('click', async event => {
  content.insertAdjacentHTML('beforeend', '<span class="loader"></span>');
  const loader = document.querySelector('.loader');
  try {
    const images = await requestImages(query, amount, page);
    renderImages(images);
    page++;
    const rect = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();

    window.scrollBy({
      top: rect.height * 2,
      behavior: 'smooth',
    });

    lightbox.refresh();
  } catch (error) {
    console.log(error);
  }
  loader.remove();
});
