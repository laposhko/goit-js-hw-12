import{a as L,i as c,S as q}from"./assets/vendor-55779efa.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const v="https://pixabay.com/api/",S="42495238-f221500a84206b905dda8310d",d=document.querySelector(".fetch-btn");let u;async function y(n,r,e){u=`${v}?key=${S}&q=${n}&page=${e}&per_page=${r}`;const o=await L.get(u).then(t=>t.data);if(o.total==0)c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",theme:"dark",position:"topRight",maxWidth:"400px"});else return e*r>=o.totalHits?(c.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#EF4040",theme:"dark",position:"topRight",maxWidth:"450px"}),d.style.display="none",o.hits):(d.style.display="block",o.hits)}const $=document.querySelector(".images-list");function f(n){const r=n.map(e=>`<li class="gallery-item">
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

</li>`).join("");$.insertAdjacentHTML("beforeend",r)}const p=document.querySelector(".search-form"),m=p.querySelector("input"),g=document.querySelector(".content"),w=document.querySelector(".fetch-btn"),E=document.querySelector(".images-list");let l,h=15,a=1,b;p.addEventListener("submit",async n=>{a=1,E.innerHTML="",n.preventDefault(),l=m.value,g.insertAdjacentHTML("beforeend",'<span class="loader"></span>');const r=document.querySelector(".loader");try{const e=await y(l,h,a);f(e)}catch(e){console.log(e)}a++,r.remove(),m.value="",b=new q(".images-list a",{overlayOpacity:.8})});w.addEventListener("click",async n=>{g.insertAdjacentHTML("beforeend",'<span class="loader"></span>');const r=document.querySelector(".loader");try{const o=await y(l,h,a);f(o)}catch(o){console.log(o)}const e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"}),a++,r.remove(),b.refresh()});
//# sourceMappingURL=commonHelpers.js.map
