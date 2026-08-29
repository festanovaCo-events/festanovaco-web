export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* --- LIGHT MODE BACKGROUND --- */}
      <div className="dark:hidden absolute inset-0 bg-[#FAF8F5]" />
      <div className="dark:hidden absolute -top-20 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-[#EFE8DC]/80 via-[#FAF5EE]/60 to-transparent rounded-full blur-[100px]" />
      <div className="dark:hidden absolute top-10 -left-20 w-[500px] h-[500px] bg-[#E8E2D5]/60 rounded-full blur-[120px]" />
      <div className="dark:hidden absolute top-20 -right-20 w-[550px] h-[550px] bg-emerald-900/[0.04] rounded-full blur-[130px]" />
      <div className="dark:hidden absolute bottom-10 left-1/3 w-[600px] h-[350px] bg-[#EBE3D3]/50 rounded-full blur-[110px]" />
      <div className="dark:hidden absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="dark:hidden absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/70 to-transparent" />

      {/* --- DARK MODE BACKGROUND --- */}
      <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-[#25211d] via-[#1c1917] to-[#171412]" />
      <div className="hidden dark:block absolute -top-10 left-1/4 w-[650px] h-[650px] bg-amber-500/25 rounded-full blur-[120px]" />
      <div className="hidden dark:block absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-rose-400/20 rounded-full blur-[120px]" />
      <div className="hidden dark:block absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-amber-200/15 rounded-full blur-[140px]" />
      <div className="hidden dark:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[300px] bg-amber-300/20 rounded-full blur-[90px]" />
      <div className="hidden dark:block absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:48px_48px] opacity-45" />
      <div className="hidden dark:block absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-amber-200/25 via-amber-300/10 to-transparent blur-3xl" />
    </div>
  );
}
