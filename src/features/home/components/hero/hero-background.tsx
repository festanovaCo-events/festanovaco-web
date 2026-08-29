export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Warm, elegant studio ambiance - clear & bright */}
      <div className="absolute inset-0 bg-[#141210]" />

      {/* Luminous warm ambient light glows */}
      <div className="absolute top-0 left-1/4 w-[550px] h-[550px] bg-amber-500/20 rounded-full blur-[110px]" />
      <div className="absolute bottom-0 right-1/4 w-[550px] h-[550px] bg-rose-500/15 rounded-full blur-[110px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-amber-300/12 rounded-full blur-[130px]" />

      {/* Fine texture of design studio table */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

      {/* Soft natural vignette for depth and elegance */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

      {/* Warm top overhead soft light */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-amber-300/20 via-amber-400/5 to-transparent blur-2xl" />
    </div>
  );
}
