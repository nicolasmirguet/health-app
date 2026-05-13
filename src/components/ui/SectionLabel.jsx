import { theme as S } from "../../styles/theme.js";

export function SectionLabel({ children, style }) {
  return <p style={{ ...S.sectionLabel, ...style }}>{children}</p>;
}
