import{a as L,i as w,S as $}from"./assets/vendor-55779efa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const q="https://pixabay.com/api/",v="42495238-f221500a84206b905dda8310d",l=document.querySelector(".fetch-btn");let u;async function m(s,t,r){l.style.display="none",u=`${q}?key=${v}&q=${s}&orientation=horizontal&image_type=photo&safesearch=true&page=${r}&per_page=${t}`;let n;try{if(n=await L.get(u).then(e=>e.data),n.total==0)throw new Error("Sorry, there are no images matching your search query. Please try again!");if(r*t>=n.totalHits)throw new Error("We're sorry, but you've reached the end of search results.");l.style.display="block"}catch(e){w.error({title:"Error",message:e.message,backgroundColor:"#EF4040",theme:"dark",position:"topRight",maxWidth:"400px"})}finally{return n.hits}}const S=document.querySelector(".images-list");function y(s){const t=s.map(r=>`<li class="gallery-item">
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

</li>`).join("");S.insertAdjacentHTML("beforeend",t)}const f=document.querySelector(".search-form"),d=f.querySelector("input"),E=document.querySelector(".content"),O=document.querySelector(".fetch-btn"),x=document.querySelector(".images-list");let c,h=15,a=1,p;function g(){E.insertAdjacentHTML("beforeend",'<span class="loader"></span>')}function b(){document.querySelector(".loader").remove()}f.addEventListener("submit",async s=>{g(),a=1,x.innerHTML="",s.preventDefault(),c=d.value;try{const t=await m(c,h,a);y(t)}catch(t){console.log(t)}a++,b(),d.value="",p=new $(".images-list a",{overlayOpacity:.8})});O.addEventListener("click",async s=>{g();try{const t=await m(c,h,a);y(t),a++;const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"}),p.refresh()}catch(t){console.log(t)}b()});
//# sourceMappingURL=commonHelpers.js.map
