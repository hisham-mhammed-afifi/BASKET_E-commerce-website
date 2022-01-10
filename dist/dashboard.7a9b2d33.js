class t{constructor(t){this.url=`https://fakestoreapi.com/${t}`}getAll=async()=>{const t=await fetch(this.url);return await t.json()};getOne=async t=>{const e=await fetch(`${this.url}/${t}`);return await e.json()};getLimit=async t=>{const e=await fetch(`${this.url}?limit=${t}`);return await e.json()};sort=async t=>{const e=await fetch(`${this.url}?sort=${t}`);return await e.json()};add=async t=>{const e=await fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return await e.json()};update=async(t,e)=>{const a=await fetch(`${this.url}/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await a.json()};remove=async t=>{const e=await fetch(`${this.url}/${t}`,{method:"DELETE"});return await e.json()}}class e{constructor(t){this.selector=t}template(t){return t.map((t=>`\n      <div class="accordion-item">\n        <h2 class="accordion-header" id="flush-headingOne">\n          <button class="accordion-button bg-secondary text-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#id${t.id}" aria-expanded="false" aria-controls="id${t.id}">\n            ${t.title} - ${t.price}\n          </button>\n        </h2>\n\n        <div id="id${t.id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">\n          <div class="accordion-body">\n          <div class="card mb-3">\n          <div class="row g-0">\n            <div class="col-md-4">\n              <img src="${t.image}" class="img-fluid rounded-start"/>\n            </div>\n            <div class="col-md-8">\n              <div class="card-body">\n                <h5 class="card-title fw-bolder">${t.title}</h5>\n                <h5 class="card-title">${t.category}</h5>\n                <h5 class="card-title">${t.price}</h5>\n                <p class="card-text mt-3">${t.description}</p>\n                <h5 class="card-title">${t.rating.rate}</h5>\n                <h5 class="card-title">Rated ${t.rating.count} times</h5>\n                <p class="card-text">\n                  <small class="text-muted">Last updated 3 mins ago</small>\n                </p>\n                <div class="d-block">\n                <button class="btn btn-sm btn-danger my-1 mx-3">Delete</button><button class="btn btn-sm btn-info me-1">update</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n          </div>\n        </div>\n      </div>\n              `)).join("")}render(t){this.selector.innerHTML=this.template(t)}}const a=new class extends t{constructor(){super("products")}getCategories=async()=>{const t=await fetch(`${this.url}/categories`);return await t.json()};getCategoryProducts=async t=>{const e=await fetch(`${this.url}/category/${t}`);return await e.json()}},n=new class extends t{constructor(){super("users")}},s=await n.getAll(),r=await a.getAll(),c=await a.getCategories(),i=document.getElementById("allProducts"),l=document.getElementById("allCategories"),o=document.getElementById("allUsers");new e(i).render(r);new class{constructor(t){this.selector=t}template(t){return t.map((t=>`\n        <tr>\n            <th scope="row">${t.id}</th>\n            <td>${t.name.firstname}</td>\n            <td>${t.name.lastname}</td>\n            <td>${t.email}</td>\n            <td>${t.address.city}</td>\n            <td>\n            <div class="d-flex">\n            <button class="btn btn-sm btn-danger me-1">Delete</button><button class="btn btn-sm btn-info me-1">view</button>\n            </div>\n            </td>\n        </tr>\n              `)).join("")}render(t){this.selector.innerHTML=this.template(t)}}(o).render(s);let d=[...r];new class{constructor(t,e){this.selector=t,this.cb=e}template(t){return`<a data-value="" class="filterByCategory flex-sm-fill text-sm-center nav-link active" aria-current="page">All</a>\n    ${t.map((t=>`<a data-value="${t}" class="filterByCategory flex-sm-fill text-sm-center nav-link" aria-current="page">${t}</a>`)).join("")}\n    `}render(t){this.selector.innerHTML=this.template(t),this.cb()}}(l,(()=>{const t=document.querySelectorAll(".filterByCategory");t.forEach((a=>{a.addEventListener("click",(a=>{t.forEach((t=>{t.classList.remove("active")})),a.target.classList.add("active"),d=[...r],a.target.dataset.value&&(d=d.filter((t=>t.category==a.target.dataset.value)));new e(i).render(d)}))}))})).render(c);const u=document.getElementById("themes");Array.from(u.children).forEach((t=>{t.addEventListener("click",(()=>{localStorage.setItem("yourthemeis",t.dataset.value),location.reload()}))}));
//# sourceMappingURL=dashboard.7a9b2d33.js.map