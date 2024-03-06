import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const AUTH_KEY = '42495238-f221500a84206b905dda8310d';
const fetchBtn = document.querySelector('.fetch-btn');

let link;
export async function requestImages(query, amount, page) {
  link = `${BASE_URL}?key=${AUTH_KEY}&q=${query}&page=${page}&per_page=${amount}`;
  const data = await axios.get(link).then(response => response.data);
  if (data.total == 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: '#EF4040',
      theme: 'dark',
      position: 'topRight',
      maxWidth: '400px',
    });
  } else if (page * amount >= data.totalHits) {
    iziToast.error({
      title: 'Error',
      message: "We're sorry, but you've reached the end of search results.",
      backgroundColor: '#EF4040',
      theme: 'dark',
      position: 'topRight',
      maxWidth: '400px',
    });
    fetchBtn.style.display = 'none';
    return data.hits;
  } else {
    fetchBtn.style.display = 'block';
    return data.hits;
  }
}
