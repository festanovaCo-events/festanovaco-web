export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* --- LIGHT MODE BACKGROUND --- */}
      <div className="dark:hidden absolute inset-0 bg-background" />

      {/* --- DARK MODE BACKGROUND --- */}
      <div className="hidden dark:block absolute inset-0 bg-linear-to-b from-[#25211d] via-[#1c1917] to-[#171412]" />
      <div className="hidden dark:block absolute -top-10 left-1/4 size-[650px] bg-amber-500/25 rounded-full blur-[120px]" />
      <div className="hidden dark:block absolute bottom-0 right-1/4 size-[600px] bg-rose-400/20 rounded-full blur-[120px]" />
      <div className="hidden dark:block absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-amber-200/15 rounded-full blur-[140px]" />
      <div className="hidden dark:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[300px] bg-amber-300/20 rounded-full blur-[90px]" />
      <div className="hidden dark:block absolute top-0 left-0 right-0 h-44 bg-linear-to-b from-amber-200/25 via-amber-300/10 to-transparent blur-3xl" />
    </div>
  );
}
