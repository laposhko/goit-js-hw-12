import{a as L,i as c,S as q}from"./assets/vendor-55779efa.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const v="https://pixabay.com/api/",S="42495238-f221500a84206b905dda8310d",u=document.querySelector(".fetch-btn");let d;async function y(n,r,e){u.style.display="none",d=`${v}?key=${S}&q=${n}&orientation=horizontal&image_type=photo&safesearch=true&page=${e}&per_page=${r}`;const s=await L.get(d).then(t=>t.data);if(s.total==0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",theme:"dark",position:"topRight",maxWidth:"400px"});return}else return e*r>=s.totalHits?(c.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#EF4040",theme:"dark",position:"topRight",maxWidth:"450px"}),s.hits):(u.style.display="block",s.hits)}const $=document.querySelector(".images-list");function f(n){const r=n.map(e=>`<li class="gallery-item">
    <a class="gallery-link" href="${e.webformatURL}">
    <img
      class="gallery-image"
      src="${e.previewURL}"
      // data-source="${e.largeImageURL}"
      alt="${e.tags}"
    />
      <ul class='statistic'>
      <li>Likes:<br>${e.likes}</li>
      <li>Views:<br>${e.views}</li>
      <li>Comments:<br>${e.comments}</li>
      <li>Downloads:<br>${e.downloads}</li>
    </ul>
  </a>

</li>`).join("");$.insertAdjacentHTML("beforeend",r)}const p=document.querySelector(".search-form"),m=p.querySelector("input"),h=document.querySelector(".content"),w=document.querySelector(".fetch-btn"),E=document.querySelector(".images-list");let l,g=15,a=1,b;p.addEventListener("submit",async n=>{a=1,E.innerHTML="",n.preventDefault(),l=m.value,h.insertAdjacentHTML("beforeend",'<span class="loader"></span>');const r=document.querySelector(".loader");try{const e=await y(l,g,a);f(e)}catch(e){console.log(e)}a++,r.remove(),m.value="",b=new q(".images-list a",{overlayOpacity:.8})});w.addEventListener("click",async n=>{h.insertAdjacentHTML("beforeend",'<span class="loader"></span>');const r=document.querySelector(".loader");try{const e=await y(l,g,a);f(e),a++;const s=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s.height*2,behavior:"smooth"}),b.refresh()}catch(e){console.log(e)}r.remove()});
//# sourceMappingURL=commonHelpers.js.map
