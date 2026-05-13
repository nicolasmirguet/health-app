import { useState } from "react";
import { theme as S } from "../../styles/theme.js";

export function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ marginBottom: 8 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "13px 16px",
          background: open ? "rgba(251,191,36,0.08)" : "rgba(255,255,255,0.03)",
          border: open ? "1px solid rgba(251,191,36,0.2)" : "1px solid rgba(255,255,255,0.06)",
          borderRadius: 11,
          color: S.text,
          cursor: "pointer",
          fontSize: 15,
          fontWeight: 600,
          fontFamily: S.font,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{title}</span>
        <span style={{ fontSize: 11, color: S.dim }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div style={{ padding: "10px 0", animation: "fadeIn 0.3s", display: "flex", flexDirection: "column", gap: 6 }}>
          {children}
        </div>
      )}
    </div>
  );
}
