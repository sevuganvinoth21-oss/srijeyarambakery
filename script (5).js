/* ============================================================
   Sri Jeyaram Bakery & Sweets — Kalayarkovil
   Full menu from the shop price list (Tamil + English).
   Cart + WhatsApp checkout, hero carousel, scroll-play videos.
   ============================================================ */

const WHATSAPP_NUMBER = "918489777046";

/* ---------- PRODUCTS ----------
   Fields:
     ta     : Tamil name
     name   : English name
     cat    : category (must match CAT_META)
     emoji  : tile icon (shows until you add a real photo)
     img    : "" for emoji tile, or "images/yourphoto.jpg" for a real photo
     nonveg : true for chicken/egg items (shows red mark)
     ribbon : "ghee" | "oil" | null
     best   : true to show in "Our Best Sellers"
     sizes  : [{label, price, mrp?}]   (mrp optional — add it to show a SAVE badge)
     rating / count : optional — leave out unless you have real reviews
   ------------------------------------------------------------ */
const PRODUCTS = [

  /* ===== DAILY SNACKS (per piece) ===== */
  { id:"milkbun", ta:"மில்க் பன்", name:"Milk Bun", cat:"Daily Snacks", emoji:"🍞", sizes:[{label:"1 pc",price:15}] },
  { id:"boli", ta:"போலி", name:"Boli", cat:"Daily Snacks", emoji:"🫓", best:true, sizes:[{label:"1 pc",price:30}] },
  { id:"vegroll", ta:"வெஜ் ரோல்", name:"Veg Roll", cat:"Daily Snacks", emoji:"🌯", sizes:[{label:"1 pc",price:20}] },
  { id:"chickenroll", ta:"சிக்கன் ரோல்", name:"Chicken Roll", cat:"Daily Snacks", emoji:"🌯", nonveg:true, sizes:[{label:"1 pc",price:25}] },
  { id:"mushroomroll", ta:"காளான் ரோல்", name:"Mushroom Roll", cat:"Daily Snacks", emoji:"🍄", best:true, sizes:[{label:"1 pc",price:25}] },
  { id:"eggroll", ta:"எக் ரோல்", name:"Egg Roll", cat:"Daily Snacks", emoji:"🥚", nonveg:true, sizes:[{label:"1 pc",price:25}] },
  { id:"koreanbun", ta:"கொரியன் சீஸ் பன்", name:"Korean Cheese Bun", cat:"Daily Snacks", emoji:"🧀", sizes:[{label:"1 pc",price:40}] },
  { id:"cutletburger", ta:"கட்லெட் பர்கர்", name:"Cutlet Burger", cat:"Daily Snacks", emoji:"🍔", sizes:[{label:"1 pc",price:60}] },
  { id:"chickencutlet", ta:"சிக்கன் கட்லெட்", name:"Chicken Cutlet", cat:"Daily Snacks", emoji:"🍗", nonveg:true, sizes:[{label:"1 pc",price:20}] },
  { id:"freshbun", ta:"ஃபிரெஷ் பன்", name:"Fresh Bun", cat:"Daily Snacks", emoji:"🍞", sizes:[{label:"1 pc",price:25}] },
  { id:"roundbun", ta:"ரவுண்ட் பன்", name:"Round Bun", cat:"Daily Snacks", emoji:"🥯", sizes:[{label:"1 pc",price:25}] },
  { id:"coconutbun", ta:"தேங்காய் பன்", name:"Coconut Bun", cat:"Daily Snacks", emoji:"🥥", sizes:[{label:"1 pc",price:25}] },
  { id:"coconutpuffs", ta:"தேங்காய் பப்ஸ்", name:"Coconut Puffs", cat:"Daily Snacks", emoji:"🥥", sizes:[{label:"1 pc",price:15}] },
  { id:"coconutcover", ta:"தேங்காய் பன் பாக்கெட்", name:"Coconut Full Cover", cat:"Daily Snacks", emoji:"🥥", sizes:[{label:"1 pack",price:60}] },
  { id:"cupcake", ta:"கப் கேக்", name:"Cup Cake", cat:"Daily Snacks", emoji:"🧁", best:true, sizes:[{label:"1 pc",price:60}] },
  { id:"jambun", ta:"ஜாம் பன்", name:"Jam Bun", cat:"Daily Snacks", emoji:"🍞", sizes:[{label:"1 pc",price:20}] },
  { id:"creambun", ta:"கிரீம் பன்", name:"Cream Bun", cat:"Daily Snacks", emoji:"🍞", sizes:[{label:"1 pc",price:20}] },
  { id:"brownie", ta:"பிரௌனி", name:"Brownie", cat:"Daily Snacks", emoji:"🍫", sizes:[{label:"1 pc",price:35}] },
  { id:"bananacake", ta:"வாழைப்பழ கேக்", name:"Banana Cake", cat:"Daily Snacks", emoji:"🍌", best:true, sizes:[{label:"1 pc",price:25}] },
  { id:"chickenpizza", ta:"சிக்கன் பீட்சா", name:"Chicken Pizza", cat:"Daily Snacks", emoji:"🍕", nonveg:true, sizes:[{label:"1 pc",price:120}] },
  { id:"paneerpizza", ta:"பன்னீர் பீட்சா", name:"Paneer Pizza", cat:"Daily Snacks", emoji:"🍕", sizes:[{label:"1 pc",price:100}] },

  /* ===== PIECE CAKES (per piece) ===== */
  { id:"honeycake", ta:"ஹனி கேக்", name:"Honey Cake", cat:"Piece Cakes", emoji:"🍰", sizes:[{label:"1 pc",price:15}] },
  { id:"butterscotchpc", ta:"பட்டர்ஸ்காட்ச் கேக்", name:"Butterscotch Cake", cat:"Piece Cakes", emoji:"🍰", sizes:[{label:"1 pc",price:15}] },
  { id:"pineapplepc", ta:"பைனாப்பிள் கேக்", name:"Pineapple Cake", cat:"Piece Cakes", emoji:"🍍", sizes:[{label:"1 pc",price:15}] },
  { id:"strawberrypc", ta:"ஸ்ட்ராபெர்ரி கேக்", name:"Strawberry Cake", cat:"Piece Cakes", emoji:"🍓", sizes:[{label:"1 pc",price:15}] },
  { id:"vanillapc", ta:"வெண்ணிலா கேக்", name:"Vanilla Cake", cat:"Piece Cakes", emoji:"🍰", sizes:[{label:"1 pc",price:15}] },

  /* ===== CRUSH CAKES (per piece) ===== */
  { id:"strawberrycrush", ta:"ஸ்ட்ராபெர்ரி க்ரஷ்", name:"Strawberry Crush", cat:"Crush Cakes", emoji:"🍓", sizes:[{label:"1 pc",price:20}] },
  { id:"pineapplecrush", ta:"பைனாப்பிள் க்ரஷ்", name:"Pineapple Crush", cat:"Crush Cakes", emoji:"🍍", sizes:[{label:"1 pc",price:20}] },
  { id:"orangecrush", ta:"ஆரஞ்சு க்ரஷ்", name:"Orange Crush", cat:"Crush Cakes", emoji:"🍊", sizes:[{label:"1 pc",price:20}] },
  { id:"chocolatecrush", ta:"சாக்லேட் க்ரஷ்", name:"Chocolate Crush", cat:"Crush Cakes", emoji:"🍫", sizes:[{label:"1 pc",price:20}] },
  { id:"blueberrycrush", ta:"புளூபெர்ரி க்ரஷ்", name:"Blueberry Crush", cat:"Crush Cakes", emoji:"🫐", sizes:[{label:"1 pc",price:20}] },

  /* ===== ROLLS & CAKES (per piece) ===== */
  { id:"puddingcake", ta:"புட்டிங் கேக்", name:"Pudding Cake", cat:"Rolls & Cakes", emoji:"🍮", sizes:[{label:"1 pc",price:25}] },
  { id:"chocolateroll", ta:"சாக்லேட் ரோல்", name:"Chocolate Roll", cat:"Rolls & Cakes", emoji:"🍫", sizes:[{label:"1 pc",price:20}] },
  { id:"vanillaroll", ta:"வெண்ணிலா ரோல்", name:"Vanilla Roll", cat:"Rolls & Cakes", emoji:"🍥", sizes:[{label:"1 pc",price:20}] },
  { id:"strawberryroll", ta:"ஸ்ட்ராபெர்ரி ரோல்", name:"Strawberry Roll", cat:"Rolls & Cakes", emoji:"🍓", sizes:[{label:"1 pc",price:20}] },
  { id:"jamroll", ta:"ஜாம் ரோல்", name:"Jam Roll", cat:"Rolls & Cakes", emoji:"🍥", sizes:[{label:"1 pc",price:20}] },

  /* ===== PASTRY CAKES (per piece) ===== */
  { id:"blackforest", ta:"பிளாக் ஃபாரஸ்ட்", name:"Black Forest", cat:"Pastry Cakes", emoji:"🎂", best:true, sizes:[{label:"1 pc",price:60}] },
  { id:"whiteforest", ta:"வொய்ட் ஃபாரஸ்ட்", name:"White Forest", cat:"Pastry Cakes", emoji:"🎂", sizes:[{label:"1 pc",price:60}] },
  { id:"redvelvet", ta:"ரெட் வெல்வெட்", name:"Red Velvet", cat:"Pastry Cakes", emoji:"❤️", best:true, sizes:[{label:"1 pc",price:70}] },
  { id:"rainbowcake", ta:"ரெயின்போ கேக்", name:"Rainbow Cake", cat:"Pastry Cakes", emoji:"🌈", sizes:[{label:"1 pc",price:60}] },
  { id:"chocotruffle", ta:"சாக்கோ ட்ரஃபிள் கேக்", name:"Choco Truffle Cake", cat:"Pastry Cakes", emoji:"🍫", best:true, sizes:[{label:"1 pc",price:80}] },
  { id:"palkovacake", ta:"பால்கோவா கேக்", name:"Palkova Cake", cat:"Pastry Cakes", emoji:"🍰", sizes:[{label:"1 pc",price:60}] },
  { id:"rasmalaicake", ta:"ரஸ்மலாய் கேக்", name:"Rasmalai Cake", cat:"Pastry Cakes", emoji:"🍮", sizes:[{label:"1 pc",price:60}] },
  { id:"russianhoney", ta:"ரஷ்யன் ஹனி கேக்", name:"Russian Honey Cake", cat:"Pastry Cakes", emoji:"🍯", sizes:[{label:"1 pc",price:70}] },
  { id:"chocobrownie", ta:"சாக்கோ பிரௌனி", name:"Choco Brownie", cat:"Pastry Cakes", emoji:"🍫", sizes:[{label:"1 pc",price:60}] },
  { id:"moussecake", ta:"மூஸ் கேக்", name:"Mousse Cake", cat:"Pastry Cakes", emoji:"🍮", best:true, sizes:[{label:"1 pc",price:60}] },
  { id:"minimousse", ta:"மினி மூஸ் கேக்", name:"Mini Mousse", cat:"Pastry Cakes", emoji:"🍮", sizes:[{label:"1 pc",price:30}] },
  { id:"whitebrownie", ta:"வொய்ட் பிரௌனி", name:"White Brownie", cat:"Pastry Cakes", emoji:"🤍", sizes:[{label:"1 pc",price:45}] },
  { id:"pistamilk", ta:"பிஸ்தா மில்க் கேக்", name:"Pista Milk Cake", cat:"Pastry Cakes", emoji:"🍮", sizes:[{label:"1 pc",price:60}] },
  { id:"strawberrymilk", ta:"ஸ்ட்ராபெர்ரி மில்க் கேக்", name:"Strawberry Milk Cake", cat:"Pastry Cakes", emoji:"🍓", sizes:[{label:"1 pc",price:60}] },
  { id:"rvcheesecake", ta:"ரெட் வெல்வெட் சீஸ் கேக்", name:"Red Velvet Cheese Cake", cat:"Pastry Cakes", emoji:"🍰", sizes:[{label:"1 pc",price:60}] },
  { id:"dreamcake", ta:"ட்ரீம் கேக்", name:"Dream Cake", cat:"Pastry Cakes", emoji:"🎂", sizes:[{label:"1 pc",price:60}] },
  { id:"tiramisubrownie", ta:"டிரமிசு பிரௌனி", name:"Tiramisu Brownie", cat:"Pastry Cakes", emoji:"🍫", sizes:[{label:"1 pc",price:70}] },
  { id:"popsicle", ta:"பாப்ஸிக்கிள்", name:"Popsicle", cat:"Pastry Cakes", emoji:"🍡", sizes:[{label:"1 pc",price:50}] },

  /* ===== SWEETS (per ½ Kg) ===== */
  { id:"kajukatli", ta:"காஜு கட்லி", name:"Kaju Katli", cat:"Sweets", emoji:"💎", best:true, sizes:[{label:"½ Kg",price:450}] },
  { id:"kajupista", ta:"காஜு பிஸ்தா ரோல்", name:"Kaju Pista Roll", cat:"Sweets", emoji:"🥮", sizes:[{label:"½ Kg",price:450}] },
  { id:"specialmysorepak", ta:"ஸ்பெஷல் மைசூர் பாக்", name:"Special Mysore Pak", cat:"Sweets", emoji:"🟡", ribbon:"ghee", best:true, sizes:[{label:"½ Kg",price:350}] },
  { id:"boostburfi", ta:"பூஸ்ட் பர்பி", name:"Boost Burfi", cat:"Sweets", emoji:"🟫", sizes:[{label:"½ Kg",price:320}] },
  { id:"horlicksburfi", ta:"ஹார்லிக்ஸ் பர்பி", name:"Horlicks Burfi", cat:"Sweets", emoji:"🟫", sizes:[{label:"½ Kg",price:320}] },
  { id:"kalakand", ta:"கலாகண்ட்", name:"Kalakand", cat:"Sweets", emoji:"🍥", sizes:[{label:"½ Kg",price:320}] },
  { id:"ajmalcake", ta:"அஜ்மல் கேக்", name:"Ajmal Cake", cat:"Sweets", emoji:"🟤", sizes:[{label:"½ Kg",price:320}] },
  { id:"gheemysorepak", ta:"நெய் மைசூர் பாக்", name:"Ghee Mysore Pak", cat:"Sweets", emoji:"🟡", ribbon:"ghee", best:true, sizes:[{label:"½ Kg",price:320}] },
  { id:"milksweet", ta:"மில்க் ஸ்வீட்", name:"Milk Sweet", cat:"Sweets", emoji:"🤍", sizes:[{label:"½ Kg",price:320}] },
  { id:"fruitbeda", ta:"ஃப்ரூட் பேடா", name:"Fruit Beda", cat:"Sweets", emoji:"🍬", sizes:[{label:"½ Kg",price:320}] },
  { id:"jilabi", ta:"ஜிலேபி", name:"Jilabi", cat:"Sweets", emoji:"🌀", sizes:[{label:"½ Kg",price:220}] },
  { id:"yellowladdu", ta:"மஞ்சள் லட்டு", name:"Yellow Laddu", cat:"Sweets", emoji:"🟡", ribbon:"ghee", sizes:[{label:"½ Kg",price:220}] },
  { id:"motichoor", ta:"மோதிசூர் லட்டு", name:"Motichoor Laddu", cat:"Sweets", emoji:"🟠", ribbon:"ghee", best:true, sizes:[{label:"½ Kg",price:220}] },
  { id:"ravaladdu", ta:"ரவா லட்டு", name:"Rava Laddu", cat:"Sweets", emoji:"🟠", ribbon:"ghee", sizes:[{label:"½ Kg",price:220}] },
  { id:"thirupathiladdu", ta:"திருப்பதி லட்டு", name:"Thirupathi Laddu", cat:"Sweets", emoji:"🟠", ribbon:"ghee", sizes:[{label:"½ Kg",price:320}] },
  { id:"fruitladdu", ta:"ஃப்ரூட் லட்டு", name:"Fruit Laddu", cat:"Sweets", emoji:"🟠", sizes:[{label:"½ Kg",price:320}] },
  { id:"fruithalwa", ta:"ஃப்ரூட் அல்வா", name:"Fruit Halwa", cat:"Sweets", emoji:"🟤", sizes:[{label:"½ Kg",price:220}] },
  { id:"badhusa", ta:"பாதுஷா", name:"Badhusa", cat:"Sweets", emoji:"🥯", sizes:[{label:"½ Kg",price:220}] },
  { id:"chandrakala", ta:"சந்திரகலா", name:"Chandra Kala", cat:"Sweets", emoji:"🌙", sizes:[{label:"½ Kg",price:220}] },
  { id:"suryakala", ta:"சூர்யகலா", name:"Suryakala", cat:"Sweets", emoji:"☀️", sizes:[{label:"½ Kg",price:220}] },
  { id:"soanpapdi", ta:"சோன் பப்டி", name:"Soan Papdi", cat:"Sweets", emoji:"🟨", sizes:[{label:"½ Kg",price:220}] },
  { id:"hardmysorepak", ta:"ஹார்ட் மைசூர் பாக்", name:"Hard Mysore Pak", cat:"Sweets", emoji:"🟡", ribbon:"ghee", sizes:[{label:"½ Kg",price:220}] },
  { id:"butterjilabi", ta:"பட்டர் ஜிலேபி", name:"Butter Jilabi", cat:"Sweets", emoji:"🌀", sizes:[{label:"½ Kg",price:220}] },
  { id:"passionladdu", ta:"பேஷன் லட்டு", name:"Passion Laddu", cat:"Sweets", emoji:"🟠", sizes:[{label:"½ Kg",price:220}] },

  /* ===== HALWA (per ½ Kg) ===== */
  { id:"wheathalwa", ta:"கோதுமை அல்வா", name:"Wheat Halwa", cat:"Halwa", emoji:"🟤", ribbon:"ghee", sizes:[{label:"½ Kg",price:220}] },
  { id:"elaneerhalwa", ta:"இளநீர் அல்வா", name:"Elaneer Halwa", cat:"Halwa", emoji:"🥥", ribbon:"ghee", best:true, sizes:[{label:"½ Kg",price:320}] },
  { id:"palkova", ta:"பால்கோவா", name:"Palkova", cat:"Halwa", emoji:"🤍", ribbon:"ghee", sizes:[{label:"½ Kg",price:320}] },
  { id:"carrothalwa", ta:"கேரட் அல்வா", name:"Carrot Halwa", cat:"Halwa", emoji:"🥕", ribbon:"ghee", best:true, sizes:[{label:"½ Kg",price:320}] },
];

