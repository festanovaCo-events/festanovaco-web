export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Base background */}
      <div className="absolute inset-0 bg-white" />

      {/* Aurora Ambient Glow Orbs */}
      {/* Top Center Violet/Fuchsia/Cyan Blend */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-[#8b5cf6]/20 via-[#ec4899]/20 to-[#06b6d4]/15 rounded-full blur-3xl" />

      {/* Left Violet Ambient Orb */}
      <div className="absolute top-12 -left-28 w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] bg-[#8b5cf6]/20 rounded-full blur-3xl" />

      {/* Right Fuchsia Ambient Orb */}
      <div className="absolute top-20 -right-24 w-[420px] sm:w-[560px] h-[420px] sm:h-[560px] bg-[#ec4899]/20 rounded-full blur-3xl" />

      {/* Bottom Center Cyan Orb */}
      <div className="absolute -bottom-16 left-1/3 -translate-x-1/4 w-[450px] sm:w-[620px] h-[320px] sm:h-[420px] bg-[#06b6d4]/20 rounded-full blur-3xl" />

      {/* Subtle modern dot mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.18]" />

      {/* Soft light top wash */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/70 to-transparent" />
    </div>
  );
}
