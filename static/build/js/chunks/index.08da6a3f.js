const c=document.querySelector("[data-header]")||document.querySelector(".c-header"),s=()=>{const e=document.createElement("div");e.className="scrollbar-measure",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t},d=s(),o=e=>{e.style.paddingRight=`${d}px`},n=e=>{e.style.paddingRight=""},l=()=>{o(document.body)},a=()=>{n(document.body)},r=()=>{o(c)},m=()=>{n(c)},i=()=>{l(),r()},u=()=>{a(),m()};(()=>{const e=document.querySelector("[data-menu-toggle]");if(!e)return;e.addEventListener("click",()=>{document.documentElement.classList.toggle("is-menu-open"),document.documentElement.classList.contains("is-menu-open")?i():u()});const t=()=>{document.documentElement.scrollTop>=10?document.documentElement.classList.add("is-header-sticky"):document.documentElement.classList.remove("is-header-sticky")};t(),document.addEventListener("scroll",()=>{t()})})();
