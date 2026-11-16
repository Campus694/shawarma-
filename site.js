'use strict';

const groups = {
  shawarma: ['Шаурма', [
    ['Классическая', [1000, 1350, 1700], 'Лаваш, курица гриль, капуста, маринованный огурец, свежий помидор, чесночный соус и кетчуп', 'classic'],
    ['Барбекю', [1100, 1450, 1800], 'Лаваш, курица гриль, капуста, маринованный лук, свежий помидор, болгарский перец, чесночный соус и барбекю', 'bbq'],
    ['3 сыра', [1200, 1600, 2000], 'Лаваш, курица гриль, капуста, сулугуни, чеддер, моцарелла, свежий помидор и чесночный соус', 'three-cheese'],
    ['Грибная', [1300, 1750, 2200], 'Лаваш, курица гриль, обжаренные грибы с луком в сметанном соусе, капуста, маринованный огурец и чесночный соус', 'mushroom'],
    ['Деревенская', [1350, 1850, 2300], 'Лаваш, курица гриль, обжаренные грибы с луком в сметанном соусе, капуста, маринованный огурец, картофель по-деревенски и чесночный соус', 'village'],
    ['Острая шрирачи', [1100, 1450, 1800], 'Лаваш, курица гриль, капуста, маринованный лук, маринованный огурец и соус сальса', 'sriracha'],
    ['Гавайская', [1200, 1600, 2000], 'Лаваш, курица гриль, ананас, капуста, маринованные шампиньоны, кунжутный и чесночный соусы', 'hawaiian'],
    ['Бекон', [1200, 1600, 2000], 'Лаваш, курица гриль, обжаренный бекон, капуста, свежий помидор, свежий огурец, кетчуп и чесночный соус', 'bacon'],
    ['Греческая', [1200, 1600, 2000], 'Лаваш, курица гриль, фета, капуста, оливки, свежий огурец, соус «Цезарь» и фирменный соус', 'greek'],
    ['Биг-Тейсти', [1100, 1450, 1800], 'Лаваш, курица гриль, капуста, свежий помидор, маринованный огурец, чесночный и бургерный соусы', 'tasty'],
    ['Чизбургер', [1300, 1750, 2200], 'Лаваш, бургерная котлета, чеддер, капуста, свежий помидор, маринованный огурец, чесночный, бургерный и гриль-соусы', 'cheeseburger'],
    ['Горчичная', [1100, 1450, 1800], 'Лаваш, курица гриль, капуста, свежий помидор, маринованный огурец, чесночный и горчичный соусы', 'mustard'],
    ['Карри', [1100, 1450, 1800], 'Лаваш, курица гриль, капуста, морковь по-корейски, маринованный огурец, чесночный соус и соус карри', 'curry'],
    ['Терияки', [1100, 1450, 1800], 'Лаваш, курица гриль, капуста, свежий помидор, свежий огурец, чесночный соус, кунжут и соус терияки', 'teriyaki'],
    ['Вегетарианская', [1100, 1450, 1800], 'Лаваш, фалафель из нута, капуста, свежий помидор, свежий огурец и чесночный соус', 'falafel'],
    ['Американская', [1200, 1600, 2000], 'Лаваш, курица гриль, капуста, маринованный огурец, картофель фри, хрустящий лук, соус ранч, кетчуп и горчица', 'american'],
    ['Баварская', [1100, 1450, 1800], 'Лаваш, колбаски гриль, капуста, свежий помидор, маринованный лук, чесночный соус и барбекю', 'bavarian'],
    ['Пеперони', [1100, 1450, 1800], 'Лаваш, курица гриль, слайсы салями, капуста, свежий помидор, свежий огурец, соус «Пеперони» и чесночный соус', 'pepperoni'],
    ['Фитнес-шаурма', [1200, 1600, 2000], 'Лаваш (мука, соль, вода), курица гриль, капуста, свежий помидор, свежий огурец и соус из греческого йогурта, французской горчицы и соевого соуса', 'fitness']
  ]],
  burgers: ['Бургеры', [
    ['Гамбургер', 1300, '290 г', 'Говяжья котлета, овощи и соус гриль'],
    ['Чизбургер', 1500, '300 г', 'Говяжья котлета, сыр и маринованный лук'],
    ['Спайси бургер', 1700, '350 г', 'Говяжья котлета, маринованный лук и острая сальса'],
    ['Бекон бургер', 1800, '300 г', 'Говяжья котлета, бекон, чеддер и соус гриль']
  ]],
  snacks: ['Снеки', [
    ['Картофель фри', 600, '130 г', 'Картофель с золотистой корочкой'],
    ['Луковые кольца', 750, '130 г', 'Кольца лука в хрустящей панировке'],
    ['Наггетсы S', 850, '80 г', 'Куриные наггетсы'],
    ['Куриные стрипсы S', 900, '170 г', 'Курица в панировке']
  ]],
  sauces: ['Соусы', [['Соус', 250, '30 г', 'Порция соуса']]],
  drinks: ['Напитки', [
    ['Bonaqua с газом', 290, '500 мл', ''],
    ['Bonaqua без газа', 290, '500 мл', ''],
    ['Coca-Cola Classic', 390, '500 мл', ''],
    ['Coca-Cola Zero', 390, '500 мл', ''],
    ['Fanta Lemon', 390, '500 мл', ''],
    ['Fanta Orange', 390, '500 мл', ''],
    ['Sprite', 390, '500 мл', '']
  ]]
};

