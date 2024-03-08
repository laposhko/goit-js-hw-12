import{a as b,i as L,S as w}from"./assets/vendor-55779efa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const $="https://pixabay.com/api/",q="42495238-f221500a84206b905dda8310d",u=document.querySelector(".fetch-btn");let d;async function y(s,t,r){u.style.display="none",d=`${$}?key=${q}&q=${s}&orientation=horizontal&image_type=photo&safesearch=true&page=${r}&per_page=${t}`;let n;try{if(n=await b.get(d).then(e=>e.data),n.total==0)throw new Error("Sorry, there are no images matching your search query. Please try again!");if(r*t>=n.totalHits)throw new Error("We're sorry, but you've reached the end of search results.");u.style.display="block"}catch(e){L.error({title:"Error",message:e.message,backgroundColor:"#EF4040",theme:"dark",position:"topRight",maxWidth:"400px"})}finally{return n.hits}}const S=document.querySelector(".images-list");function f(s){const t=s.map(r=>`<li class="gallery-item">
    <a class="gallery-link" href="${r.webformatURL}">
    <img
      class="gallery-image"
      src="${r.previewURL}"
      // data-source="${r.largeImageURL}"
      alt="${r.tags}"
    />
      <ul class='statistic'>
      <li>Likes:<br>${r.likes}</li>
      <li>Views:<br>${r.views}</li>
      <li>Comments:<br>${r.comments}</li>
      <li>Downloads:<br>${r.downloads}</li>
    </ul>
  </a>

</li>`).join("");S.insertAdjacentHTML("beforeend",t)}const l=document.querySelector(".search-form"),v=l.querySelector("input"),E=document.querySelector(".content"),O=document.querySelector(".fetch-btn"),x=document.querySelector(".images-list");let c,m=15,a=1,h;function p(){E.insertAdjacentHTML("beforeend",'<span class="loader"></span>')}function g(){document.querySelector(".loader").remove()}l.addEventListener("submit",async s=>{p(),a=1,x.innerHTML="",s.preventDefault(),c=v.value;try{const t=await y(c,m,a);f(t)}catch(t){console.log(t)}finally{a++,g(),l.reset(),h=new w(".images-list a",{overlayOpacity:.8})}});O.addEventListener("click",async s=>{p();try{const t=await y(c,m,a);f(t),a++;const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"}),h.refresh()}catch(t){console.log(t)}finally{g()}});
//# sourceMappingURL=commonHelpers.js.map
