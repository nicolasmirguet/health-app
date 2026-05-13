import { useId, useState } from "react";
import { colors, withAlpha } from "../../styles/theme.js";

export function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div style={{ marginBottom: 10 }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "16px 20px",
          background: open ? withAlpha(colors.primarySolid, 0.08) : colors.surfaceCard,
          border: `1px solid ${open ? withAlpha(colors.primarySolid, 0.3) : "rgba(255,255,255,0.06)"}`,
          borderRadius: 20,
          color: colors.onSurface,
          cursor: "pointer",
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: "-0.005em",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "all 0.2s ease",
          boxShadow: open
            ? `inset 0 1px 0 0 rgba(255,255,255,0.08), 0 0 24px 0 ${withAlpha(colors.primarySolid, 0.1)}`
            : "inset 0 1px 0 0 rgba(255,255,255,0.06)",
        }}
      >
        <span>{title}</span>
        <span style={{ fontSize: 14, color: open ? colors.primary : colors.onSurfaceVariant, fontWeight: 400 }} aria-hidden="true">
          {open ? "▲" : "▼"}
        </span>
      </button>
      {open && (
        <div
          id={panelId}
          style={{ padding: "12px 0 4px", animation: "fadeIn 0.3s", display: "flex", flexDirection: "column", gap: 8 }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