/* Category order + subtitles + circle emoji */
const CAT_META = {
  "Daily Snacks": { sub:"Fresh buns, rolls, cutlets and pizzas — baked through the day.", ico:"🥪" },
  "Piece Cakes":  { sub:"Single-slice cakes, fresh and ready to grab.", ico:"🍰" },
  "Crush Cakes":  { sub:"Fruity crush cakes in everyone's favourite flavours.", ico:"🍓" },
  "Rolls & Cakes":{ sub:"Soft rolls and everyday cakes.", ico:"🍥" },
  "Pastry Cakes": { sub:"Our signature pastry and celebration cakes.", ico:"🎂" },
  "Sweets":       { sub:"Traditional sweets made the slow way. Priced per ½ kg.", ico:"🍬" },
  "Halwa":        { sub:"Rich, slow-cooked halwa. Priced per ½ kg.", ico:"🟤" },
};
const CAT_ORDER = Object.keys(CAT_META);

/* ---------- state ---------- */
const cart = {};            // key = `${id}__${sizeIndex}`  ->  qty
const selectedSize = {};    // id -> sizeIndex
let deliveryMode = "Delivery";

const rupee = n => "₹" + Math.round(n).toLocaleString("en-IN");
PRODUCTS.forEach(p => selectedSize[p.id] = 0);

