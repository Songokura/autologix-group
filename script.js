/* ============================================================
   AUTOLOGIX GROUP · i18n RU/EN + анимации + цены + лид-форма
   ============================================================ */
(function () {
  'use strict';

  var WA_PHONE = '971558708364';

  /* ---------- КОНВЕРСИИ GOOGLE ADS ----------
     Один хелпер на все цели: если gtag ещё не загрузился (блокировщик,
     медленная сеть) - молча выходим, переход по ссылке не ломаем. */
  function algConversion(label) {
    if (typeof gtag !== 'function') return;
    gtag('event', 'conversion', {
      send_to: 'AW-18435765004/' + label,
      value: 1.0,
      currency: 'USD'
    });
  }

  /* ---------- СЛОВАРИ ---------- */
  var I18N = {
    ru: {
      _title: 'Autologix Group - международная логистика и доставка грузов из Дубая (ОАЭ)',
      _desc: 'Авиа, море, авто и авиапочта из ОАЭ. Выкуп и доставка любых товаров из Дубая: косметика, лекарства, электроника. Цены на курьерскую доставку в Казахстан, расчёт груза за 15 минут.',
      _burger: 'Открыть меню',
      'logo.group': 'GROUP',
      'nav.services': 'Услуги',
      'nav.prices': 'Цены',
      'nav.buyer': 'Проводник в ОАЭ',
      'nav.how': 'Как работаем',
      'nav.about': 'О компании',
      'nav.contacts': 'Контакты',
      'cta.lead': 'Оставить заявку',
      'mnav.note': 'ОТВЕТ В ТЕЧЕНИЕ 15 МИНУТ · 24/7',
      'hero.kicker': 'ДУБАЙ · МЕЖДУНАРОДНАЯ ЛОГИСТИКА · 12 ЛЕТ',
      'hero.t1': 'МЕЖДУНАРОДНЫЕ',
      'hero.t2': 'ГРУЗОПЕРЕВОЗКИ',
      'hero.t3': 'из ОАЭ в любую точку мира',
      'hero.lead': 'Авиа, море, авто и авиапочта. Выкупаем и доставляем любые товары из Дубая. Расчёт стоимости - за 15 минут.',
      'hero.cta1': 'Рассчитать стоимость',
      'hero.cta2': 'Цены на доставку',
      'svc.idx': 'УСЛУГИ',
      'svc.h2': 'Доставим ваш груз четырьмя путями',
      'svc.lead': 'Подберём маршрут под ваши сроки и бюджет.',
      'svc.link': 'Рассчитать',
      'svc.avia.t': 'Авиаперевозки',
      'svc.avia.l1': 'Срочные и ценные грузы',
      'svc.avia.l2': 'Из аэропортов Дубая DXB и DWC',
      'svc.sea.t': 'Морские перевозки',
      'svc.sea.l1': 'Контейнеры FCL, LCL и сборные грузы',
      'svc.sea.l2': 'Из портов ОАЭ в любой порт мира',
      'svc.road.t': 'Автоперевозки',
      'svc.road.l1': 'Фуры и сборные грузы',
      'svc.road.l2': 'По ОАЭ и на международных маршрутах',
      'svc.mail.t': 'Авиапочта',
      'svc.mail.l1': 'Документы и посылки до двери',
      'svc.mail.l2': 'Статус отправления на каждом этапе',
      'pr.idx': 'ЦЕНЫ',
      'pr.h2': 'Курьерская доставка из Дубая в Казахстан',
      'pr.lead': 'Посылки от 1 до 20 кг до двери. Выберите вес - цена сразу.',
      'pr.kg': 'кг',
      'pr.aria': 'Вес посылки, кг',
      'pr.th1': 'Вес',
      'pr.th2': 'USD',
      'pr.th3': 'Тенге',
      'pr.cta': 'Отправить посылку',
      'pr.d.kz': 'Казахстан',
      'pr.d.ru': 'Россия',
      'pr.d.other': 'Другие страны',
      'pr.q.t': 'Расчёт по заявке',
      'pr.q.d': 'Европа, Азия, Америка, СНГ - назовём цену и сроки за 15 минут.',
      'pr.cta2': 'Рассчитать доставку',
      'pr.note': 'Цена за всю посылку до двери. Больше 20 кг, грузы и выкуп товаров - рассчитаем за 15 минут.',
      'buyer.idx': 'ПРОВОДНИК В ОАЭ',
      'buyer.h2': 'Купим и привезём всё, что есть в Эмиратах',
      'buyer.lead': 'Ваш личный проводник по магазинам и складам Дубая: вы присылаете ссылку, остальное делаем мы.',
      'buyer.f1.t': 'Выкуп любых товаров',
      'buyer.f1.d': 'Косметика, лекарства, электроника, запчасти - что угодно из ОАЭ.',
      'buyer.f2.t': 'Адрес в ОАЭ для покупок',
      'buyer.f2.d': 'Заказывайте в магазинах Эмиратов на наш адрес - примем и отправим вам.',
      'buyer.f3.t': 'Доставка до двери',
      'buyer.f3.d': 'Упакуем и отправим удобным путём - авиа или морем.',
      'buyer.c1': 'Косметика', 'buyer.c2': 'Парфюмерия', 'buyer.c3': 'Лекарства', 'buyer.c4': 'Витамины',
      'buyer.c5': 'Электроника', 'buyer.c6': 'Запчасти', 'buyer.c7': 'Одежда', 'buyer.c8': 'Детские товары',
      'buyer.cta': 'Прислать ссылку на товар',
      'buyer.tag': 'ПРИНИМАЕМ ПОКУПКИ НА НАШ АДРЕС В ДУБАЕ',
      'chat.online': 'онлайн',
      'chat.m1': 'Здравствуйте! Сможете выкупить и привезти эти витамины из Дубая?',
      'chat.m2': 'Да, конечно! Пришлите ссылку - посчитаем за 15 минут.',
      'how.idx': 'ПРОЦЕСС',
      'how.h2': 'От заявки до двери - четыре шага',
      'how.s1.t': 'Заявка на сайте',
      'how.s1.d': 'Ссылка на товар или параметры груза.',
      'how.s2.t': 'Расчёт за 15 минут',
      'how.s2.d': 'Цена, сроки и оптимальный маршрут.',
      'how.s3.t': 'Выкуп или забор груза',
      'how.s3.d': 'Покупаем товар или забираем груз у поставщика.',
      'how.s4.t': 'Доставка и статус',
      'how.s4.d': 'Везём до двери и держим вас в курсе.',
      'how.cap': 'СКЛАД · КОНСОЛИДАЦИЯ ГРУЗОВ',
      'about.idx': 'О КОМПАНИИ',
      'about.h2': 'Логистика - наша профессия',
      'about.st1': 'лет в логистике',
      'about.st2': 'года в ОАЭ',
      'about.st3': 'приём заявок',
      'about.st4': 'минут на ответ',
      'about.line': 'База - Meydan Free Zone, Дубай. Отсюда грузы уходят авиа, морем и автотранспортом по всему миру.',
      'calc.idx': 'РАСЧЁТ',
      'calc.h2': 'Узнайте стоимость за 15 минут',
      'calc.lead': 'Опишите груз или пришлите ссылку на товар - вернёмся с ценой и сроками.',
      'calc.name': 'Ваше имя',
      'calc.phone': 'Телефон',
      'calc.cargo': 'Что везём? Груз или ссылка на товар',
      'calc.btn': 'Получить расчёт',
      'calc.note': 'Ответим в течение 15 минут, заявки принимаем 24/7.',
      'calc.thx1': 'Спасибо!',
      'calc.thx2': 'Заявка принята, ответим в течение 15 минут. Если открылся WhatsApp - нажмите «Отправить», чтобы продублировать её.',
      'f.pick': 'Выберите',
      'f.kz': 'Казахстан',
      'f.ru': 'Россия',
      'f.other': 'Другая страна',
      'f.dir': 'Куда везём',
      'f.kg': 'Вес, кг (примерно)',
      'f.err': 'Укажите имя, телефон и куда везём',
      'f.btn': 'Отправить заявку',
      'lm.h': 'Рассчитаем доставку за 15 минут',
      'lm.l': 'Оставьте заявку - менеджер назовёт цену, сроки и маршрут.',
      'lm.ok': 'Хорошо',
      'lm.close': 'Закрыть',
      'calc.cap': 'DUBAI · UAE',
      'cont.idx': 'КОНТАКТЫ',
      'cont.h2': 'На связи 24/7',
      'cont.leadk': 'ЗАЯВКА',
      'cont.leadv': 'Расчёт за 15 минут',
      'cont.lead': 'Оставить заявку →',
      'cont.ig': 'Открыть →',
      'cont.tt': 'Открыть →',
      'cont.offk': 'ОФИС',
      'cont.addr': 'Meydan Free Zone, Meydan Grandstand, 6th Floor, Al Meydan Rd, Nad Al Sheba, Dubai, UAE',
      'cont.map': 'Открыть в Google Maps →',
      'cont.hrk': 'ГРАФИК',
      'cont.hours': 'Заявки и расчёт - 24/7. Ответ в течение 15 минут.',
      'foot.line': 'Международная логистика из Дубая',
      'wa.msg': 'Здравствуйте! Заявка с сайта autologix-group.kz.\nИмя: {n}\nТелефон: {p}\nКуда: {d}{w}{s}{c}',
      'wa.kg': '\nВес: {v} кг',
      'wa.svc': '\nУслуга: ',
      'wa.com': '\nКомментарий: '
    },
    en: {
      _title: 'Autologix Group - international logistics and shipping from Dubai (UAE)',
      _desc: 'Air, sea and road freight plus airmail from the UAE. We buy out and deliver any goods from Dubai. Courier prices to Kazakhstan, cargo quote within 15 minutes.',
      _burger: 'Open menu',
      'logo.group': 'GROUP',
      'nav.services': 'Services',
      'nav.prices': 'Prices',
      'nav.buyer': 'UAE concierge',
      'nav.how': 'How it works',
      'nav.about': 'About us',
      'nav.contacts': 'Contacts',
      'cta.lead': 'Send a request',
      'mnav.note': 'REPLY WITHIN 15 MINUTES · 24/7',
      'hero.kicker': 'DUBAI · INTERNATIONAL LOGISTICS · 12 YEARS',
      'hero.t1': 'INTERNATIONAL',
      'hero.t2': 'FREIGHT',
      'hero.t3': 'from the UAE to anywhere in the world',
      'hero.lead': 'Air, sea, road and airmail. We buy out and deliver any goods from Dubai. Shipping quote within 15 minutes.',
      'hero.cta1': 'Get a quote',
      'hero.cta2': 'Shipping prices',
      'svc.idx': 'SERVICES',
      'svc.h2': 'Four ways to deliver your cargo',
      'svc.lead': 'We will find the best route for your deadline and budget.',
      'svc.link': 'Get a quote',
      'svc.avia.t': 'Air freight',
      'svc.avia.l1': 'Urgent and high-value cargo',
      'svc.avia.l2': 'From Dubai airports DXB and DWC',
      'svc.sea.t': 'Sea freight',
      'svc.sea.l1': 'FCL, LCL containers and groupage',
      'svc.sea.l2': 'From UAE ports to any port worldwide',
      'svc.road.t': 'Road freight',
      'svc.road.l1': 'Full trucks and groupage cargo',
      'svc.road.l2': 'Across the UAE and international routes',
      'svc.mail.t': 'Airmail',
      'svc.mail.l1': 'Documents and parcels door to door',
      'svc.mail.l2': 'Shipment status at every stage',
      'pr.idx': 'PRICES',
      'pr.h2': 'Courier delivery from Dubai worldwide',
      'pr.lead': 'Fixed prices by weight to Kazakhstan and Russia. Other countries - quoted within 15 minutes.',
      'pr.kg': 'kg',
      'pr.aria': 'Parcel weight, kg',
      'pr.th1': 'Weight',
      'pr.th2': 'AED',
      'pr.th3': 'USD',
      'pr.cta': 'Send a parcel',
      'pr.d.kz': 'Kazakhstan',
      'pr.d.ru': 'Russia',
      'pr.d.other': 'Other countries',
      'pr.q.t': 'Quoted on request',
      'pr.q.d': 'Europe, Asia, the Americas, Africa - price and timing within 15 minutes.',
      'pr.cta2': 'Get a quote',
      'pr.note': 'Price for the whole parcel, door to door. Heavier parcels, cargo and buy-out - quoted within 15 minutes.',
      'buyer.idx': 'UAE CONCIERGE',
      'buyer.h2': 'We buy and ship anything the Emirates sell',
      'buyer.lead': 'Your personal shopper in Dubai: you send a link, we handle the rest.',
      'buyer.f1.t': 'Buy-out of any goods',
      'buyer.f1.d': 'Cosmetics, medicines, electronics, spare parts - anything from the UAE.',
      'buyer.f2.t': 'UAE address for your orders',
      'buyer.f2.d': 'Order from UAE stores to our address - we receive and forward to you.',
      'buyer.f3.t': 'Door-to-door delivery',
      'buyer.f3.d': 'We pack and ship the best way - by air or by sea.',
      'buyer.c1': 'Cosmetics', 'buyer.c2': 'Perfume', 'buyer.c3': 'Medicines', 'buyer.c4': 'Vitamins',
      'buyer.c5': 'Electronics', 'buyer.c6': 'Spare parts', 'buyer.c7': 'Clothes', 'buyer.c8': 'Kids goods',
      'buyer.cta': 'Send a product link',
      'buyer.tag': 'WE RECEIVE ORDERS AT OUR DUBAI ADDRESS',
      'chat.online': 'online',
      'chat.m1': 'Hi! Could you buy these vitamins in Dubai and ship them to me?',
      'chat.m2': 'Sure! Send us the link - we will quote it within 15 minutes.',
      'how.idx': 'PROCESS',
      'how.h2': 'From request to your door in four steps',
      'how.s1.t': 'Request on the website',
      'how.s1.d': 'A product link or your cargo details.',
      'how.s2.t': 'Quote in 15 minutes',
      'how.s2.d': 'Price, timing and the best route.',
      'how.s3.t': 'Buy-out or pickup',
      'how.s3.d': 'We buy the goods or collect cargo from the supplier.',
      'how.s4.t': 'Delivery and tracking',
      'how.s4.d': 'We deliver to your door and keep you updated.',
      'how.cap': 'WAREHOUSE · CARGO CONSOLIDATION',
      'about.idx': 'ABOUT US',
      'about.h2': 'Logistics is our profession',
      'about.st1': 'years in logistics',
      'about.st2': 'years in the UAE',
      'about.st3': 'requests accepted',
      'about.st4': 'minutes to reply',
      'about.line': 'Based in Meydan Free Zone, Dubai. From here cargo departs by air, sea and road worldwide.',
      'calc.idx': 'QUOTE',
      'calc.h2': 'Get your price in 15 minutes',
      'calc.lead': 'Describe your cargo or send a product link - we will reply with price and timing.',
      'calc.name': 'Your name',
      'calc.phone': 'Phone',
      'calc.cargo': 'What are we shipping? Cargo or product link',
      'calc.btn': 'Get a quote',
      'calc.note': 'We reply within 15 minutes, requests accepted 24/7.',
      'calc.thx1': 'Thank you!',
      'calc.thx2': 'Request received, we will reply within 15 minutes. If WhatsApp opened, press Send to duplicate it.',
      'f.pick': 'Choose',
      'f.kz': 'Kazakhstan',
      'f.ru': 'Russia',
      'f.other': 'Another country',
      'f.dir': 'Destination',
      'f.kg': 'Weight, kg (approx.)',
      'f.err': 'Please enter your name, phone and destination',
      'f.btn': 'Send request',
      'lm.h': 'Shipping quote within 15 minutes',
      'lm.l': 'Leave a request - our manager will give you the price, timing and route.',
      'lm.ok': 'OK',
      'lm.close': 'Close',
      'calc.cap': 'DUBAI · UAE',
      'cont.idx': 'CONTACTS',
      'cont.h2': 'Available 24/7',
      'cont.leadk': 'REQUEST',
      'cont.leadv': 'Quote in 15 minutes',
      'cont.lead': 'Send a request →',
      'cont.ig': 'Open →',
      'cont.tt': 'Open →',
      'cont.offk': 'OFFICE',
      'cont.addr': 'Meydan Free Zone, Meydan Grandstand, 6th Floor, Al Meydan Rd, Nad Al Sheba, Dubai, UAE',
      'cont.map': 'Open in Google Maps →',
      'cont.hrk': 'HOURS',
      'cont.hours': 'Requests and quotes - 24/7. Reply within 15 minutes.',
      'foot.line': 'International logistics from Dubai',
      'wa.msg': 'Hello! Request from autologix-group.kz.\nName: {n}\nPhone: {p}\nDestination: {d}{w}{s}{c}',
      'wa.kg': '\nWeight: {v} kg',
      'wa.svc': '\nService: ',
      'wa.com': '\nComment: '
    }
  };

  var lang = 'ru';

  function applyLang(next, save) {
    if (!I18N[next]) next = 'ru';
    lang = next;
    var d = I18N[lang];
    document.documentElement.lang = lang;
    document.title = d._title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', d._desc);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (d[key] != null) el.textContent = d[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (d[key] != null) el.setAttribute('aria-label', d[key]);
    });

    /* переключатель */
    document.querySelectorAll('.lang button').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    var burger = document.getElementById('burger');
    if (burger) burger.setAttribute('aria-label', d._burger);

    if (save) { try { localStorage.setItem('alx-lang', lang); } catch (e) {} }
  }

  /* ?lang= в URL важнее localStorage (нужно для Google Ads); по умолчанию английский -
     основная аудитория с 28.09.2026 - ОАЭ */
  var urlLang = new URLSearchParams(location.search).get('lang');
  var stored = null;
  try { stored = localStorage.getItem('alx-lang'); } catch (e) {}
  applyLang(urlLang === 'ru' || urlLang === 'en' ? urlLang : (stored || 'en'), false);

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang'), true); renderPrices(); });
  });

  /* ---------- ШАПКА ---------- */
  var hdr = document.getElementById('hdr');
  function onScrollHdr() { hdr.classList.toggle('scrolled', window.scrollY > 10); }
  onScrollHdr();
  window.addEventListener('scroll', onScrollHdr, { passive: true });

  /* ---------- БУРГЕР ---------- */
  var burgerBtn = document.getElementById('burger');
  var mnav = document.getElementById('mnav');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    burgerBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    mnav.setAttribute('aria-hidden', open ? 'false' : 'true');
  }
  burgerBtn.addEventListener('click', function () {
    setMenu(!document.body.classList.contains('menu-open'));
  });
  mnav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- ПРОРИСОВКА МАРШРУТА В ГЕРОЕ ---------- */
  var route = document.querySelector('.hero-route');
  if (route) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { route.classList.add('go'); });
    });
  }

  /* ---------- REVEAL ---------- */
  var revealEls = document.querySelectorAll('.reveal, .reveal-card, .reveal-img, .chat');
  if (!reduced && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- СЧЁТЧИКИ ---------- */
  function animateNum(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var t0 = null, dur = 1400;
    function frame(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * e) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var nums = document.querySelectorAll('.num[data-count]');
  if (!reduced && 'IntersectionObserver' in window) {
    var ioN = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateNum(en.target); ioN.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    nums.forEach(function (el) { ioN.observe(el); });
  } else {
    nums.forEach(function (el) {
      el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || '');
    });
  }

  /* ---------- ЛИНИЯ МАРШРУТА В «КАК РАБОТАЕМ» ---------- */
  var steps = document.getElementById('steps');
  var stepsSvg = steps ? steps.querySelector('.steps-line') : null;
  if (steps && stepsSvg && !reduced) {
    var ticking = false;
    function drawSteps() {
      ticking = false;
      var r = steps.getBoundingClientRect();
      var vh = window.innerHeight;
      var p = (vh * 0.85 - r.top) / r.height;
      p = Math.max(0, Math.min(1, p));
      stepsSvg.style.clipPath = 'inset(0 0 ' + ((1 - p) * 100).toFixed(2) + '% 0)';
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(drawSteps); }
    }, { passive: true });
    window.addEventListener('resize', drawSteps);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) drawSteps(); });
      }, { threshold: [0, .25, .5, .75, 1] }).observe(steps);
    }
    drawSteps();
    /* первые секунды после загрузки: шрифты и раскладка ещё двигаются */
    var tries = 0;
    var iv = setInterval(function () {
      drawSteps();
      if (++tries > 12) clearInterval(iv);
    }, 300);
  }

  /* ---------- МАГНИТНАЯ КНОПКА (десктоп) ---------- */
  if (!reduced && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.magnet').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
        var dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
        btn.style.transform = 'translate(' + (dx * 5).toFixed(1) + 'px,' + (dy * 5 - 2).toFixed(1) + 'px)';
      });
      btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
    });
  }

  /* ---------- ЦЕНЫ ----------
     Прайс клиента «pricelist KZ courier.xlsx», курьерская доставка из ОАЭ.
     Строка: вес кг, AED, $ (AED / 3.65, целые, как в прайсе), ₸ ($ x 441.88, курс НБ РК 28.09.2026).
     Русская версия - только Казахстан, $ и ₸. Английская - Казахстан, Россия и «другие страны»
     (расчёт по заявке), AED и $. */
  var PRICES = {
    kz: [
      [1, 240, 66, 29164], [2, 270, 74, 32699], [3, 300, 82, 36234], [4, 320, 88, 38885],
      [5, 350, 96, 42420], [6, 370, 101, 44630], [7, 400, 110, 48607], [8, 420, 115, 50816],
      [9, 450, 123, 54351], [10, 480, 132, 58328], [11, 520, 142, 62747], [12, 550, 151, 66724],
      [13, 580, 159, 70259], [14, 610, 167, 73794], [15, 640, 175, 77329], [16, 670, 184, 81306],
      [17, 700, 192, 84841], [18, 750, 205, 90585], [19, 770, 211, 93237], [20, 800, 219, 96772]
    ],
    /* лист Russia того же прайса, 1-30 кг; только английская версия */
    ru: [
      [1, 280, 77, null], [2, 280, 77, null], [3, 310, 85, null], [4, 340, 93, null], [5, 370, 101, null],
      [6, 400, 110, null], [7, 430, 118, null], [8, 460, 126, null], [9, 500, 137, null], [10, 540, 148, null],
      [11, 580, 159, null], [12, 630, 173, null], [13, 670, 184, null], [14, 720, 197, null], [15, 760, 208, null],
      [16, 800, 219, null], [17, 845, 232, null], [18, 890, 244, null], [19, 930, 255, null], [20, 970, 266, null],
      [21, 1020, 279, null], [22, 1060, 290, null], [23, 1100, 301, null], [24, 1145, 314, null], [25, 1190, 326, null],
      [26, 1230, 337, null], [27, 1280, 351, null], [28, 1320, 362, null], [29, 1360, 373, null], [30, 1400, 384, null]
    ]
  };
  var dest = 'kz';
  var NB = '\u00a0';
  function grp(v) { return Math.round(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, NB); }
  var CUR = {
    aed: { code: 'AED', i: 1, f: function (v) { return 'AED' + NB + grp(v); } },
    usd: { code: 'USD', i: 2, f: function (v) { return '$' + grp(v); } },
    kzt: { code: 'Тенге', i: 3, f: function (v) { return grp(v) + NB + '₸'; } }
  };
  function curPair() { return lang === 'en' ? [CUR.aed, CUR.usd] : [CUR.usd, CUR.kzt]; }

  var prRange = document.getElementById('prRange');
  var prTables = document.getElementById('prTables');

  function renderPrices() {
    if (!prTables) return;
    if (lang !== 'en') dest = 'kz';
    var list = PRICES[dest] || PRICES.kz;
    var c = curPair(), half = Math.ceil(list.length / 2), kgWord = I18N[lang]['pr.kg'];
    var sec = prTables.closest('.sec-price');
    sec.classList.toggle('is-other', dest === 'other');
    document.getElementById('prQuote').hidden = dest !== 'other';
    document.getElementById('prDest').hidden = lang !== 'en';
    document.querySelectorAll('#prDest button').forEach(function (b) {
      var on = b.getAttribute('data-dest') === dest;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.getElementById('prRoute').textContent = 'DXB → ' + { kz: 'KZ', ru: 'RU', other: 'WORLD' }[dest];
    var cta = document.querySelector('.js-lead[data-weight]');
    cta.firstElementChild.textContent = I18N[lang][dest === 'other' ? 'pr.cta2' : 'pr.cta'];
    prRange.max = list[list.length - 1][0];
    document.getElementById('prMax').textContent = prRange.max;
    if (+prRange.value > +prRange.max) prRange.value = prRange.max;
    prTables.querySelectorAll('[data-i18n="pr.th2"]').forEach(function (th) { th.textContent = c[0].code; });
    prTables.querySelectorAll('[data-i18n="pr.th3"]').forEach(function (th) { th.textContent = c[1].code; });
    prTables.querySelectorAll('tbody').forEach(function (tb, t) {
      tb.innerHTML = list.slice(t * half, (t + 1) * half).map(function (r) {
        return '<tr data-kg="' + r[0] + '"><td>' + r[0] + NB + '<span data-i18n="pr.kg">' + kgWord +
          '</span></td><td>' + c[0].f(r[c[0].i]) + '</td><td>' + c[1].f(r[c[1].i]) + '</td></tr>';
      }).join('');
    });
    showPrice();
  }

  function showPrice() {
    if (!prRange) return;
    var list = PRICES[dest] || PRICES.kz;
    var kg = +prRange.value, row = list[0], c = curPair();
    list.forEach(function (r) { if (r[0] <= kg) row = r; });
    document.getElementById('prKg').textContent = row[0];
    document.getElementById('prUsd').textContent = c[0].f(row[c[0].i]);
    document.getElementById('prKzt').textContent = c[1].f(row[c[1].i]);
    var p = (row[0] - prRange.min) / ((prRange.max - prRange.min) || 1) * 100;
    prRange.style.setProperty('--p', p + '%');
    prTables.querySelectorAll('tr[data-kg]').forEach(function (tr) {
      tr.classList.toggle('on', +tr.getAttribute('data-kg') === row[0]);
    });
  }

  if (prRange) {
    prRange.addEventListener('input', showPrice);
    prTables.addEventListener('click', function (e) {
      var tr = e.target.closest('tr[data-kg]');
      if (tr) { prRange.value = tr.getAttribute('data-kg'); showPrice(); }
    });
    document.getElementById('prDest').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-dest]');
      if (b) { dest = b.getAttribute('data-dest'); renderPrices(); }
    });
    renderPrices();
  }

  /* ---------- ЛИД-ФОРМА ----------
     Весь поток заявок - через форму: кнопки .js-lead открывают окно
     (data-svc подставляет услугу, кнопка цен - вес с ползунка), через 10 секунд
     окно всплывает само - один раз за визит и только если заявки ещё не было.
     В Telegram заявку отправляет трекер LeadBot (слушает submit и забирает поля),
     сайт проверяет поля, считает конверсию и дублирует заявку в WhatsApp. */
  var lm = document.getElementById('lm');
  var lmForm = document.getElementById('lmForm');
  var leadSent = false, lmLast = null, lmTimer = null;
  try { leadSent = sessionStorage.getItem('alx-lead') === '1'; } catch (e) {}

  function lmOpen(btn) {
    if (!lm) return;
    clearTimeout(lmTimer);
    lmForm.hidden = false;
    lm.querySelector('.thanks').hidden = true;
    var el = lmForm.elements;
    el['Услуга'].value = btn && btn.dataset.svc ? btn.dataset.svc : '';
    if (btn && btn.dataset.weight === 'range' && prRange) {
      el['Вес, кг'].value = dest === 'other' ? '' : prRange.value;
      el['Направление'].value = { kz: 'Казахстан', ru: 'Россия', other: 'Другая страна' }[dest];
      if (dest === 'other') el['Услуга'].value = 'Курьерская доставка (другие страны)';
    }
    setMenu(false);
    lmLast = document.activeElement;
    lm.hidden = false;
    document.body.classList.add('lm-open');
    setTimeout(function () { if (innerWidth > 760) el.name.focus(); }, 60);
  }
  function lmClose() {
    if (!lm || lm.hidden) return;
    lm.hidden = true;
    document.body.classList.remove('lm-open');
    if (lmLast && lmLast.focus) lmLast.focus();
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.js-lead');
    if (!b) return;
    e.preventDefault();
    lmOpen(b);
  });
  if (lm) {
    document.getElementById('lmX').addEventListener('click', lmClose);
    lm.querySelector('.lm-done').addEventListener('click', lmClose);
    lm.addEventListener('click', function (e) { if (e.target === lm) lmClose(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lmClose(); });
    lmTimer = setTimeout(function () {
      if (leadSent || !lm.hidden || document.body.classList.contains('menu-open')) return;
      try { if (sessionStorage.getItem('alx-lm')) return; sessionStorage.setItem('alx-lm', '1'); } catch (e) {}
      lmOpen(null);
    }, 10000);
  }

  function optText(sel) {
    return sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].text : sel.value;
  }
  function waText(form) {
    var d = I18N[lang], el = form.elements;
    var kg = el['Вес, кг'].value.trim(), svc = el['Услуга'].value, c = el.comment.value.trim();
    return d['wa.msg']
      .replace('{n}', el.name.value.trim())
      .replace('{p}', el.phone.value.trim())
      .replace('{d}', optText(el['Направление']))
      .replace('{w}', kg ? d['wa.kg'].replace('{v}', kg) : '')
      .replace('{s}', svc ? d['wa.svc'] + svc : '')
      .replace('{c}', c ? d['wa.com'] + c : '');
  }

  /* проверка полей. Обработчик на window в фазе захвата срабатывает раньше
     трекера: ошибочная форма не уходит в Telegram пустой заявкой */
  function checkLead(form) {
    var el = form.elements, ok = true;
    function need(inp, good) {
      inp.closest('.field').classList.toggle('bad', !good);
      if (!good) ok = false;
    }
    need(el.name, el.name.value.trim().length > 1);
    need(el.phone, el.phone.value.replace(/\D/g, '').length >= 10);
    need(el['Направление'], !!el['Направление'].value);
    form.querySelector('.f-err').hidden = ok;
    return ok;
  }
  window.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form.classList || !form.classList.contains('lf')) return;
    e.preventDefault();
    if (form.elements.website.value || !checkLead(form)) e.stopImmediatePropagation();
  }, true);

  document.querySelectorAll('.lf').forEach(function (form) {
    /* обычная фаза: трекер уже забрал поля. WhatsApp открываем синхронно,
       в момент клика (иначе iOS блокирует окно), - трекер допишет в текст
       код обращения и склеит форму и WhatsApp в одно обращение */
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.querySelector('.f-err').hidden || form.elements.website.value) return;
      leadSent = true; clearTimeout(lmTimer);
      try { sessionStorage.setItem('alx-lead', '1'); } catch (err) {}
      algConversion('htCgCK6OufAcEIzm7dZE');
      var url = 'https://wa.me/' + WA_PHONE + '?text=' + encodeURIComponent(waText(form));
      var w = window.open(url, '_blank', 'noopener');
      if (!w) location.href = url;
      var th = form.parentNode.querySelector('.thanks');
      setTimeout(function () { form.reset(); form.hidden = true; if (th) th.hidden = false; }, 0);
    });
    form.addEventListener('input', function (e) {
      var f = e.target.closest && e.target.closest('.field');
      if (f && e.target.value) f.classList.remove('bad');
    });
  });

  /* ---------- ДЕЛЕГИРОВАННЫЕ КЛИКИ TEL / WHATSAPP ----------
     Конверсии Google Ads, аккаунт AW-18435765004.
     Ярлыки: телефон - xIyUCOqCwfAcEIzm7dZE, форма - htCgCK6OufAcEIzm7dZE,
     контакт (WhatsApp) - NMo_CJjtw_AcEIzm7dZE. */
  document.addEventListener('click', function (e) {
    var tel = e.target.closest('a[href^="tel:"]');
    if (tel) {
      algConversion('xIyUCOqCwfAcEIzm7dZE');
      return;
    }
    var wa = e.target.closest('a[href*="wa.me"]');
    if (wa) {
      algConversion('NMo_CJjtw_AcEIzm7dZE');
      return;
    }
  });

})();
