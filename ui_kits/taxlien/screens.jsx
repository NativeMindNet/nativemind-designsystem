// Screens.jsx — TaxLien interactive screens: Galaxy → Property → X-Ray.
const { useState: useTL } = React;

const PROPS = [
  { id:1, addr:"1247 Oak Street", city:"Phoenix, AZ", county:"Maricopa", parcel:"123-45-678", value:89000, tax:12450, roi:0.185, risk:32, fvi:8.2, payback:8, stage:"listed", tone:"desert", x:0.62, y:0.30 },
  { id:2, addr:"2840 Hilltop Drive", city:"Orlando, FL", county:"Orange", parcel:"31-22-091", value:67000, tax:7800, roi:0.22, risk:28, fvi:8.6, payback:7, stage:"otc", tone:"cool", x:0.80, y:0.22 },
  { id:3, addr:"5602 Palm Ave", city:"Tucson, AZ", county:"Pima", parcel:"40-11-330", value:64000, tax:7800, roi:0.142, risk:51, fvi:7.1, payback:14, stage:"listed", tone:"forest", x:0.40, y:0.55 },
  { id:4, addr:"710 Oakridge Dr", city:"Atlanta, GA", county:"Fulton", parcel:"14-0099-12", value:86000, tax:9100, roi:0.16, risk:40, fvi:7.6, payback:11, stage:"pre", tone:"warm", x:0.52, y:0.46 },
  { id:5, addr:"33 Larkspur Ln", city:"Chicago, IL", county:"Cook", parcel:"17-22-401", value:145000, tax:18900, roi:0.11, risk:60, fvi:6.4, payback:18, stage:"sold", tone:"cool", x:0.30, y:0.72 },
  { id:6, addr:"918 Cedar Ct", city:"Dallas, TX", county:"Dallas", parcel:"00-553-118", value:54000, tax:6200, roi:0.245, risk:24, fvi:8.9, payback:6, stage:"otc", tone:"desert", x:0.88, y:0.16 },
];
// Scatter dots: x ~ roi, y ~ value (more = higher). Add filler dots.
function dotColor(roi) { return roi >= 0.20 ? "var(--success)" : roi >= 0.15 ? "var(--brand-light)" : roi >= 0.12 ? "var(--warning)" : "var(--fg-2)"; }
const FILLER = Array.from({ length: 46 }, (_, i) => {
  const roi = 0.05 + Math.random() * 0.26;
  return { id: "f" + i, x: roi / 0.32 + (Math.random() - 0.5) * 0.12, y: 0.85 - Math.random() * 0.7, roi, size: 5 + Math.random() * 6, sold: Math.random() < 0.18 };
});

