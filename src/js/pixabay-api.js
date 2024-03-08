import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const AUTH_KEY = '42495238-f221500a84206b905dda8310d';
const fetchBtn = document.querySelector('.fetch-btn');

let link;
export async function requestImages(query, amount, page) {
  fetchBtn.style.display = 'none';
  link = `${BASE_URL}?key=${AUTH_KEY}&q=${query}&orientation=horizontal&image_type=photo&safesearch=true&page=${page}&per_page=${amount}`;
  let data;
  try {
    data = await axios.get(link).then(response => response.data);
    if (data.total == 0) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else if (page * amount >= data.totalHits) {
      throw new Error(
        "We're sorry, but you've reached the end of search results."
      );
    }
    fetchBtn.style.display = 'block';
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      backgroundColor: '#EF4040',
      theme: 'dark',
      position: 'topRight',
      maxWidth: '400px',
    });
  } finally {
    return data.hits;
  }
  // if (data.total == 0) {
  //   iziToast.error({
  //     title: 'Error',
  //     message:
  //       'Sorry, there are no images matching your search query. Please try again!',
  //     backgroundColor: '#EF4040',
  //     theme: 'dark',
  //     position: 'topRight',
  //     maxWidth: '400px',
  //   });
  //   return;
  // } else if (page * amount >= data.totalHits) {
  //   iziToast.error({
  //     title: 'Error',
  //     message: "We're sorry, but you've reached the end of search results.",
  //     backgroundColor: '#EF4040',
  //     theme: 'dark',
  //     position: 'topRight',
  //     maxWidth: '450px',
  //   });
  //   return data.hits;
  // } else {
  //   fetchBtn.style.display = 'block';
  //   return data.hits;
  // }
}
