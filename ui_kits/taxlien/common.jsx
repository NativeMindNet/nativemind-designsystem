// Common.jsx — TaxLien kit shared helpers (self-contained, DS-token driven).
// Generic UI glyphs follow the Lucide visual language (2px stroke, 24px box,
// round caps) — see readme.md > ICONOGRAPHY.
const { useState: useTLState } = React;

const I = (p, extra) => (
  <svg width={extra?.size || 20} height={extra?.size || 20} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{p}</svg>
);
const Ico = {
  back:   I(<path d="M15 18l-6-6 6-6"/>),
  filter: I(<path d="M4 5h16M7 12h10M10 19h4"/>),
  ai:     I(<path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4z M18 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>),
  trend:  I(<path d="M3 17l6-6 4 4 8-8M21 7v5M21 7h-5"/>),
  warn:   I(<path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>),
  shield: I(<path d="M12 3l8 3v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6z"/>),
  clock:  I(<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>),
  bolt:   I(<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>),
  user:   I(<><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></>),
  star:   I(<path d="M12 3l2.6 5.6L21 9.3l-4.5 4.3 1.1 6.4L12 17l-5.6 3 1.1-6.4L3 9.3l6.4-.7z"/>),
  starF:  (e) => <svg width={e?.size||20} height={e?.size||20} viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l2.6 5.6L21 9.3l-4.5 4.3 1.1 6.4L12 17l-5.6 3 1.1-6.4L3 9.3l6.4-.7z"/></svg>,
  xray:   I(<><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4M8 11h6M11 8v6"/></>),
  layers: I(<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"/>),
  list:   I(<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>),
  cards:  I(<><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M7 20h10"/></>),
  share:  I(<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13"/>),
  scale:  I(<path d="M12 3v18M5 7l-3 6h6zM19 7l-3 6h6zM5 7h14"/>),
  heart:  I(<path d="M12 20s-7-4.5-9.5-9A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 9.5 5c-2.5 4.5-9.5 9-9.5 9z"/>),
};

const usd = (n) => n >= 1e6 ? "$" + (n/1e6).toFixed(1) + "M" : n >= 1e3 ? "$" + Math.round(n/1e3) + "k" : "$" + n;
const pct = (n) => (n*100).toFixed(0) + "%";

function TLBadge({ children, tone = "neutral", solid }) {
  const map = { neutral:"182,182,182", info:"0,91,234", good:"31,182,122", warn:"255,176,32", hot:"229,72,77", cyan:"0,148,196", purple:"123,91,234" };
  const rgb = map[tone] || map.neutral;
  return <span style={{ display:"inline-flex", alignItems:"center", gap:4, padding:"3px 9px", borderRadius:999, fontSize:11, fontWeight:600, letterSpacing:"0.02em", whiteSpace:"nowrap", background: solid?`rgb(${rgb})`:`rgba(${rgb},0.14)`, color: solid?"#fff":`rgb(${rgb})` }}>{children}</span>;
}

function TLStat({ label, value, sub, accent }) {
  return (
    <div style={{ flex:1, background:"var(--surface)", borderRadius:10, padding:"11px 12px", boxShadow:"var(--shadow-card)" }}>
      <div style={{ fontSize:11, color:"var(--fg-2)", textTransform:"uppercase", letterSpacing:"0.05em", fontWeight:600 }}>{label}</div>
      <div style={{ fontSize:19, fontWeight:600, color: accent||"var(--fg-1)", marginTop:3, fontVariantNumeric:"tabular-nums" }}>{value}</div>
      {sub && <div style={{ fontSize:11, color:"var(--fg-2)", marginTop:1 }}>{sub}</div>}
    </div>
  );
}

function TLImage({ height = 160, tone = "desert", scratched, children }) {
  const grad = {
    warm:"linear-gradient(135deg,#E8DCC5,#B89F7E 40%,#8E785A)",
    cool:"linear-gradient(135deg,#D8E2EC,#9DB3C6 50%,#6F88A1)",
    desert:"linear-gradient(135deg,#F3E0C2,#D9B58A 50%,#A88456)",
    forest:"linear-gradient(135deg,#C9D9B8,#8DAA72 50%,#5C7748)",
  }[tone];
  return (
    <div style={{ height, width:"100%", borderRadius:12, overflow:"hidden", background:grad, position:"relative" }}>
      <div style={{ position:"absolute", top:14, right:22, width:36, height:36, borderRadius:"50%", background:"rgba(255,247,220,0.85)", boxShadow:"0 0 24px 8px rgba(255,247,220,0.5)" }}/>
      <svg viewBox="0 0 400 160" preserveAspectRatio="none" style={{ position:"absolute", inset:0, width:"100%", height:"100%" }}>
        <path d="M0 130 L60 130 L60 95 L130 60 L200 95 L200 80 L260 80 L260 110 L320 110 L320 95 L400 95 L400 160 L0 160 Z" fill="rgba(48,63,73,0.55)"/>
        <path d="M0 145 L400 145 L400 160 L0 160 Z" fill="rgba(48,63,73,0.85)"/>
        <rect x="78" y="108" width="8" height="10" fill="rgba(255,247,220,0.75)"/>
        <rect x="98" y="108" width="8" height="10" fill="rgba(255,247,220,0.75)"/>
        <rect x="118" y="108" width="8" height="10" fill="rgba(255,247,220,0.75)"/>
        <rect x="220" y="92" width="6" height="8" fill="rgba(255,247,220,0.85)"/>
        {scratched && <path d="M130 50 L160 90 M150 55 L185 80" stroke="rgba(229,72,77,0.65)" strokeWidth="1.5" fill="none"/>}
      </svg>
      {children}
    </div>
  );
}

function TLTopBar({ title, sub, leading, trailing }) {
  return (
    <div style={{ position:"relative", minHeight:54, marginTop:54, padding:"6px 16px", display:"flex", alignItems:"center", gap:10 }}>
      {leading}
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontSize:18, fontWeight:600, color:"var(--fg-1)" }}>{title}</div>
        {sub && <div style={{ fontSize:12, color:"var(--fg-2)", marginTop:1 }}>{sub}</div>}
      </div>
      {trailing}
    </div>
  );
}

function TLIconBtn({ children, accent, onClick }) {
  return <button onClick={onClick} style={{ width:38, height:38, borderRadius:10, border:0, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", background: accent?"var(--brand-tint)":"var(--surface-2)", color: accent?"var(--brand)":"var(--fg-1)" }}>{children}</button>;
}

function TLNav({ active, onNav }) {
  const tabs = [["galaxy", Ico.layers, "Galaxy"], ["list", Ico.list, "List"], ["swipe", Ico.cards, "Swipe"], ["watch", Ico.star, "Watch"], ["profile", Ico.user, "Profile"]];
  return (
    <div style={{ position:"absolute", left:0, right:0, bottom:0, paddingBottom:24, background:"rgba(248,249,250,0.7)", backdropFilter:"blur(40px)", WebkitBackdropFilter:"blur(40px)", borderTop:"1px solid var(--line)", display:"flex", justifyContent:"space-around", padding:"10px 12px 24px" }}>
      {tabs.map(([id, icon, label]) => {
        const on = active === id;
        return <button key={id} onClick={() => onNav && onNav(id)} style={{ border:0, background:"transparent", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:3, opacity: on?1:0.5, color: on?"var(--brand)":"var(--fg-2)" }}>{React.cloneElement(icon, { width:22, height:22 })}<span style={{ fontSize:10, fontWeight:500 }}>{label}</span></button>;
      })}
    </div>
  );
}

Object.assign(window, { Ico, usd, pct, TLBadge, TLStat, TLImage, TLTopBar, TLIconBtn, TLNav });