const photos = {
  burgers: ['hamburger', 'cheeseburger', 'spicy-burger', 'bacon'],
  snacks: ['fries', 'rings', 'nuggets', 'strips'],
  sauces: ['sauce'],
  drinks: ['sparkling', 'water', 'cola', 'zero', 'lemon', 'orange', 'sprite']
};
const wrapSizes = [
  {name: 'Мини', weight: '350 г'},
  {name: 'Стандарт', weight: '500 г'},
  {name: 'Большая', weight: '650 г'}
];
const fitnessNutrition = [
  '372 ккал · Б 37 г · Ж 8 г · У 35 г',
  '590 ккал · Б 52 г · Ж 11 г · У 68 г',
  '660 ккал · Б 62 г · Ж 13 г · У 69 г'
];
const toppings = {
  jalapeno: {name: 'Халапеньо · 30 г', price: 200},
  cheese: {name: 'Сыр', price: 200},
  onion: {name: 'Маринованный лук', price: 200},
  mushrooms: {name: 'Грибы · 50 г', price: 200},
  bacon: {name: 'Бекон', price: 300},
  pepperoni: {name: 'Пеперони', price: 300},
  meat: {name: 'Мясо · 50 г', price: 300}
};
const items = Object.fromEntries(Object.entries(groups).flatMap(([group, [, entries]]) =>
  entries.map((entry, index) => {
    const id = group + '-' + index;
    if (group === 'shawarma') {
      const [name, prices, details, photoName] = entry;
      const sizes = wrapSizes.map((size, position) => ({
        ...size,
        price: prices[position],
        nutrition: photoName === 'fitness' ? fitnessNutrition[position] : ''
      }));
      const photo = 'assets/menu/shawarma-' + photoName + '.webp';
      return [id, {id, name, details, group, photo, sizes, price: prices[0], weight: wrapSizes[0].weight}];
    }
    const [name, price, weight, details] = entry;
    const photo = 'assets/menu/' + photos[group][index] + '.webp';
    return [id, {id, name, price, weight, details, group, photo}];
  })
));
const address = 'Минск, Октябрьская ул., 21, корп. 3';
const deliveryUrl = 'https://eda.yandex.ru/restaurant/shawarma_gpbj8';
const money = value => new Intl.NumberFormat('ru-BY', {maximumFractionDigits: 2}).format(value / 100) + ' Br';
const $ = selector => document.querySelector(selector);
const itemDialog = $('#item-dialog');
const sizeDialog = $('#size-dialog');
const addonsDialog = $('#addons-dialog');
const basketDialog = $('#basket-dialog');
const checkoutDialog = $('#checkout-dialog');
const fulfillmentDialog = $('#fulfillment-dialog');
const orderDialog = $('#order-dialog');
const infoDialog = $('#info-dialog');
const cart = new Map();
const variations = { standard: 'По рецепту', noCucumber: 'Без огурца', noOnion: 'Без лука' };
const pickupTimes = { soon: 'Как можно скорее · 15–25 мин', half: 'Примерно через 30 мин', hour: 'Примерно через 60 мин' };
const fulfillmentMethods = { pickup: 'Самовывоз', delivery: 'Доставка' };
const sheetChevron = '<svg class="icon fulfillment-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m8 5 5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const cookingStatus = `<span class="cooking-oven" aria-hidden="true">
  <svg width="27" height="27" viewBox="0 0 32 32" fill="none">
    <path d="M5 25v-9a11 11 0 0 1 22 0v9M3.5 25h25" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
    <path class="oven-flame" d="M16 11c.5 3.6 4.9 5.5 4.9 9a4.9 4.9 0 1 1-9.8 0c0-1.7.7-2.9 1.8-4.3.35 1.35.95 2 1.7 2.25.65-2.1 1.45-4.5 1.4-6.95Z" fill="currentColor"/>
  </svg></span><strong>Уже готовим</strong>`;
let fulfillmentMethod = 'pickup';
let cartFlight;
let query = '';
const search = $('#menu-query');

function normalize(value) {
  return value.toLocaleLowerCase('ru').replaceAll('ё', 'е').trim();
}

function updateSearch() {
  query = normalize(search.value);
  $('#clear-query').hidden = !search.value;
  renderMenu();
}

search.addEventListener('input', updateSearch);
$('#menu-search').addEventListener('submit', event => event.preventDefault());
$('#clear-query').addEventListener('click', () => {
  search.value = '';
  updateSearch();
  search.focus();
});

function renderMenu() {
  $('#products').innerHTML = Object.keys(groups).map(group => {
    const matches = Object.values(items).filter(item =>
      item.group === group && query.split(/\s+/).every(term =>
        normalize(item.name + ' ' + item.details + ' ' + groups[group][0]).includes(term))
    );
    if (!matches.length) return '';
    const cards = matches.map(item => {
      const photo = `<img src="${item.photo}" alt="" loading="lazy" width="460" height="460">`;
      const picture = item.sizes
        ? `<button class="card-picture" type="button" data-item="${item.id}" aria-label="Подробнее: ${item.name}">${photo}</button>`
        : `<div class="card-picture">${photo}</div>`;
      return `
      <article class="card">
        <div class="card-media">
          ${picture}
          <button class="add" type="button" ${item.sizes ? 'data-item' : 'data-add'}="${item.id}" aria-label="${item.sizes ? 'Настроить и добавить' : 'Добавить'}: ${item.name}">+</button>
        </div>
        <div class="card-content"><strong>${item.sizes ? 'от ' : ''}${money(item.price)}</strong><h4>${item.name}</h4>
          ${item.sizes ? `<button type="button" class="weight size-link" data-item="${item.id}" aria-label="Размеры и добавки: ${item.name}">350–650 г · Размеры и добавки ›</button>` : `<span class="weight">${item.weight}</span>`}
        </div>
      </article>`;
    }).join('');
    return `<section class="menu-section"><h3>${groups[group][0]}</h3><div class="card-grid">${cards}</div></section>`;
  }).join('') || '<p class="empty" role="status">Ничего не найдено. Попробуйте другое название.</p>';
}

function head(title) {
  return `<header class="sheet-head"><h2>${title}</h2></header>`;
}

function sheet(content, actions = '', header = '') {
  return `<div class="sheet">
    <button type="button" class="sheet-dismiss" data-close autofocus aria-label="Закрыть панель"></button>
    ${header}<div class="sheet-scroll">${content}</div>${actions}
  </div>`;
}

function closeSheet(dialog, next) {
  if (!dialog.open || dialog.classList.contains('is-closing')) return;
  dialog.classList.add('is-closing');
  const animation = dialog.getAnimations().find(effect => effect.animationName === 'sheet-out');
  const complete = () => {
    dialog.close();
    dialog.classList.remove('is-closing');
    next?.();
  };
  if (animation) animation.finished.then(complete, complete);
  else complete();
}

function animateCartAddition(photo, trigger) {
  const destination = $('[data-basket]');
  cartFlight?.cancel();
  cartFlight = undefined;
  const start = trigger.getBoundingClientRect();
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !start.width) {
    updateCount();
    return;
  }

  const thumbnail = document.createElement('img');
  if (destination.hidden) destination.classList.add('cart-arriving');
  destination.hidden = false;
  destination.getAnimations().find(animation => animation.animationName === 'cart-in')?.cancel();
  const end = destination.getBoundingClientRect();
  const startX = start.left + start.width / 2;
  const startY = start.top + start.height / 2;
  const x = end.left + end.width / 2 - startX;
  const y = end.top + end.height / 2 - startY;
  const distance = Math.hypot(x, y);
  const lift = Math.min(55, 32 + distance * .06);

  thumbnail.className = 'cart-flight-thumbnail';
  thumbnail.alt = '';
  thumbnail.src = photo;
  if (thumbnail.showPopover) thumbnail.popover = 'manual';
  thumbnail.setAttribute('aria-hidden', 'true');
  thumbnail.style.left = `${startX}px`;
  thumbnail.style.top = `${startY}px`;
  document.body.append(thumbnail);
  thumbnail.showPopover?.();
  const frames = Array.from({length: 25}, (_, index) => {
    const progress = index / 24;
    const arc = 4 * progress * (1 - progress);
    const scale = .86 + .2 * arc - .65 * progress;
    return {
      transform: `translate(${x * progress}px, ${y * progress - lift * arc}px) scale(${scale})`,
      opacity: Math.min(1, .12 + progress * 14, (1 - progress) * 10)
    };
  });
  const flight = thumbnail.animate(frames, {
    duration: Math.min(440, 330 + distance * .18),
    easing: 'cubic-bezier(.4,0,.24,1)',
    fill: 'both'
  });
  cartFlight = flight;
  const finish = () => {
    thumbnail.remove();
    if (cartFlight !== flight) return;
    cartFlight = undefined;
    updateCount(false);
    if (destination.hidden) return;
    destination.animate([
      {scale: '.98'},
      {scale: '1.05', offset: .38},
      {scale: '1'}
    ], {duration: 240, easing: 'cubic-bezier(.2,.65,.35,1)'});
  };
  flight.finished.then(finish, finish);
}

function switchSheet(current, next) {
  closeSheet(current, () => next.showModal());
}

function addItem(item, {quantity = 1, variation = 'standard', sizeIndex = 0, selected = [], trigger} = {}) {
  const size = item.sizes?.[sizeIndex];
  const additions = selected.map(key => toppings[key]);
  const price = (size?.price ?? item.price) + additions.reduce((sum, topping) => sum + topping.price, 0);
  const key = [item.id, variation, sizeIndex, ...selected].join('/');
  const existing = cart.get(key);
  cart.set(key, {item, variation, size, additions, price, quantity: (existing?.quantity ?? 0) + quantity});
  if (trigger) animateCartAddition(item.photo, trigger);
  else updateCount();
  $('#announcement').textContent = item.name + ' в корзине';
}

function openAddons(selected, variation, applicable, onSelect) {
  const extras = Object.entries(toppings).map(([key, topping]) =>
    `<label class="option"><input form="addons-form" type="checkbox" name="topping" value="${key}" ${selected.includes(key) ? 'checked' : ''}><span>${topping.name}</span><strong>+${money(topping.price)}</strong></label>`).join('');
  const options = applicable.length > 1 ? `<div class="sheet-block" role="group" aria-labelledby="addons-variation"><h3 id="addons-variation">Пожелания к составу</h3>${applicable.map(([key, label]) =>
    `<label class="option"><input form="addons-form" type="radio" name="variation" value="${key}" ${key === variation ? 'checked' : ''}>${label}</label>`).join('')}</div>` : '';
  $('#addons-panel').innerHTML = sheet(`<div class="sheet-block">${extras}</div>${options}`,
    '<form class="sheet-actions" id="addons-form"><button type="submit" class="button yellow">Готово</button></form>', head('Добавки'));
  $('#addons-form').addEventListener('submit', event => {
    event.preventDefault();
    if (addonsDialog.classList.contains('is-closing')) return;
    const values = new FormData(event.currentTarget);
    onSelect(values.getAll('topping'), values.get('variation') || 'standard');
    closeSheet(addonsDialog);
  });
  addonsDialog.showModal();
}

function openSize(sizes, selectedIndex, trigger, onSelect) {
  const options = sizes.map((size, index) =>
    `<label class="option"><input form="size-form" type="radio" name="size" value="${index}" ${index === selectedIndex ? 'checked' : ''}>
      <span>${size.name} · ${size.weight}${size.nutrition ? `<small>${size.nutrition}</small>` : ''}</span>
      <strong>${money(size.price)}</strong></label>`).join('');
  $('#size-panel').innerHTML = sheet(`<div class="sheet-block fulfillment-options">${options}</div>`,
    '<form class="sheet-actions" id="size-form"><button class="button yellow" type="submit">Выбрать</button></form>', head('Размер шаурмы'));
  $('#size-form').addEventListener('submit', event => {
    event.preventDefault();
    if (sizeDialog.classList.contains('is-closing')) return;
    onSelect(Number(new FormData(event.currentTarget).get('size')));
    closeSheet(sizeDialog);
  });
  sizeDialog.addEventListener('close', () => trigger.setAttribute('aria-expanded', 'false'), {once: true});
  trigger.setAttribute('aria-expanded', 'true');
  sizeDialog.showModal();
}

function openItem(item) {
  const applicable = [['standard', variations.standard]];
  if (item.group === 'shawarma' && /огурец/.test(item.details)) applicable.push(['noCucumber', variations.noCucumber]);
  if (item.group === 'shawarma' && /лук/.test(item.details)) applicable.push(['noOnion', variations.noOnion]);
  const picture = `<div class="sheet-photo ${item.group === 'shawarma' ? 'sheet-photo-wrap' : ''}"><img src="${item.photo}" alt=""></div>`;
  const details = `<div class="sheet-block sheet-details"><h2>${item.name}</h2>${item.sizes ? '' : `<span class="weight">${item.weight}</span>`}${item.details ? `<p>${item.details}</p>` : ''}</div>`;
  const sizes = item.sizes ? `<button type="button" class="sheet-block fulfillment-trigger item-size" id="item-size" aria-haspopup="dialog" aria-controls="size-dialog" aria-expanded="false"><span>Размер</span><span class="item-size-value"><span id="item-size-summary"></span><small id="item-nutrition" class="item-nutrition" hidden></small></span>${sheetChevron}</button>` : '';
  const addOns = item.sizes ? `<button type="button" class="sheet-block fulfillment-trigger item-addons" id="item-addons" aria-haspopup="dialog" aria-controls="addons-dialog"><span>Добавки</span>${sheetChevron}</button>` : '';
  const actions = `<form class="sheet-actions" id="item-form">
    <div class="qty"><button type="button" id="item-minus" aria-label="Уменьшить количество">−</button><output id="item-quantity">1</output><button type="button" id="item-plus" aria-label="Увеличить количество">+</button></div>
    <button class="button yellow action-price" type="submit" id="item-add"><span>В корзину</span><strong id="item-total">${money(item.price)}</strong></button>
  </form>`;
  $('#item-panel').innerHTML = sheet(`<div class="sheet-intro">${picture}${details}</div>` + sizes + addOns, actions);
  let quantity = 1;
  let sizeIndex = 0;
  let selected = [];
  let variation = 'standard';
  const form = $('#item-form');
  const sizeButton = $('#item-size');
  sizeButton?.addEventListener('click', () => openSize(item.sizes, sizeIndex, sizeButton, nextSize => {
    sizeIndex = nextSize;
    updateItemPrice();
  }));
  const addonsButton = $('#item-addons');
  addonsButton?.addEventListener('click', () => openAddons(selected, variation, applicable, (nextSelected, nextVariation) => {
    selected = nextSelected;
    variation = nextVariation;
    updateItemPrice();
  }));
  const minus = $('#item-minus');
  minus.disabled = true;
  function setQuantity(value) {
    quantity = Math.max(1, value);
    minus.disabled = quantity === 1;
    $('#item-quantity').value = quantity;
    updateItemPrice();
  }
  function updateItemPrice() {
    const size = item.sizes?.[sizeIndex];
    const basePrice = size?.price ?? item.price;
    const extras = selected.reduce((sum, key) => sum + toppings[key].price, 0);
    $('#item-total').textContent = money((basePrice + extras) * quantity);
    const nutrition = $('#item-nutrition');
    if (nutrition) {
      $('#item-size-summary').textContent = `${size.name} · ${size.weight}`;
      nutrition.textContent = size.nutrition || '';
      nutrition.hidden = !size.nutrition;
    }
  }
  minus.addEventListener('click', () => setQuantity(quantity - 1));
  $('#item-plus').addEventListener('click', () => setQuantity(quantity + 1));
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (itemDialog.classList.contains('is-closing')) return;
    addItem(item, {quantity, variation, sizeIndex, selected, trigger: $('#item-add')});
    closeSheet(itemDialog);
  });
  updateItemPrice();
  itemDialog.showModal();
}

function updateCount(animateBadge = true) {
  const count = [...cart.values()].reduce((sum, entry) => sum + entry.quantity, 0);
  const button = $('[data-basket]');
  const badge = $('[data-count]');
  const increased = count > Number(badge.textContent);
  const alreadyVisible = !button.hidden;
  badge.textContent = count;
  button.classList.remove('cart-arriving');
  button.hidden = count === 0;

  if (animateBadge && increased && alreadyVisible && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    badge.getAnimations().forEach(animation => animation.cancel());
    badge.animate([{transform: 'scale(1)'}, {transform: 'scale(1.25)', offset: .45}, {transform: 'scale(1)'}],
      {duration: 280, easing: 'ease-out'});
  }
}

function cartTotal() {
  return [...cart.values()].reduce((sum, {price, quantity}) => sum + price * quantity, 0);
}

function renderBasket() {
  const panel = $('#basket-panel');
  if (!cart.size) {
    panel.innerHTML = sheet('<div class="sheet-block"><p>Выберите блюда в меню.</p></div>',
      '<div class="sheet-actions"><button class="button yellow" data-close>К меню</button></div>', head('Корзина'));
    return;
  }
  const rows = [...cart].map(([key, {item, variation, size, additions, price, quantity}]) => `<div class="cart-row">
    <img class="cart-image" src="${item.photo}" alt="">
    <div class="cart-summary"><strong>${item.name}</strong><small>${size ? size.name + ' · ' + size.weight : item.weight}${variation === 'standard' ? '' : ' · ' + variations[variation]}</small>${additions.length ? '<small>+ Добавки</small>' : ''}<b>${money(price * quantity)}</b></div>
    <div class="qty"><button type="button" data-key="${key}" data-delta="-1" aria-label="Убрать одну порцию: ${item.name}">−</button><span>${quantity}</span><button type="button" data-key="${key}" data-delta="1" aria-label="Добавить одну порцию: ${item.name}">+</button></div>
    </div>`).join('');
  const extras = ['sauces-0', 'snacks-0', 'drinks-2'].map(id => {
    const item = items[id];
    return `<button type="button" class="extra-add" data-extra="${id}" aria-label="Добавить: ${item.name}"><span class="extra-photo"><img src="${item.photo}" alt=""><span class="extra-plus" aria-hidden="true">+</span></span><strong>${money(item.price)}</strong><span class="extra-name">${item.name}</span></button>`;
  }).join('');
  panel.innerHTML = sheet(`<div class="sheet-block cart-items">${rows}</div><div class="sheet-block"><h3 class="cart-extras-heading">Что-то ещё?</h3><div class="extras">${extras}</div></div>`,
    `<div class="sheet-actions"><button class="button yellow action-price" type="button" id="to-checkout"><span>К оформлению</span><strong>${money(cartTotal())}</strong></button></div>`, head('Корзина'));
  $('#to-checkout').addEventListener('click', openCheckout);
}

function openCheckout() {
  $('#checkout-panel').innerHTML = sheet(`<button type="button" class="sheet-block fulfillment-trigger" id="fulfillment-trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="fulfillment-dialog"><span id="fulfillment-label"></span>${sheetChevron}</button>
    <div id="checkout-pickup" class="sheet-stack">
      <div class="sheet-block"><h3>Где забрать</h3><p>${address}</p></div>
      <div class="sheet-block"><h3>Когда заберёте</h3>${Object.entries(pickupTimes).map(([key, label], index) =>
        `<label class="option"><input form="pickup-form" type="radio" name="time" value="${key}" ${index === 0 ? 'checked' : ''}>${label}</label>`).join('')}</div>
    </div>
    <div class="sheet-block" id="checkout-delivery" hidden><h3 class="delivery-heading"><img src="assets/yandex-eda-round.webp" alt="" width="30" height="30">Через Яндекс Еду</h3><p>Закажите удобную доставку нашей продукции до двери через Яндекс Еду.</p></div>`,
    `<form class="sheet-actions" id="pickup-form">
      <div class="pickup-slider" id="pickup-submit">
        <div class="pickup-slider-copy" aria-hidden="true"><span><strong>Оформить</strong><small>Потяните вправо</small></span><strong>${money(cartTotal())}</strong></div>
        <button class="pickup-slider-handle" type="button" aria-label="Оформить заказ на самовывоз, ${money(cartTotal())}">
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h13m-5-5 5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <a class="button yellow" id="delivery-link" href="${deliveryUrl}" target="_blank" rel="noopener" hidden>Открыть Яндекс Еду<svg class="delivery-external-arrow" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 15 15 5M6.5 5H15v8.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a></form>`);
  syncFulfillment();
  $('#fulfillment-trigger').addEventListener('click', openFulfillment);
  $('#pickup-form').addEventListener('submit', event => {
    event.preventDefault();
    if (fulfillmentMethod === 'pickup' && cart.size && !checkoutDialog.classList.contains('is-closing')) showOrder();
  });
  bindPickupSlider($('#pickup-submit'));
  switchSheet(basketDialog, checkoutDialog);
}

function bindPickupSlider(track) {
  const handle = track.querySelector('button');
  let drag;

  function move(clientX) {
    const offset = Math.max(0, Math.min(drag.travel, clientX - drag.startX));
    track.style.setProperty('--slide-offset', `${offset}px`);
    track.style.setProperty('--slide-copy-opacity', 1 - offset / drag.travel);
    return offset;
  }

  function reset() {
    drag = undefined;
    track.classList.remove('is-dragging');
    track.style.removeProperty('--slide-offset');
    track.style.removeProperty('--slide-copy-opacity');
  }

  handle.addEventListener('pointerdown', event => {
    if (drag || !event.isPrimary || event.button !== 0) return;
    const travel = track.clientWidth - handle.offsetWidth - 2 * handle.offsetLeft;
    if (travel <= 0) return;
    drag = {pointer: event.pointerId, startX: event.clientX, travel};
    handle.setPointerCapture(event.pointerId);
    track.classList.add('is-dragging');
  });
  handle.addEventListener('pointermove', event => {
    if (drag?.pointer === event.pointerId) move(event.clientX);
  });
  handle.addEventListener('pointerup', event => {
    if (drag?.pointer !== event.pointerId) return;
    if (move(event.clientX) >= drag.travel - 1) {
      drag = undefined;
      track.classList.remove('is-dragging');
      handle.form.requestSubmit();
    } else {
      reset();
    }
  });
  handle.addEventListener('lostpointercapture', event => {
    if (drag?.pointer === event.pointerId) reset();
  });
  handle.addEventListener('click', event => {
    if (event.detail === 0) handle.form.requestSubmit();
  });
}

function syncFulfillment() {
  const delivery = fulfillmentMethod === 'delivery';
  $('#fulfillment-label').textContent = fulfillmentMethods[fulfillmentMethod];
  $('#checkout-pickup').hidden = delivery;
  $('#pickup-submit').hidden = delivery;
  $('#checkout-delivery').hidden = !delivery;
  $('#delivery-link').hidden = !delivery;
}

function openFulfillment() {
  const trigger = $('#fulfillment-trigger');
  $('#fulfillment-panel').innerHTML = sheet(`<div class="sheet-block fulfillment-options">${Object.entries(fulfillmentMethods).map(([key, label]) =>
    `<label class="option"><input type="radio" form="fulfillment-form" name="method" value="${key}" ${key === fulfillmentMethod ? 'checked' : ''}>${label}</label>`).join('')}</div>`,
    '<form class="sheet-actions" id="fulfillment-form"><button class="button yellow" type="submit">Выбрать</button></form>', head('Способ получения'));
  $('#fulfillment-form').addEventListener('submit', event => {
    event.preventDefault();
    if (fulfillmentDialog.classList.contains('is-closing')) return;
    fulfillmentMethod = new FormData(event.currentTarget).get('method');
    syncFulfillment();
    closeSheet(fulfillmentDialog);
  });
  fulfillmentDialog.addEventListener('close', () => trigger.setAttribute('aria-expanded', 'false'), {once: true});
  trigger.setAttribute('aria-expanded', 'true');
  fulfillmentDialog.showModal();
}

let activeOrder = null;
function remainingOrderTime() {
  return Math.max(0, Math.ceil((activeOrder.readyAt - Date.now()) / 60000));
}
function updateOrderTime() {
  if (!activeOrder) return;
  const minutes = remainingOrderTime();
  document.querySelectorAll('[data-order-time]').forEach(node => {
    node.textContent = minutes ? '~ ' + minutes + ' мин' : 'Уточняем время';
  });
}
function renderOrderDetails() {
  if (!activeOrder) return;
  const rows = activeOrder.rows.map(({item, size, additions, variation, price, quantity}) => `<div class="order-detail-row">
    <img src="${item.photo}" alt="" width="56" height="56">
    <div><strong>${item.name}</strong><small>${size ? size.name + ' · ' + size.weight : item.weight}${variation && variation !== 'standard' ? ' · ' + variations[variation] : ''}</small>${additions.length ? '<small>' + additions.map(topping => topping.name).join(', ') + '</small>' : ''}<small>${quantity} шт.</small></div><b>${money(price * quantity)}</b></div>`).join('');
  $('#order-panel').innerHTML = sheet(`<div class="sheet-block cooking-state">${cookingStatus}<span class="order-time" data-order-time></span></div>
    <div class="sheet-block order-details"><h3>Ваш заказ</h3>${rows}<div class="order-total"><span>Итого</span><strong>${money(activeOrder.total)}</strong></div></div>
    <div class="sheet-block"><h3>Самовывоз</h3><p>${address}</p><p>Примерное время · <span data-order-time></span></p></div>`,
    '<div class="sheet-actions"><button class="button yellow" type="button" data-close>Понятно</button></div>', head('Заказ №' + activeOrder.number));
  updateOrderTime();
}
function showOrder() {
  const delay = {soon: 20, half: 30, hour: 60}[$('input[name="time"]:checked')?.value] || 20;
  activeOrder = {number: 1000 + Math.floor(Math.random() * 9000), rows: structuredClone([...cart.values()]), total: cartTotal(), readyAt: Date.now() + delay * 60000};
  const strip = $('#cooking-strip');
  strip.hidden = true;
  cart.clear();
  updateCount();
  renderOrderDetails();
  orderDialog.addEventListener('close', () => {
    strip.hidden = false;
    strip.innerHTML = cookingStatus + '<span class="order-time" data-order-time></span>';
    updateOrderTime();
  }, {once: true});
  switchSheet(checkoutDialog, orderDialog);
}
$('#cooking-strip').addEventListener('click', () => {
  if (!activeOrder || orderDialog.open) return;
  renderOrderDetails();
  orderDialog.showModal();
});
setInterval(updateOrderTime, 1000);
document.addEventListener('visibilitychange', updateOrderTime);

for (const dialog of document.querySelectorAll('dialog')) {
  let backdropPressed = false;
  let gripStart;
  let gripMoved = false;
  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    closeSheet(dialog);
  });
  dialog.addEventListener('pointerdown', event => {
    backdropPressed = event.target === dialog;
    const grip = event.target.closest('.sheet-dismiss');
    if (!grip || !event.isPrimary) return;
    gripMoved = false;
    gripStart = {id: event.pointerId, x: event.clientX, y: event.clientY};
    grip.setPointerCapture(event.pointerId);
  });
  dialog.addEventListener('pointerup', event => {
    if (gripStart?.id !== event.pointerId) return;
    const dy = event.clientY - gripStart.y;
    const dx = Math.abs(event.clientX - gripStart.x);
    gripStart = undefined;
    gripMoved = Math.max(Math.abs(dy), dx) > 10;
    if (dy > 42 && dy > dx) closeSheet(dialog);
  });
  dialog.addEventListener('pointercancel', () => { gripStart = undefined; backdropPressed = false; });
  dialog.addEventListener('click', event => {
    if (event.target.closest('.sheet-dismiss') && gripMoved && event.detail > 0) {
      event.stopPropagation();
      return;
    }
    if (event.target === dialog && backdropPressed) {
      const {left, top, right, bottom} = dialog.getBoundingClientRect();
      if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) closeSheet(dialog);
    }
    backdropPressed = false;
  });
}

document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-info]');
  if (trigger) {
    event.preventDefault();
    const information = document.getElementById(trigger.dataset.info);
    const copy = information.content.firstElementChild.cloneNode(true);
    const title = copy.querySelector('h2').textContent;
    copy.querySelector('h2').remove();
    $('#info-panel').innerHTML = sheet(copy.outerHTML, '', head(title));
    infoDialog.showModal();
    return;
  }
  const button = event.target.closest('button');
  if (!button) return;
  if (button.matches('.add') && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    button.getAnimations().forEach(animation => animation.cancel());
    button.animate([
      {backgroundColor: '#ffdc00', offset: 0},
      {backgroundColor: '#ffdc00', offset: .18},
      {backgroundColor: '#fff', offset: 1}
    ], {duration: 220, easing: 'ease-out'});
  }
  if ('add' in button.dataset) addItem(items[button.dataset.add], {trigger: button});
  if ('item' in button.dataset) openItem(items[button.dataset.item]);
  if ('basket' in button.dataset) {
    updateCount(false);
    renderBasket();
    basketDialog.showModal();
  }
  if ('close' in button.dataset) closeSheet(button.closest('dialog'));
  if ('extra' in button.dataset) {
    addItem(items[button.dataset.extra]);
    const scrollTop = basketDialog.querySelector('.sheet-scroll').scrollTop;
    renderBasket();
    basketDialog.querySelector('.sheet-scroll').scrollTop = scrollTop;
    basketDialog.querySelector('[data-extra="' + button.dataset.extra + '"]').focus({preventScroll:true});
  }
  if ('delta' in button.dataset) {
    const key = button.dataset.key;
    const entry = cart.get(key);
    entry.quantity += Number(button.dataset.delta);
    if (entry.quantity < 1) cart.delete(key);
    const scrollTop = basketDialog.querySelector('.sheet-scroll').scrollTop;
    renderBasket();
    updateCount();
    basketDialog.querySelector('.sheet-scroll').scrollTop = scrollTop;
    const corresponding = [...basketDialog.querySelectorAll('[data-key]')].find(next =>
      next.dataset.key === key && next.dataset.delta === button.dataset.delta);
    (corresponding || basketDialog.querySelector('[data-close]')).focus({preventScroll:true});
  }
});
renderMenu();
