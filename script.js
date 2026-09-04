/* ============================================================
   AUTOLOGIX GROUP · i18n RU/EN + анимации + WhatsApp-форма
   ============================================================ */
(function () {
  'use strict';

  var WA_PHONE = '971558708364';

  /* ---------- СЛОВАРИ ---------- */
  var I18N = {
    ru: {
      _title: 'Autologix Group - международная логистика и доставка грузов из Дубая (ОАЭ)',
      _desc: 'Авиа, море, авто и авиапочта из ОАЭ. Выкуп и доставка любых товаров из Дубая: косметика, лекарства, электроника. Расчёт стоимости за 15 минут в WhatsApp.',
      _burger: 'Открыть меню',
      'logo.group': 'GROUP',
      'nav.services': 'Услуги',
      'nav.buyer': 'Проводник в ОАЭ',
      'nav.how': 'Как работаем',
      'nav.about': 'О компании',
      'nav.contacts': 'Контакты',
      'mnav.wa': 'Написать в WhatsApp',
      'mnav.note': 'ОТВЕТ В ТЕЧЕНИЕ 15 МИНУТ · 24/7',
      'hero.kicker': 'ДУБАЙ · МЕЖДУНАРОДНАЯ ЛОГИСТИКА · 12 ЛЕТ',
      'hero.t1': 'МЕЖДУНАРОДНЫЕ',
      'hero.t2': 'ГРУЗОПЕРЕВОЗКИ',
      'hero.t3': 'из ОАЭ в любую точку мира',
      'hero.lead': 'Авиа, море, авто и авиапочта. Выкупаем и доставляем любые товары из Дубая. Расчёт стоимости - за 15 минут в WhatsApp.',
      'hero.cta1': 'Рассчитать стоимость',
      'hero.cta2': 'Наши услуги',
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
      'how.s1.t': 'Заявка в WhatsApp',
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
      'calc.phone': 'Телефон или WhatsApp',
      'calc.cargo': 'Что везём? Груз или ссылка на товар',
      'calc.btn': 'Получить расчёт в WhatsApp',
      'calc.note': 'Нажимая кнопку, вы перейдёте в WhatsApp с готовым сообщением.',
      'calc.thx1': 'Спасибо!',
      'calc.thx2': 'Открываем WhatsApp - сообщение уже готово к отправке.',
      'calc.cap': 'DUBAI · UAE',
      'cont.idx': 'КОНТАКТЫ',
      'cont.h2': 'На связи 24/7',
      'cont.wa': 'Написать →',
      'cont.telk': 'ТЕЛЕФОН',
      'cont.tel': 'Позвонить →',
      'cont.ig': 'Открыть →',
      'cont.tt': 'Открыть →',
      'cont.offk': 'ОФИС',
      'cont.addr': 'Meydan Free Zone, Meydan Grandstand, 6th Floor, Al Meydan Rd, Nad Al Sheba, Dubai, UAE',
      'cont.map': 'Открыть в Google Maps →',
      'cont.hrk': 'ГРАФИК',
      'cont.hours': 'Заявки и расчёт - 24/7. Ответ в WhatsApp в течение 15 минут.',
      'foot.line': 'Международная логистика из Дубая',
      'sb.tel': 'Позвонить',
      'wa.header': 'Здравствуйте! Пишу с сайта Autologix Group. Хочу рассчитать доставку.',
      'wa.hero': 'Здравствуйте! Нужен расчёт стоимости доставки из ОАЭ.',
      'wa.avia': 'Здравствуйте! Интересуют авиаперевозки из ОАЭ. Посчитаете стоимость?',
      'wa.sea': 'Здравствуйте! Интересуют морские перевозки из ОАЭ. Посчитаете стоимость?',
      'wa.road': 'Здравствуйте! Интересуют автоперевозки из ОАЭ. Посчитаете стоимость?',
      'wa.mail': 'Здравствуйте! Хочу отправить посылку авиапочтой из ОАЭ. Посчитаете стоимость?',
      'wa.buyer': 'Здравствуйте! Хочу заказать товар из ОАЭ. Сейчас пришлю ссылку.',
      'wa.form': 'Здравствуйте! Меня зовут {name}. Нужен расчёт доставки: {cargo}. Мой номер: {phone}'
    },
    en: {
      _title: 'Autologix Group - international logistics and shipping from Dubai (UAE)',
      _desc: 'Air, sea and road freight plus airmail from the UAE. We buy out and deliver any goods from Dubai. Shipping quote within 15 minutes on WhatsApp.',
      _burger: 'Open menu',
      'logo.group': 'GROUP',
      'nav.services': 'Services',
      'nav.buyer': 'UAE concierge',
      'nav.how': 'How it works',
      'nav.about': 'About us',
      'nav.contacts': 'Contacts',
      'mnav.wa': 'Message on WhatsApp',
      'mnav.note': 'REPLY WITHIN 15 MINUTES · 24/7',
      'hero.kicker': 'DUBAI · INTERNATIONAL LOGISTICS · 12 YEARS',
      'hero.t1': 'INTERNATIONAL',
      'hero.t2': 'FREIGHT',
      'hero.t3': 'from the UAE to anywhere in the world',
      'hero.lead': 'Air, sea, road and airmail. We buy out and deliver any goods from Dubai. Shipping quote within 15 minutes on WhatsApp.',
      'hero.cta1': 'Get a quote',
      'hero.cta2': 'Our services',
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
      'how.s1.t': 'Request on WhatsApp',
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
      'calc.phone': 'Phone or WhatsApp',
      'calc.cargo': 'What are we shipping? Cargo or product link',
      'calc.btn': 'Get a quote on WhatsApp',
      'calc.note': 'The button opens WhatsApp with a ready-made message.',
      'calc.thx1': 'Thank you!',
      'calc.thx2': 'Opening WhatsApp - your message is ready to send.',
      'calc.cap': 'DUBAI · UAE',
      'cont.idx': 'CONTACTS',
      'cont.h2': 'Available 24/7',
      'cont.wa': 'Message →',
      'cont.telk': 'PHONE',
      'cont.tel': 'Call →',
      'cont.ig': 'Open →',
      'cont.tt': 'Open →',
      'cont.offk': 'OFFICE',
      'cont.addr': 'Meydan Free Zone, Meydan Grandstand, 6th Floor, Al Meydan Rd, Nad Al Sheba, Dubai, UAE',
      'cont.map': 'Open in Google Maps →',
      'cont.hrk': 'HOURS',
      'cont.hours': 'Requests and quotes - 24/7. WhatsApp reply within 15 minutes.',
      'foot.line': 'International logistics from Dubai',
      'sb.tel': 'Call us',
      'wa.header': 'Hello! I am writing from the Autologix Group website. I would like a shipping quote.',
      'wa.hero': 'Hello! I need a shipping quote from the UAE.',
      'wa.avia': 'Hello! I am interested in air freight from the UAE. Could you quote it?',
      'wa.sea': 'Hello! I am interested in sea freight from the UAE. Could you quote it?',
      'wa.road': 'Hello! I am interested in road freight from the UAE. Could you quote it?',
      'wa.mail': 'Hello! I would like to send a parcel by airmail from the UAE. Could you quote it?',
      'wa.buyer': 'Hello! I would like to order goods from the UAE. Sending you the link now.',
      'wa.form': 'Hello! My name is {name}. I need a shipping quote: {cargo}. My number: {phone}'
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

    /* префилл WhatsApp-ссылок */
    document.querySelectorAll('a[data-wa]').forEach(function (a) {
      var key = a.getAttribute('data-wa');
      if (d[key]) a.href = 'https://wa.me/' + WA_PHONE + '?text=' + encodeURIComponent(d[key]);
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

  /* ?lang= в URL важнее localStorage (нужно для Google Ads) */
  var urlLang = new URLSearchParams(location.search).get('lang');
  var stored = null;
  try { stored = localStorage.getItem('alx-lang'); } catch (e) {}
  applyLang(urlLang === 'ru' || urlLang === 'en' ? urlLang : (stored || 'ru'), false);

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang'), true); });
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

  /* ---------- ФОРМА → WHATSAPP ---------- */
  var form = document.getElementById('calcForm');
  var thanks = document.getElementById('calcThanks');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (form.name.value || '').trim();
      var phone = (form.phone.value || '').trim();
      var cargo = (form.cargo.value || '').trim();
      if (!name || !phone || !cargo) {
        [form.name, form.phone, form.cargo].forEach(function (f) {
          f.style.borderColor = f.value.trim() ? '' : '#E2574C';
        });
        return;
      }
      var msg = I18N[lang]['wa.form']
        .replace('{name}', name)
        .replace('{phone}', phone)
        .replace('{cargo}', cargo);
      window.open('https://wa.me/' + WA_PHONE + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
      form.hidden = true;
      thanks.hidden = false;
    });
  }

  /* ---------- ДЕЛЕГИРОВАННЫЕ КЛИКИ TEL / WHATSAPP ----------
     Чистые обработчики: сюда позже будут повешены gtag-конверсии. */
  document.addEventListener('click', function (e) {
    var tel = e.target.closest('a[href^="tel:"]');
    if (tel) {
      /* gtag('event', 'conversion', { send_to: 'AW-XXX/tel' }); */
      return;
    }
    var wa = e.target.closest('a[href*="wa.me"]');
    if (wa) {
      /* gtag('event', 'conversion', { send_to: 'AW-XXX/whatsapp' }); */
      return;
    }
  });

})();