function GalaxyScreen({ onOpen }) {
  return (
    <div style={{ height:"100%", display:"flex", flexDirection:"column" }}>
      <TLTopBar title="Galaxy" sub="847 properties · 12 counties"
        trailing={<div style={{ display:"flex", gap:8 }}><TLIconBtn>{Ico.filter}</TLIconBtn><TLIconBtn accent>{Ico.ai}</TLIconBtn></div>}/>
      <div style={{ flex:1, position:"relative", margin:"4px 14px", borderRadius:16, overflow:"hidden", background:"radial-gradient(120% 90% at 80% 10%, rgba(0,198,251,0.08), transparent 60%), var(--surface)", boxShadow:"var(--shadow-card)" }}>
        <div style={{ position:"absolute", top:12, left:12, display:"inline-flex", alignItems:"center", gap:6, padding:"5px 10px", borderRadius:999, background:"var(--surface)", boxShadow:"var(--shadow-card)", fontSize:11, fontWeight:600, color:"var(--fg-1)" }}>
          <span style={{ width:8, height:8, borderRadius:"50%", background:"var(--success)" }}/>{React.cloneElement(Ico.trend,{width:14,height:14})} ROI <span style={{ color:"var(--fg-2)", fontWeight:400 }}>/ value</span>
        </div>
        <div style={{ position:"absolute", top:14, right:14, fontSize:11, color:"var(--fg-2)", fontWeight:600 }}>847</div>
        <div style={{ position:"absolute", top:40, right:20, padding:"4px 8px", borderRadius:8, background:"rgba(31,182,122,0.12)", color:"var(--success)", fontSize:10, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.04em" }}>High-ROI · 47</div>
        {/* filler dots */}
        {FILLER.map(d => (
          <span key={d.id} style={{ position:"absolute", left:`${Math.min(94,Math.max(4,d.x*100))}%`, top:`${Math.min(88,Math.max(14,d.y*100))}%`, width:d.size, height:d.size, borderRadius:"50%", background:dotColor(d.roi), opacity:d.sold?0.3:0.85, transform:"translate(-50%,-50%)" }}/>
        ))}
        {/* real interactive dots */}
        {PROPS.map(p => {
          const big = p.roi >= 0.20;
          return (
            <button key={p.id} onClick={() => onOpen(p)} title={p.addr} style={{ position:"absolute", left:`${p.x*100}%`, top:`${p.y*100}%`, transform:"translate(-50%,-50%)", border:0, padding:0, cursor:"pointer", background:"transparent" }}>
              <span style={{ display:"block", width:big?18:14, height:big?18:14, borderRadius:"50%", background:dotColor(p.roi), opacity:p.stage==="sold"?0.4:1, boxShadow: big?`0 0 0 6px ${"rgba(31,182,122,0.18)"}`:"0 1px 4px rgba(20,35,50,0.25)" }}/>
            </button>
          );
        })}
        <div style={{ position:"absolute", bottom:8, left:14, fontSize:10, color:"var(--fg-2)" }}>0% ROI</div>
        <div style={{ position:"absolute", bottom:8, right:14, fontSize:10, color:"var(--fg-2)" }}>30%+</div>
      </div>
      <div style={{ padding:"10px 14px 16px" }}>
        <div style={{ display:"flex", gap:12, alignItems:"center", padding:"11px 16px", borderRadius:14, background:"var(--surface)", boxShadow:"var(--shadow-card)" }}>
          {[["Showing","All 847","var(--fg-1)"],["Avg ROI","14.6%","var(--success)"],["New","+24","var(--brand)"]].map(([l,v,c],i) => (
            <React.Fragment key={l}>
              {i>0 && <div style={{ width:1, alignSelf:"stretch", background:"var(--line)" }}/>}
              <div><div style={{ fontSize:11, color:"var(--fg-2)", textTransform:"uppercase", letterSpacing:"0.05em", fontWeight:600 }}>{l}</div><div style={{ fontSize:15, fontWeight:600, color:c, marginTop:2 }}>{v}</div></div>
            </React.Fragment>
          ))}
        </div>
        <div style={{ fontSize:11, color:"var(--fg-2)", textAlign:"center", marginTop:8 }}>Tap a bright dot to open a property</div>
      </div>
    </div>
  );
}

const STAGE = { listed:["info","LISTED"], otc:["cyan","OTC"], pre:["warn","PRE-AUCTION"], sold:["neutral","SOLD"] };

function PropertyScreen({ p, onBack, onXray }) {
  const [st, lbl] = STAGE[p.stage];
  return (
    <div style={{ height:"100%", display:"flex", flexDirection:"column" }}>
      <TLTopBar title="Property" sub={p.parcel}
        leading={<TLIconBtn onClick={onBack}>{Ico.back}</TLIconBtn>}
        trailing={<div style={{ display:"flex", gap:8 }}><TLIconBtn>{Ico.star}</TLIconBtn><TLIconBtn accent onClick={onXray}>{Ico.xray}</TLIconBtn></div>}/>
      <div style={{ flex:1, overflow:"auto", padding:"0 16px 16px" }}>
        <TLImage height={168} tone={p.tone}>
          <div style={{ position:"absolute", left:12, bottom:12, display:"flex", gap:6 }}>
            <TLBadge tone={st} solid>LIEN · {lbl}</TLBadge>
            {p.roi>=0.18 && <TLBadge tone="good" solid>↗ HIGH ROI</TLBadge>}
          </div>
        </TLImage>
        <div style={{ marginTop:14 }}>
          <div style={{ fontSize:20, fontWeight:600, color:"var(--fg-1)" }}>{p.addr}</div>
          <div style={{ fontSize:14, color:"var(--fg-2)", marginTop:2 }}>{p.city} · {p.county} County</div>
        </div>
        <div style={{ display:"flex", gap:8, marginTop:14 }}>
          <TLStat label="Lien" value={usd(p.tax)} sub="@ 16%" accent="var(--brand)"/>
          <TLStat label="Est. value" value={usd(p.value)} sub="Zillow"/>
          <TLStat label="ROI" value={pct(p.roi)} sub={p.payback+"mo payback"} accent="var(--success)"/>
        </div>
        <div style={{ display:"flex", gap:8, marginTop:8 }}>
          <TLStat label="Risk" value={p.risk+"/100"} sub={p.risk<40?"Low":p.risk<55?"Medium":"High"} accent={p.risk<40?"var(--success)":p.risk<55?"var(--warning)":"var(--danger)"}/>
          <TLStat label="Redempt." value="74%" sub="likely" accent="var(--brand)"/>
          <TLStat label="FVI" value={p.fvi.toFixed(1)} sub="of 10" accent="var(--success)"/>
        </div>
        <div style={{ background:"var(--surface)", borderRadius:12, padding:14, marginTop:12, boxShadow:"var(--shadow-card)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div>
            <div style={{ fontSize:11, color:"var(--fg-2)", textTransform:"uppercase", letterSpacing:"0.05em", fontWeight:600 }}>Auction</div>
            <div style={{ fontSize:17, fontWeight:600, marginTop:2, color:"var(--fg-1)" }}>Jun 15, 2026</div>
            <div style={{ fontSize:12, color:"var(--brand)" }}>in 27 days · 14:00 MST</div>
          </div>
          <button style={{ border:0, borderRadius:10, padding:"12px 18px", fontSize:14, fontWeight:500, color:"#fff", background:"var(--brand-gradient)", cursor:"pointer", fontFamily:"var(--font-family)" }}>Make offer</button>
        </div>
        <div style={{ background:"var(--surface)", borderRadius:12, padding:"4px 14px", marginTop:10, boxShadow:"var(--shadow-card)" }}>
          {[["Property type","Residential SFR"],["Bed · Bath","3 · 2"],["Building","1,640 sqft · 1978"],["Flood zone","Zone X"]].map(([k,v],i,a) => (
            <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:i<a.length-1?"1px solid var(--line)":"0", fontSize:14 }}>
              <span style={{ color:"var(--fg-2)" }}>{k}</span><span style={{ color:"var(--fg-1)", fontWeight:500 }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ display:"flex", gap:8, marginTop:12 }}>
          {[[Ico.heart,"Watchlist"],[Ico.scale,"Compare"],[Ico.share,"Share"]].map(([ic,l]) => (
            <button key={l} style={{ flex:1, border:"1px solid var(--line)", background:"var(--surface)", borderRadius:10, padding:"11px 8px", fontSize:13, fontWeight:500, color:"var(--fg-1)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:6, fontFamily:"var(--font-family)" }}>{React.cloneElement(ic,{width:16,height:16})}{l}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function XRayScreen({ p, onBack }) {
  const insights = [
    { k:"warn", ic:Ico.warn, t:"Flood verification", d:"FEMA Zone X · low hazard, confirm insurer quote" },
    { k:"opp", ic:Ico.trend, t:"High ROI · "+pct(p.roi), d:"Top 12% in "+p.county+" over last 90 days" },
    { k:"opp", ic:Ico.clock, t:"Quick payback · "+p.payback+" mo", d:"Below county median of 14 months" },
    { k:"opp", ic:Ico.bolt, t:"Zillow 12% above assessment", d:"Possible undervaluation vs assessed "+usd(p.value) },
    { k:"eth", ic:Ico.shield, t:"Senior homeowner", d:"Owner age ≥ 65 · ethical consideration before bid" },
    { k:"info", ic:Ico.user, t:"Owner since 2018", d:"6 years tenure · 74% redemption probability" },
  ];
  const tone = (k) => k==="warn"?"var(--danger)":k==="opp"?"var(--success)":k==="eth"?"var(--xray-eth)":"var(--brand)";
  return (
    <div style={{ height:"100%", display:"flex", flexDirection:"column" }}>
      <TLTopBar title="X-Ray" sub={p.addr+" · "+p.county}
        leading={<TLIconBtn onClick={onBack}>{Ico.back}</TLIconBtn>}
        trailing={<span style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"7px 11px", borderRadius:999, background:"var(--brand-gradient)", color:"#fff", fontSize:11, fontWeight:700, letterSpacing:"0.06em" }}>{React.cloneElement(Ico.xray,{width:14,height:14})} ACTIVE</span>}/>
      <div style={{ flex:1, overflow:"auto", padding:"0 16px 16px" }}>
        <TLImage height={150} tone={p.tone} scratched>
          <div style={{ position:"absolute", inset:0, borderRadius:12, border:"1px dashed rgba(229,72,77,0.45)", background:"linear-gradient(180deg, rgba(229,72,77,0.04), rgba(0,91,234,0.04))", display:"flex", flexDirection:"column", justifyContent:"space-between", padding:10 }}>
            <div style={{ display:"flex", justifyContent:"space-between" }}><TLBadge tone="hot" solid>! Roof 18yr</TLBadge><TLBadge tone="info" solid>Photo 2024</TLBadge></div>
            <span style={{ alignSelf:"flex-end", fontSize:9, fontWeight:700, color:"#fff", letterSpacing:"0.08em", padding:"3px 7px", background:"rgba(229,72,77,0.85)", borderRadius:4, textTransform:"uppercase" }}>Stale · 462 days</span>
          </div>
        </TLImage>
        <div style={{ marginTop:12, padding:14, borderRadius:12, background:"var(--brand-gradient-soft)", border:"1px solid rgba(0,91,234,0.18)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
            <span style={{ width:24, height:24, borderRadius:"50%", background:"var(--brand-gradient)", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center" }}>{React.cloneElement(Ico.ai,{width:14,height:14})}</span>
            <span style={{ fontSize:11, fontWeight:700, color:"var(--brand)", textTransform:"uppercase", letterSpacing:"0.06em" }}>AI Summary</span>
          </div>
          <p style={{ fontSize:14, color:"var(--fg-1)", lineHeight:1.45, margin:0 }}>High-ROI opportunity but multi-year distressed. Senior owner with strong redemption probability — you likely earn 16% interest, not the deed. Verify flood insurance; roof age may affect post-deed value.</p>
        </div>
        <div style={{ marginTop:12 }}>
          {insights.map((ins,i,a) => (
            <div key={i} style={{ display:"flex", gap:12, padding:"10px 0", borderBottom:i<a.length-1?"1px solid var(--line)":"0" }}>
              <span style={{ width:32, height:32, borderRadius:8, flexShrink:0, background:`color-mix(in srgb, ${tone(ins.k)} 14%, transparent)`, color:tone(ins.k), display:"flex", alignItems:"center", justifyContent:"center" }}>{React.cloneElement(ins.ic,{width:18,height:18})}</span>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontSize:14, fontWeight:600, color:"var(--fg-1)" }}>{ins.t}</div>
                <div style={{ fontSize:12, color:"var(--fg-2)", marginTop:2, lineHeight:1.35 }}>{ins.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PROPS, GalaxyScreen, PropertyScreen, XRayScreen });
