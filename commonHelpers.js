import{S as d,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="43967631-6112ded5daea5d7f1facaa737",f="https://pixabay.com/api/",p=(o="pug")=>{const s=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},h=o=>o.map(({webformatURL:s,largeImageURL:r,tags:n,likes:e,views:t,comments:a,downloads:u})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${r}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${n}"
      />
    </a>
    <div class="small-content">
        <span class="text-body-likes">Likes: ${e}</span>
        <span class="text-body-views">Views: ${t}</span>
        <span class="text-body-comments">Comments: ${a}</span>
        <span class="text-body-downloads">Downloads: ${u}</span>
    </div>
  </li>
`).join(""),i=document.querySelector(".js-gallery"),y=document.querySelector(".js-search-form"),c=document.querySelector("#loader");let g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){o.preventDefault();const s=o.target.elements.searchKeyword.value.trim();if(s===""){i.innerHTML="",o.target.reset(),l.error({title:"Error",message:"Illegal operation",position:"topRight",timeout:2e3});return}i.innerHTML="",c.classList.remove("hidden"),p(s).then(r=>{r.totalHits===0?l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}):(i.innerHTML=h(r.hits),g.refresh())}).catch(r=>console.log(r)).finally(()=>{o.target.reset(),c.classList.add("hidden")})}y.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
