export function DemoNotice({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "demo-notice demo-notice--compact" : "demo-notice"} role="note">
      <strong>Concept website.</strong> Catalogue records, events, locations, availability, and contact details are illustrative demo content.
    </div>
  );
}
