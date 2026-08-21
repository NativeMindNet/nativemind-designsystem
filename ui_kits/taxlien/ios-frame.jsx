// IOSFrame.jsx — minimal iPhone bezel for the VPN mobile kit.
function IOSFrame({ children, theme = "blue" }) {
  return (
    <div data-theme={theme} style={{
      width: 390, height: 844, position: "relative", flexShrink: 0,
      background: "#000", borderRadius: 54, padding: 11,
      boxShadow: "0 30px 80px rgba(20,35,50,0.28)",
    }}>
      <div style={{
        position: "relative", width: "100%", height: "100%",
        background: "var(--bg)", borderRadius: 44, overflow: "hidden",
      }}>
        {/* status bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 54, zIndex: 30,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 34px", fontFamily: "var(--font-family)", fontSize: 15, fontWeight: 600,
          color: "var(--fg-1)", pointerEvents: "none",
        }}>
          <span>9:41</span>
          <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <svg width="18" height="11" viewBox="0 0 18 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="5" y="4.5" width="3" height="6.5" rx="1"/><rect x="10" y="2" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="11" rx="1"/></svg>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none"><rect x="1" y="1" width="19" height="10" rx="2.5" stroke="currentColor" strokeOpacity="0.4"/><rect x="2.5" y="2.5" width="14" height="7" rx="1.5" fill="currentColor"/><rect x="21" y="4" width="1.5" height="4" rx="0.75" fill="currentColor" fillOpacity="0.5"/></svg>
          </span>
        </div>
        {/* notch */}
        <div style={{ position: "absolute", top: 11, left: "50%", transform: "translateX(-50%)", width: 124, height: 34, background: "#000", borderRadius: 20, zIndex: 40 }}/>
        {children}
        {/* home indicator */}
        <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 134, height: 5, background: "var(--fg-1)", opacity: 0.25, borderRadius: 3, zIndex: 50 }}/>
      </div>
    </div>
  );
}
window.IOSFrame = IOSFrame;
