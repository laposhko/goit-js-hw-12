import{a as $,i as l,S as q}from"./assets/vendor-55779efa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const v="https://pixabay.com/api/",w="42495238-f221500a84206b905dda8310d",u=document.querySelector(".fetch-btn");let d;async function f(s,t,r){u.style.display="none",d=`${v}?key=${w}&q=${s}&orientation=horizontal&image_type=photo&safesearch=true&page=${r}&per_page=${t}`;const n=await $.get(d).then(e=>e.data);if(n.total==0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",theme:"dark",position:"topRight",maxWidth:"400px"});return}else return r*t>=n.totalHits?(l.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#EF4040",theme:"dark",position:"topRight",maxWidth:"450px"}),n.hits):(u.style.display="block",n.hits)}const S=document.querySelector(".images-list");function y(s){const t=s.map(r=>`<li class="gallery-item">
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

</li>`).join("");S.insertAdjacentHTML("beforeend",t)}const h=document.querySelector(".search-form"),m=h.querySelector("input"),E=document.querySelector(".content"),x=document.querySelector(".fetch-btn"),O=document.querySelector(".images-list");let c,p=15,a=1,g;function b(){E.insertAdjacentHTML("beforeend",'<span class="loader"></span>')}function L(){document.querySelector(".loader").remove()}h.addEventListener("submit",async s=>{b(),a=1,O.innerHTML="",s.preventDefault(),c=m.value;try{const t=await f(c,p,a);y(t)}catch(t){console.log(t)}a++,L(),m.value="",g=new q(".images-list a",{overlayOpacity:.8})});x.addEventListener("click",async s=>{b();try{const t=await f(c,p,a);y(t),a++;const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"}),g.refresh()}catch(t){console.log(t)}L()});
//# sourceMappingURL=commonHelpers.js.map
