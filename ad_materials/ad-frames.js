/* Ad-material frame builder — geometry transcribed from vpnclient-v1.1.fig
   (Screens-AppStore / Screens-Google-Play / Screens-PC).
   Layouts are declared as data; every frame is staged on the five
   z-depth planes documented in guidelines/z-depth.card.html.        */
const AdFrames = (function () {
  const L = 'assets/', I = '../assets/';
  const DEV = {
    iphone:  { img: L + 'iphone14-black.png',    w: 1056, h: 2145, sx: 53,     sy: 45.502, sw: 950,     sh: 2055,   r: 86 },
    samsung: { img: L + 'galaxy-s22-ultra.png',  w: 940,  h: 1984, sx: 25.939, sy: 30.775, sw: 881.179, sh: 1909.1, r: 56 }
  };
  const SHOT = { main: L + 'shot-main-on.png', apps: L + 'shot-apps.png', servers: L + 'shot-servers.png' };
  const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.6 5.6L20 6.4"/></svg>';
  const PLAY = '<svg viewBox="0 0 32 37" fill="#fff"><path d="M0 37 32 18.5 0 0z"/></svg>';
  const ARROW = w => '<svg width="' + w + '" height="' + (w * 0.146) + '" viewBox="0 0 219.51 32" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="square"><path d="M0 16h211M196 2l16 14-16 14"/></svg>';

  // ── plane 1 ────────────────────────────────────────────────────
  const wedge = (w, h, x, y, o) => '<div class="ad-wedge" style="width:' + w + 'px;height:' + h + 'px;transform:matrix(0.996,-0.087,0.087,0.996,' + x + ',' + y + ')' + (o ? ';opacity:' + o : '') + '"></div>';
  const tab = (w, h, x, y) => '<div class="ad-tab" style="width:' + w + 'px;height:' + h + 'px;transform:matrix(0.996,-0.087,0.087,0.996,' + x + ',' + y + ')"></div>';

  // ── plane 2 ────────────────────────────────────────────────────
  const eyebrow = (t, x, y, w) => '<div class="ad-copy ad-eyebrow" style="left:' + x + 'px;top:' + y + 'px;width:' + w + 'px">' + t + '</div>';
  const headline = (t, o) => '<div class="ad-copy ad-headline" style="left:' + o.x + 'px;top:' + o.y + 'px;width:' + o.w + 'px' +
    (o.size ? ';font-size:' + o.size + 'px' : '') + (o.center ? ';text-align:center' : '') + '">' + t + '</div>';
  const arrowAt = (x, y, w) => '<div class="ad-arrow" style="left:' + x + 'px;top:' + y + 'px">' + ARROW(w || 219.51) + '</div>';

  // ── plane 3 ────────────────────────────────────────────────────
  function device(devKey, shot, pos) {
    const d = DEV[devKey];
    const place = pos.m
      ? 'left:0;top:0;transform:matrix(0.966,0.259,-0.259,0.966,' + pos.m + ');transform-origin:0 0'
      : 'left:' + pos.x + 'px;top:' + pos.y + 'px';
    return '<div class="ad-device" style="' + place + ';width:' + d.w + 'px;height:' + d.h + 'px">' +
      '<div class="ad-device-shell" style="background-image:url(' + d.img + ')"></div>' +
      '<div class="ad-device-screen" style="left:' + d.sx + 'px;top:' + d.sy + 'px;width:' + d.sw + 'px;height:' + d.sh + 'px;border-radius:' + d.r + 'px"><img src="' + shot + '" alt=""></div>' +
      '</div>';
  }

  function macbook(x, y) {
    return '<div class="ad-device" style="left:' + x + 'px;top:' + y + 'px;width:1141.274px;height:669.14px">' +
      '<div class="mb-shadow" style="left:58.876px;top:653px;width:1024.656px;height:11.322px"></div>' +
      '<div style="position:absolute;left:110.956px;top:0;width:923.888px;height:627.248px;overflow:hidden">' +
        '<div class="mb-lid" style="width:923.888px;height:627.248px"></div>' +
        '<div class="mb-dark" style="left:5.661px;top:5.661px;width:912.566px;height:597.81px"></div>' +
        '<div class="mb-screen" style="left:31.702px;top:32.834px;width:859.847px;height:570.412px"><img src="' + L + 'macbook-screen.png" alt=""></div>' +
        '<div class="mb-label" style="left:413.259px;top:604.604px;width:93.974px">Macbook Pro</div>' +
      '</div>' +
      '<div style="position:absolute;left:0;top:622.719px;width:1141.274px;height:33.966px;overflow:hidden">' +
        '<div class="mb-base" style="left:0;top:0;width:1141.274px;height:20.38px"></div>' +
        '<div class="mb-curve" style="left:0;top:20.38px;width:1141.274px;height:13.587px"></div>' +
        '<div class="mb-groove" style="left:476.701px;top:0;width:189.006px;height:15.851px"></div>' +
      '</div></div>';
  }

  // ── plane 4 ────────────────────────────────────────────────────
  const pill = (t, x, y, w) => '<div class="ad-front ad-front--pill" style="left:' + x + 'px;top:' + y + 'px;width:' + w + 'px">' + t + '</div>';

  function appCard(app, on, x, y, w) {
    const icon = app.yt
      ? '<div class="ad-icon ad-icon--yt">' + PLAY + '</div>'
      : '<div class="ad-icon"><img src="' + app.src + '" alt=""></div>';
    return '<div class="ad-front" style="left:' + x + 'px;top:' + y + 'px;width:' + w + 'px">' +
      '<div class="ad-front-lead">' + icon + '<div class="ad-front-title">' + app.name + '</div></div>' +
      '<div class="ad-check' + (on ? '' : ' ad-check--off') + '">' + (on ? CHECK : '') + '</div></div>';
  }

  function serverCard(s, x, y, w) {
    return '<div class="ad-front" style="left:' + x + 'px;top:' + y + 'px;width:' + w + 'px">' +
      '<div class="ad-front-lead"><div class="ad-flag ' + s.fl + '"></div><div class="ad-front-title">' + s.name + '</div></div>' +
      '<div class="ad-front-lead"><div class="ad-front-meta">' + s.ms + '</div><div class="ad-dot"></div></div></div>';
  }

  // ── desktop app pane (a front-plane surface) ───────────────────
  const paneChrome = '<div class="pane-bar"><div class="pane-dots"><i></i><i></i><i></i></div><b>VPN Client</b></div>';
  function paneMain(o) {
    return '<div class="pane" style="left:950px;top:84px">' + paneChrome +
      '<div class="pane-tiles">' +
        tile('icon-download.svg', o.dl, 'Download') + tile('icon-upload.svg', o.ul, 'Upload') + tile('icon-signal.svg', o.ms, 'Signal') +
      '</div>' +
      '<div class="pane-timer">' + o.timer + '</div>' +
      '<div class="pane-connect"><div class="btn"><img src="' + I + 'icons/power.svg" alt=""></div><div class="state">' + o.state + '</div></div>' +
      '<div class="pane-server"><div class="fl ' + o.fl + '"></div><div><span>Ваша локация</span><b>' + o.country + '</b></div></div>' +
      tabbar(0) + '</div>';
  }
  const tile = (ic, v, lbl) => '<div class="pane-tile"><img src="' + I + 'icons/' + ic + '" alt=""><b>' + v + '</b><span>' + lbl + '</span></div>';
  function tabbar(active) {
    const ic = ['tab-home', 'tab-server', 'tab-app', 'tab-settings'];
    return '<div class="pane-tabbar">' + ic.map((n, i) =>
      '<img src="' + I + 'icons/' + n + (i === active ? '-active' : '') + '.svg" alt="">').join('') + '</div>';
  }
  function paneList(head, rows, active) {
    return '<div class="pane" style="left:950px;top:87px">' + paneChrome +
      '<div class="pane-head">' + head + '</div>' +
      '<div class="pane-list" style="top:80px">' + rows + '</div>' + tabbar(active) + '</div>';
  }
  const serverRow = s => '<div class="pane-row"><div class="fl ' + s.fl + '"></div>' + s.name + '<span class="ms">' + s.ms + '</span></div>';
  const appRow = a => '<div class="pane-row"><div class="ic">' + (a.yt
    ? '<div style="width:100%;height:100%;background:#FF0000;display:flex;align-items:center;justify-content:center"><svg viewBox="0 0 32 37" fill="#fff" style="width:38%"><path d="M0 37 32 18.5 0 0z"/></svg></div>'
    : '<img src="' + a.src + '" alt="">') + '</div>' + a.name + '<span class="cb' + (a.on ? ' on' : '') + '"></span></div>';

  // ── data ──────────────────────────────────────────────────────
  const APPS = {
    yt: { name: 'YouTube', yt: true },
    tt: { name: 'TikTok', src: I + 'apps/app-tiktok.png' },
    ig: { name: 'Instagram', src: I + 'apps/app-instagram.png' },
    x:  { name: 'X (Twitter)', src: I + 'apps/app-twitter.png' },
    am: { name: 'Amazon', src: I + 'apps/app-amazon.png' }
  };
  const SRV = [
    { name: 'Болгария', ms: '28 ms', fl: 'fl-bg' },
    { name: 'Бельгия', ms: '35 ms', fl: 'fl-be' },
    { name: 'Франция', ms: '39 ms', fl: 'fl-fr' }
  ];

  // ── mobile store layouts (1290-wide coordinate space) ─────────
  function mobileFrames(cv) {
    const W = cv.w, x = 50, cw = W - 100, fw = cv.frontW, fx = (W - fw) / 2;
    const w1 = wedge(cv.wedge1[0], cv.wedge1[1], -220.192, -22.075) + wedge(cv.wedge2[0], cv.wedge2[1], -231.95, 2184.265, 0.1);
    return [
      { label: '01 · Hero', note: 'Pull-forward: feature pills break the left frame edge', html:
        w1 + device(cv.dev, SHOT.main, { m: cv.tiltRight }) +
        eyebrow('VPN Client', x, 50, cw) +
        headline('Быстрый ВПН, который не заблокируют', { x: x, y: 120, w: cw }) +
        pill('Высокая скорость', 0, cv.pill[0], cv.pillW) +
        pill('Полная приватность', 0, cv.pill[1], cv.pillW) +
        pill('Без рекламы', 0, cv.pill[2], cv.pillW) +
        arrowAt(50, cv.arrow, 219.51) },
      { label: '02 · One tap', note: 'Device only — tilted 15°, crosses two edges', html:
        w1 + device(cv.dev, SHOT.main, { m: cv.tiltLeft }) +
        headline('Подключение в один клик', { x: x, y: 120, w: cw, center: true }) },
      { label: '03 · Apps', note: 'Pull-forward: three app rows lifted off the screen plane', html:
        w1 + device(cv.dev, SHOT.apps, { x: cv.devX, y: cv.devY }) +
        headline('Безлимитный доступ', { x: x, y: 120, w: cw, center: true }) +
        appCard(APPS.ig, true, fx, cv.front[0], fw) +
        appCard(APPS.yt, true, fx, cv.front[1], fw) +
        appCard(APPS.tt, true, fx, cv.front[2], fw) },
      { label: '04 · Servers', note: 'Pull-forward: server rows lifted, ping legible at thumbnail size', html:
        w1 + device(cv.dev, SHOT.servers, { x: cv.devX, y: cv.devY }) +
        headline('Защищенные серверы', { x: x, y: 120, w: cw, center: true }) +
        serverCard(SRV[0], fx, cv.srv[0], fw) +
        serverCard(SRV[1], fx, cv.srv[1], fw) +
        serverCard(SRV[2], fx, cv.srv[2], fw) },
      { label: '05 · Closing', note: 'No device — the white slab itself is the front plane', html:
        tab(215.818, 86.452, W - 260, cv.slabY - 30) +
        tab(215.818, 86.452, -111, cv.slabY + cv.slabH - 60) +
        '<div class="ad-wedge" style="width:' + (W + 400) + 'px;height:' + cv.slabH + 'px;transform:matrix(0.996,-0.087,0.087,0.996,-192.726,' + cv.slabY + ');z-index:2"></div>' +
        headline('Защитите свою личную информацию', { x: x, y: cv.slabY + 656, w: cw, center: true }) }
    ];
  }

  // ── desktop layouts (1440×900) ────────────────────────────────
  function desktopFrames() {
    const px = 486, ph = 100;
    const pill3 = (a, b, c, top) => [a, b, c].map((t, i) =>
      '<div class="ad-front" style="left:0;top:' + (top + i * 120) + 'px;min-width:' + px + 'px;height:' + ph + 'px;border-radius:10px 18px 18px 10px;padding:30px 80px 30px 50px;justify-content:flex-start;font-size:40px;font-weight:600;line-height:100%;white-space:nowrap">' + t + '</div>').join('');
    const frontRow = (html, y) => '<div class="ad-front" style="left:50px;top:' + y + 'px;width:800px;height:128px;border-radius:24px;padding:0 34px;box-shadow:var(--ad-shadow-front-strong)">' + html + '</div>';
    const bigApp = (a, on, y) => frontRow(
      '<div class="ad-front-lead" style="gap:22px">' + (a.yt
        ? '<div class="ad-icon ad-icon--yt" style="width:64px;height:64px;border-radius:16px">' + PLAY + '</div>'
        : '<div class="ad-icon" style="width:64px;height:64px;border-radius:16px"><img src="' + a.src + '" alt=""></div>') +
      '<div class="ad-front-title" style="font-size:44px">' + a.name + '</div></div>' +
      '<div class="ad-check' + (on ? '' : ' ad-check--off') + '" style="width:64px;height:64px;border-radius:16px">' + (on ? CHECK : '') + '</div>', y);
    const bigSrv = (s, y) => frontRow(
      '<div class="ad-front-lead" style="gap:22px"><div class="ad-flag ' + s.fl + '" style="width:64px;height:64px;border-radius:16px"></div><div class="ad-front-title" style="font-size:44px">' + s.name + '</div></div>' +
      '<div class="ad-front-lead" style="gap:0"><div class="ad-front-meta" style="font-size:44px">' + s.ms + '</div><div class="ad-dot" style="width:22px;height:22px"></div></div>', y);
    return [
      { label: '1 · Hero', note: 'App pane lifted off the Macbook screen — two zones, one story', html:
        wedge(932.443, 399.733, -87, -8.732) + macbook(645, 115.147) +
        headline('Быстрый ВПН, который не заблокируют', { x: 50, y: 50, w: 827, size: 72 }) +
        pill3('Высокая скорость', 'Полная приватность', 'Без рекламы', 400) +
        paneMain({ timer: '00:00:00', state: 'Подключение', dl: '42.6', ul: '8.1', ms: '42ms', fl: 'fl-de', country: 'Германия' }) },
      { label: '2 · Connected', note: 'Same staging, connected state — speed numbers on the front plane', html:
        wedge(932.443, 399.733, -87, -8.732) + macbook(645, 115.147) +
        headline('Высокая скорость без ограничений', { x: 50, y: 50, w: 827, size: 72 }) +
        pill3('До 1 Гбит/с', 'Без лимитов трафика', 'Стабильный пинг', 400) +
        paneMain({ timer: '00:14:22', state: 'Подключено', dl: '61.4', ul: '12.0', ms: '38ms', fl: 'fl-de', country: 'Германия' }) },
      { label: '3 · Servers', note: 'Pull-forward: server rows overlap the Macbook lid', html:
        wedge(932.443, 399.733, -87, -8.732) + macbook(645, 115.147) +
        headline('Защищенные серверы', { x: 50, y: 375, w: 827, size: 72 }) +
        bigSrv(SRV[0], 520) + bigSrv(SRV[1], 664) +
        paneList('Выбор сервера', [SRV[0], SRV[1], SRV[2], { name: 'Германия', ms: '42 ms', fl: 'fl-de' }, { name: 'Турция', ms: '96 ms', fl: 'fl-tr' }].map(serverRow).join(''), 1) },
      { label: '4 · Closing', note: 'Slab + tab only. The tab is the depth cue that keeps it from reading flat', html:
        wedge(1756.011, 583.707, -180, 236.046) + tab(215.818, 86.452, -111, 771.81) +
        headline('Защитите свою личную информацию', { x: 76, y: 338, w: 1287, size: 94, center: true }) },
      { label: '5 · Apps', note: 'Pull-forward: the three hero apps leave the pane entirely', html:
        wedge(874.696, 399.733, -91, 295.235) + macbook(645, 115.147) +
        headline('Безлимитный доступ', { x: 50, y: 50, w: 827, size: 72 }) +
        bigApp(APPS.ig, true, 330) + bigApp(APPS.yt, true, 474) + bigApp(APPS.tt, true, 618) +
        paneList('Выбор приложений', [
          { name: 'YouTube', yt: true, on: true }, Object.assign({ on: false }, APPS.x),
          Object.assign({ on: true }, APPS.ig), Object.assign({ on: false }, APPS.am),
          Object.assign({ on: true }, APPS.tt)].map(appRow).join(''), 2) }
    ];
  }

  // ── canvases ──────────────────────────────────────────────────
  const APPSTORE_LARGE = {
    w: 1290, h: 2796, dev: 'iphone', wedge1: [1544.964, 823.939], wedge2: [1544.964, 958.839],
    tiltRight: '1478.167,450.888', tiltLeft: '90.167,450.888', devX: 117, devY: 551,
    pillW: 972, pill: [1069, 1328, 1587], arrow: 2545, frontW: 1190,
    front: [1009, 1217, 1425], srv: [1743, 1951, 2159], slabY: 510, slabH: 1566.46
  };
  const GOOGLE_PLAY = Object.assign({}, APPSTORE_LARGE, {
    w: 1440, h: 2560, dev: 'samsung', wedge1: [1722.533, 823.939], wedge2: [1741.371, 958.839],
    tiltRight: '1647.497,501', tiltLeft: '105.497,501', devX: 250, devY: 516,
    pill: [1000, 1259, 1518], arrow: 2386, front: [940, 1148, 1356], srv: [1620, 1828, 2036], slabY: 505.899
  });

  function board(frames, canvas, scale) {
    return frames.map(f => {
      const inner = canvas.k
        ? '<div class="ad-inner" style="width:1290px;height:2796px;transform:scale(' + canvas.k + ')">' + f.html + '</div>'
        : f.html;
      return '<figure class="ad-slot" style="width:' + (canvas.w * scale) + 'px;margin:0">' +
        '<figcaption>' + f.label + ' <span>— ' + f.note + '</span></figcaption>' +
        '<div style="width:' + (canvas.w * scale) + 'px;height:' + (canvas.h * scale) + 'px">' +
        '<div class="ad-frame" data-theme="blue" style="width:' + canvas.w + 'px;height:' + canvas.h + 'px;transform:scale(' + scale + ')">' + inner + '</div>' +
        '</div></figure>';
    }).join('');
  }

  return {
    appStoreLarge: s => board(mobileFrames(APPSTORE_LARGE), APPSTORE_LARGE, s),
    appStoreSmall: s => board(mobileFrames(APPSTORE_LARGE), { w: 1242, h: 2688, k: 1242 / 1290 }, s),
    googlePlay: s => board(mobileFrames(GOOGLE_PLAY), GOOGLE_PLAY, s),
    cover: s => board([{ label: 'Feature graphic', note: '1024×500 — wordmark only, no device', html:
      '<div class="ad-copy" style="left:50px;top:155px;width:924px;font-size:160px;font-weight:700;text-align:center;line-height:100%;color:#fff">VPN Client</div>' }],
      { w: 1024, h: 500 }, s),
    desktop: s => board(desktopFrames(), { w: 1440, h: 900 }, s),
    mount(sel, html) { document.querySelector(sel).innerHTML = html; }
  };
})();