/* ---------- elements ---------- */
const cartCountEl = document.getElementById("cartCount");
const drawer = document.getElementById("drawer");
const scrim = document.getElementById("scrim");
const drawerItems = document.getElementById("drawerItems");
const emptyMsg = document.getElementById("emptyMsg");
const totalAmt = document.getElementById("totalAmt");
const toast = document.getElementById("toast");

/* ============================================================
   CARD TEMPLATE
   ============================================================ */
function cardHTML(p){
  const si = selectedSize[p.id] || 0;
  const s = p.sizes[si];
  const hasMrp = s.mrp && s.mrp > s.price;
  const off = hasMrp ? Math.round((1 - s.price/s.mrp)*100) : 0;
  const ribbon = p.ribbon === "ghee" ? `<div class="ribbon ghee">MADE WITH GHEE</div>`
              : p.ribbon === "oil"  ? `<div class="ribbon oil">MADE WITH GROUNDNUT OIL</div>` : "";
  const vegMark = p.nonveg ? `<span class="veg nonveg" title="Non-veg"></span>`
                           : `<span class="veg" title="Veg"></span>`;
  const sizeBtns = p.sizes.map((sz,i)=>
    `<button class="size${i===si?" active":""}" data-size="${p.id}|${i}">${sz.label}</button>`).join("");
  const priceBlock = `
      <div class="price-row">
        <span class="price-now" data-now="${p.id}">${rupee(s.price)}</span>
        ${hasMrp?`<span class="price-mrp" data-mrp="${p.id}">${rupee(s.mrp)}</span>
        <span class="save-badge" data-save="${p.id}">SAVE ${rupee(s.mrp - s.price)}</span>`:""}
      </div>
      ${hasMrp?`<div class="off-pct" data-off="${p.id}">${off}% OFF</div>`:""}`;
  const ratingBlock = p.rating
    ? `<span class="rating"><span class="orn"></span> ${p.rating.toFixed(2)} (${p.count||0})</span>`
    : `<span></span>`;

  return `
  <article class="pcard" data-card="${p.id}" data-name="${(p.name+' '+(p.ta||'')+' '+p.cat).toLowerCase()}">
    <div class="pcard-media">
      ${ribbon}${vegMark}
      <span class="emoji">${p.emoji}</span>
      ${p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.remove()">` : ""}
    </div>
    <div class="pcard-body">
      ${p.best ? `<span class="badge-best">Best Seller</span>` : ""}
      <h3>${p.name}</h3>
      ${p.ta ? `<div class="name-ta">${p.ta}</div>` : ""}
      ${priceBlock}
      <div class="divline"></div>
      <div class="size-rate">
        <div class="sizes">${sizeBtns}</div>
        ${ratingBlock}
      </div>
      <button class="btn-gold add-btn" data-add="${p.id}">Add to cart</button>
    </div>
  </article>`;
}

/* ============================================================
   RENDER
   ============================================================ */
function catId(cat){ return "cat-" + cat.replace(/[^A-Za-z]/g,""); }

function renderCatRail(){
  const rail = document.getElementById("catRail");
  let html = `<div class="cat-item" data-jump="bestsellers">
      <div class="cat-ico"><span class="cat-tag">TOP</span>⭐</div>
      <span class="cat-label">Best Sellers</span></div>`;
  CAT_ORDER.forEach(cat=>{
    html += `<div class="cat-item" data-jump="${catId(cat)}">
        <div class="cat-ico">${CAT_META[cat].ico}</div>
        <span class="cat-label">${cat}</span></div>`;
  });
  html += `<div class="cat-item" data-jump="gifting">
      <div class="cat-ico">🎁</div><span class="cat-label">Gifting</span></div>`;
  rail.innerHTML = html;
  rail.querySelectorAll(".cat-item").forEach(el=>{
    el.onclick = () => { const t = document.getElementById(el.dataset.jump); if(t) t.scrollIntoView({behavior:"smooth"}); };
  });
}

function renderBestSellers(){
  document.getElementById("bestSellers").innerHTML =
    PRODUCTS.filter(p=>p.best).map(cardHTML).join("");
}

function renderCatSections(){
  const wrap = document.getElementById("catSections");
  wrap.innerHTML = CAT_ORDER.map(cat=>{
    const items = PRODUCTS.filter(p=>p.cat===cat);
    if(!items.length) return "";
    return `<section class="catblock" id="${catId(cat)}">
        <div class="block-head"><span class="orn left"></span><h2>${cat}</h2><span class="orn right"></span></div>
        <p class="cat-sub">${CAT_META[cat].sub}</p>
        <div class="pcard-list">${items.map(cardHTML).join("")}</div>
      </section>`;
  }).join("");
}

function bindCards(root=document){
  root.querySelectorAll("[data-size]").forEach(btn=>{
    btn.onclick = () => { const [id,i] = btn.dataset.size.split("|"); selectedSize[id]=+i; refreshCardPrices(id); };
  });
  root.querySelectorAll("[data-add]").forEach(btn=>{
    btn.onclick = () => {
      const id = btn.dataset.add;
      addToCart(id, selectedSize[id]);
      btn.textContent = "Added ✓"; btn.classList.add("added");
      setTimeout(()=>{ btn.textContent="Add to cart"; btn.classList.remove("added"); }, 1100);
    };
  });
}

function refreshCardPrices(id){
  const p = PRODUCTS.find(x=>x.id===id);
  const s = p.sizes[selectedSize[id]];
  const hasMrp = s.mrp && s.mrp > s.price;
  document.querySelectorAll(`[data-now="${id}"]`).forEach(e=>e.textContent=rupee(s.price));
  document.querySelectorAll(`[data-mrp="${id}"]`).forEach(e=>e.textContent=rupee(s.mrp));
  document.querySelectorAll(`[data-save="${id}"]`).forEach(e=>e.textContent="SAVE "+rupee(s.mrp-s.price));
  document.querySelectorAll(`[data-off="${id}"]`).forEach(e=>{ if(hasMrp) e.textContent=Math.round((1-s.price/s.mrp)*100)+"% OFF"; });
  document.querySelectorAll(`[data-card="${id}"] [data-size]`).forEach(b=>{
    b.classList.toggle("active", +b.dataset.size.split("|")[1]===selectedSize[id]);
  });
}

/* ============================================================
   CART
   ============================================================ */
function key(id,si){ return id+"__"+si; }
function addToCart(id, si){ const k=key(id,si); cart[k]=(cart[k]||0)+1; updateCart(); showToast("Added to basket"); }
function changeQty(k, d){ cart[k]=(cart[k]||0)+d; if(cart[k]<=0) delete cart[k]; updateCart(); }
function lineInfo(k){ const [id,si]=k.split("__"); const p=PRODUCTS.find(x=>x.id===id); return {p, s:p.sizes[+si], qty:cart[k]}; }
function cartCountTotal(){ return Object.values(cart).reduce((a,b)=>a+b,0); }
function cartTotal(){ return Object.keys(cart).reduce((sum,k)=>{ const {s,qty}=lineInfo(k); return sum+s.price*qty; },0); }

function updateCart(){
  cartCountEl.textContent = cartCountTotal();
  const keys = Object.keys(cart);
  drawerItems.innerHTML = "";
  if(keys.length === 0){
    drawerItems.appendChild(emptyMsg); emptyMsg.hidden = false;
  } else {
    keys.forEach(k=>{
      const {p,s,qty} = lineInfo(k);
      const line = document.createElement("div");
      line.className = "line";
      line.innerHTML = `
        <div class="line-emoji">${p.emoji}</div>
        <div class="line-info">
          <strong>${p.name}</strong>
          <small>${s.label} · ${rupee(s.price)} × ${qty} = ${rupee(s.price*qty)}</small>
          <button class="line-remove" data-rm="${k}">remove</button>
        </div>
        <div class="qty" data-k="${k}">
          <button type="button" aria-label="Decrease">−</button>
          <span>${qty}</span>
          <button type="button" aria-label="Increase">+</button>
        </div>`;
      drawerItems.appendChild(line);
    });
    drawerItems.querySelectorAll(".qty").forEach(box=>{
      const k=box.dataset.k; const [m,,pl]=box.children;
      m.onclick=()=>changeQty(k,-1); pl.onclick=()=>changeQty(k,+1);
    });
    drawerItems.querySelectorAll("[data-rm]").forEach(b=> b.onclick=()=>changeQty(b.dataset.rm,-9999));
  }
  totalAmt.textContent = rupee(cartTotal());
}

function openDrawer(){ drawer.classList.add("open"); drawer.setAttribute("aria-hidden","false"); scrim.hidden=false; document.body.style.overflow="hidden"; }
function closeDrawer(){ drawer.classList.remove("open"); drawer.setAttribute("aria-hidden","true"); scrim.hidden=true; document.body.style.overflow=""; }
document.getElementById("cartOpen").onclick = openDrawer;
document.getElementById("cartClose").onclick = closeDrawer;
scrim.onclick = closeDrawer;
document.addEventListener("keydown", e=>{ if(e.key==="Escape") closeDrawer(); });

/* delivery / pickup */
const locWrap = document.getElementById("locWrap");
document.querySelectorAll(".toggle-opt").forEach(btn=>{
  btn.onclick = () => {
    document.querySelectorAll(".toggle-opt").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    deliveryMode = btn.dataset.mode;
    locWrap.style.display = deliveryMode === "Delivery" ? "flex" : "none";
  };
});

/* ============================================================
   PLACE ORDER -> WHATSAPP
   ============================================================ */
const form = document.getElementById("orderForm");
const formError = document.getElementById("formError");
form.addEventListener("submit", e=>{
  e.preventDefault(); formError.hidden = true;
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const loc = document.getElementById("custLoc").value.trim();
  if(cartCountTotal()===0) return showError("Your basket is empty — add something first.");
  if(!name) return showError("Please add your name.");
  if(phone.replace(/\D/g,"").length < 10) return showError("Please enter a valid 10-digit phone number.");
  if(deliveryMode==="Delivery" && !loc) return showError("Please add your delivery location.");

  let msg = `*New Order — Sri Jeyaram Bakery & Sweets*\n`;
  msg += `\n*Name:* ${name}`;
  msg += `\n*Phone:* ${phone}`;
  msg += `\n*Type:* ${deliveryMode}`;
  if(deliveryMode==="Delivery") msg += `\n*Location:* ${loc}`;
  msg += `\n\n*Order details:*`;
  Object.keys(cart).forEach(k=>{ const {p,s,qty}=lineInfo(k); msg += `\n• ${qty} × ${p.name} (${s.label}) — ${rupee(s.price*qty)}`; });
  msg += `\n\n*Total: ${rupee(cartTotal())}*`;
  msg += `\n\nPlease confirm my order. Thank you! 🙏`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
});
function showError(t){ formError.textContent=t; formError.hidden=false; }

/* toast */
let toastTimer;
function showToast(t){
  toast.textContent=t; toast.hidden=false;
  requestAnimationFrame(()=>toast.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>{ toast.classList.remove("show"); setTimeout(()=>toast.hidden=true,250); },1400);
}

/* ============================================================
   HERO CAROUSEL
   ============================================================ */
function setupCarousel(){
  const track = document.getElementById("heroTrack");
  const slides = track.children.length;
  const dotsWrap = document.getElementById("heroDots");
  let idx = 0;
  for(let i=0;i<slides;i++){
    const b=document.createElement("button"); b.setAttribute("aria-label","Go to slide "+(i+1));
    if(i===0) b.classList.add("active");
    b.onclick=()=>{ idx=i; go(); reset(); };
    dotsWrap.appendChild(b);
  }
  function go(){ track.style.transform=`translateX(-${idx*100}%)`; [...dotsWrap.children].forEach((d,i)=>d.classList.toggle("active",i===idx)); }
  let timer;
  function tick(){ idx=(idx+1)%slides; go(); }
  function reset(){ clearInterval(timer); start(); }
  function start(){ if(!matchMedia("(prefers-reduced-motion: reduce)").matches) timer=setInterval(tick,5000); }
  go(); start();
}

/* ============================================================
   VIDEOS — autoplay on scroll, pause out of view
   ============================================================ */
function setupVideoAutoplay(){
  const vids = document.querySelectorAll("video.cine");
  if(!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ const v=en.target;
      if(en.isIntersecting && en.intersectionRatio>=0.5){ const pr=v.play(); if(pr) pr.catch(()=>{}); }
      else v.pause();
    });
  }, { threshold:[0,0.5,1] });
  vids.forEach(v=>io.observe(v));
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
let revealObserver;
function observeReveals(){
  if(!("IntersectionObserver" in window)){ document.querySelectorAll(".reveal").forEach(el=>el.classList.add("in")); return; }
  if(!revealObserver){
    revealObserver = new IntersectionObserver((ents)=>{
      ents.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); revealObserver.unobserve(en.target);} });
    }, { threshold:0.08 });
  }
  document.querySelectorAll(".reveal:not(.in)").forEach(el=>revealObserver.observe(el));
}

/* ============================================================
   MENU DRAWER (left)
   ============================================================ */
function buildMenuNav(){
  const nav = document.getElementById("menuNav");
  let html = `<a data-jump="bestsellers"><span class="mico">⭐</span> Best Sellers</a>`;
  CAT_ORDER.forEach(cat=>{
    html += `<a data-jump="${catId(cat)}"><span class="mico">${CAT_META[cat].ico}</span> ${cat}</a>`;
  });
  html += `<a data-jump="gifting"><span class="mico">🎁</span> Gifting</a>`;
  html += `<a data-jump="films"><span class="mico">🎬</span> From Our Kitchen</a>`;
  html += `<a data-jump="visit"><span class="mico">📍</span> Visit & Order</a>`;
  nav.innerHTML = html;
  nav.querySelectorAll("a").forEach(a=>{
    a.onclick = () => {
      closeMenu();
      const t = document.getElementById(a.dataset.jump);
      if(t) setTimeout(()=>t.scrollIntoView({behavior:"smooth"}), 250);
    };
  });
}
const menuDrawer = document.getElementById("menuDrawer");
function openMenu(){ menuDrawer.classList.add("open"); menuDrawer.setAttribute("aria-hidden","false"); scrim.hidden=false; document.body.style.overflow="hidden"; }
function closeMenu(){ menuDrawer.classList.remove("open"); menuDrawer.setAttribute("aria-hidden","true"); if(!drawer.classList.contains("open")){ scrim.hidden=true; document.body.style.overflow=""; } }
document.getElementById("hamburger").onclick = openMenu;
document.getElementById("menuClose").onclick = closeMenu;

/* scrim closes whichever drawer is open */
scrim.onclick = () => { closeDrawer(); closeMenu(); };
document.addEventListener("keydown", e=>{ if(e.key==="Escape"){ closeMenu(); closeSearch(); } });

/* ============================================================
   SEARCH
   ============================================================ */
const searchbar = document.getElementById("searchbar");
const searchInput = document.getElementById("searchInput");
function openSearch(){ searchbar.hidden=false; searchInput.focus(); }
function closeSearch(){ searchbar.hidden=true; searchInput.value=""; runSearch(); }
document.getElementById("searchOpen").onclick = () => { searchbar.hidden ? openSearch() : closeSearch(); };
document.getElementById("searchClose").onclick = closeSearch;
searchInput.addEventListener("input", runSearch);

function runSearch(){
  const q = searchInput.value.trim().toLowerCase();
  const bs = document.getElementById("bestsellers");
  // hide best-sellers + hero while actively searching, to focus results
  bs.style.display = q ? "none" : "";

  let anyVisible = false;
  document.querySelectorAll("#catSections .catblock").forEach(block=>{
    let blockHas = false;
    block.querySelectorAll(".pcard").forEach(card=>{
      const match = !q || card.dataset.name.includes(q);
      card.style.display = match ? "" : "none";
      if(match) blockHas = true;
    });
    block.style.display = blockHas ? "" : "none";
    if(blockHas) anyVisible = true;
  });

  // no-results message
  let nr = document.getElementById("noResults");
  if(q && !anyVisible){
    if(!nr){ nr = document.createElement("p"); nr.id="noResults"; nr.className="no-results";
      document.getElementById("catSections").appendChild(nr); }
    nr.textContent = `No items found for "${searchInput.value.trim()}".`;
    nr.style.display = "";
  } else if(nr){ nr.style.display = "none"; }
}

/* ============================================================
   REVEAL — fallback so nothing ever stays hidden
   ============================================================ */
function revealAll(){ document.querySelectorAll(".reveal").forEach(el=>el.classList.add("in")); }

/* ============================================================
   INIT
   ============================================================ */
document.getElementById("year").textContent = new Date().getFullYear();
renderCatRail();
renderBestSellers();
renderCatSections();
bindCards(document);
buildMenuNav();
updateCart();
setupCarousel();
setupVideoAutoplay();
document.querySelectorAll(".block-head, .cat-sub, .gifting-inner, .story-inner, .visit-card, .reel").forEach(el=>el.classList.add("reveal"));
observeReveals();
/* safety nets: never let the reveal animation keep content hidden */
window.addEventListener("load", revealAll);
setTimeout(revealAll, 1500);
