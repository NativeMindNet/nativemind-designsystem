// Screens.jsx — the four VPN destinations. Russian-first copy, per the brand.
const { useState: useS, useEffect: useE, useRef: useR } = React;
const APPS = "../../assets/apps/";

function useTimer(running) {
  const [s, setS] = useS(0);
  const ref = useR();
  useE(() => {
    if (running) { ref.current = setInterval(() => setS(x => x + 1), 1000); }
    else { setS(0); }
    return () => clearInterval(ref.current);
  }, [running]);
  const hh = String(Math.floor(s / 3600)).padStart(2, "0");
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

function HomeScreen({ conn, setConn, server }) {
  const t = useTimer(conn === "on");
  const label = conn === "on" ? "Подключен" : conn === "connecting" ? "Подключение" : "Отключен";
  const toggle = () => {
    if (conn === "off") { setConn("connecting"); setTimeout(() => setConn("on"), 1200); }
    else setConn("off");
  };
  return (
    <div style={{ padding: "0 30px", display: "flex", flexDirection: "column", height: "100%" }}>
      <VTopBar title="VPN Client" subtitle="dev-версия"/>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 22, paddingBottom: 120 }}>
        <div style={{ fontSize: 15, color: "var(--fg-2)" }}>{label}</div>
        <div className="t-timer" style={{ fontSize: 40, fontWeight: 700, color: "var(--fg-1)", letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums" }}>{t}</div>
        <VConnect state={conn} onClick={toggle}/>
        <div style={{ display: "flex", gap: 10, width: "100%", marginTop: 8 }}>
          <VStat icon="icon-download.svg" value={conn === "on" ? "42.6" : "0.0"} label="Download" dim={conn !== "on"}/>
          <VStat icon="icon-upload.svg" value={conn === "on" ? "8.1" : "0.0"} label="Upload" dim={conn !== "on"}/>
          <VStat icon="icon-signal.svg" value={conn === "on" ? "42ms" : "—"} label="Signal" dim={conn !== "on"}/>
        </div>
      </div>
      <div style={{ position: "absolute", left: 30, right: 30, bottom: 116 }}>
        <div style={{ background: "var(--surface)", borderRadius: 10, padding: "12px 16px", boxShadow: "var(--shadow-card)", display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 14, color: "var(--fg-2)" }}>Ваша локация</span>
          <span style={{ flex: 1 }}/>
          <span style={{ fontSize: 17, color: "var(--fg-1)" }}>{server.name}</span>
          <VFlag flag={server.flag}/>
        </div>
      </div>
    </div>
  );
}

const SERVERS = [
  { name: "Автовыбор", sub: "Самый быстрый", flag: "⚡", ping: 38 },
  { name: "Германия", sub: "Frankfurt", flag: "../../assets/icons/flag-de.svg", ping: 42 },
  { name: "Турция", sub: "Istanbul", flag: "🇹🇷", ping: 96 },
  { name: "Польша", sub: "Warsaw", flag: "🇵🇱", ping: 120 },
  { name: "Казахстан", sub: "Almaty", flag: "🇰🇿", ping: 205 },
  { name: "США", sub: "New York", flag: "🇺🇸", ping: 240 },
];

function ServersScreen({ server, setServer }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <VTopBar title="Все серверы"/>
      <div style={{ flex: 1, overflow: "auto", padding: "4px 30px 120px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 14, color: "var(--fg-2)", margin: "4px 2px" }}>Выбранный сервер</div>
        <VServerRow {...server} selected/>
        <div style={{ fontSize: 14, color: "var(--fg-2)", margin: "12px 2px 0" }}>Все серверы</div>
        {SERVERS.map(s => <VServerRow key={s.name} {...s} selected={s.name === server.name} onClick={() => setServer(s)}/>)}
      </div>
    </div>
  );
}

function AppsScreen() {
  const init = [
    { icon: "app-instagram.png", name: "Instagram", on: true },
    { icon: "app-tiktok.png", name: "TikTok", on: true },
    { icon: "app-twitter.png", name: "X", on: false },
    { icon: "app-amazon.png", name: "Amazon", on: false },
    { icon: "app-apps.png", name: "Другие приложения", on: true },
  ];
  const [apps, setApps] = useS(init);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <VTopBar title="Приложения" subtitle="Раздельное туннелирование"/>
      <div style={{ flex: 1, overflow: "auto", padding: "4px 30px 120px" }}>
        <div style={{ background: "var(--surface)", borderRadius: 10, boxShadow: "var(--shadow-card)", overflow: "hidden" }}>
          {apps.map((a, i) => (
            <VRow key={a.name} last={i === apps.length - 1}
              icon={<img src={APPS + a.icon} width={30} height={30} alt=""/>}
              title={a.name}
              trailing={<VSwitch checked={a.on} onChange={v => setApps(apps.map((x, j) => j === i ? { ...x, on: v } : x))}/>}/>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettingsScreen({ theme, setTheme, dark, setDark }) {
  const themes = [["blue", "Pro"], ["green", "Simple"], ["orange", "Mini"], ["pink", "Ad"]];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <VTopBar title="Настройки"/>
      <div style={{ flex: 1, overflow: "auto", padding: "4px 30px 120px", display: "flex", flexDirection: "column", gap: 18 }}>
        <div>
          <div style={{ fontSize: 14, color: "var(--fg-2)", margin: "4px 2px 8px" }}>Тема оформления</div>
          <div style={{ display: "flex", gap: 10 }}>
            {themes.map(([id, name]) => (
              <button key={id} onClick={() => setTheme(id)} data-theme={id} style={{ flex: 1, border: theme === id ? "2px solid var(--brand)" : "1px solid var(--line)", background: "var(--surface)", borderRadius: 12, padding: "12px 4px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
                <span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--brand-gradient)" }}/>
                <span style={{ fontSize: 12, fontWeight: 500, color: "var(--fg-1)" }}>{name}</span>
              </button>
            ))}
          </div>
        </div>
        <div style={{ background: "var(--surface)", borderRadius: 10, boxShadow: "var(--shadow-card)", overflow: "hidden" }}>
          <VRow title="Тёмная тема" trailing={<VSwitch checked={dark} onChange={setDark}/>}/>
          <VRow title="Язык" sub="Русский" chevron/>
          <VRow title="Подписка" sub="Активна до 12.2026" chevron/>
          <VRow title="Поддержка" chevron/>
          <VRow title="О приложении" sub="1.0.0" chevron last/>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen, ServersScreen, AppsScreen, SettingsScreen });
