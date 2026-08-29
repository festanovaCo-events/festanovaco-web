export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-stone-500">
        © {new Date().getFullYear()} FestanovaCo. Invitaciones digitales.
      </div>
    </footer>
  );
}
