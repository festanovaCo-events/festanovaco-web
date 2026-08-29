export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Warm, luminous studio background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#25211d] via-[#1c1917] to-[#171412]" />

      {/* Bright, warm ambient lighting blooms */}
      <div className="absolute -top-10 left-1/4 w-[650px] h-[650px] bg-amber-500/25 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-rose-400/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-amber-200/15 rounded-full blur-[140px]" />

      {/* Warm gold center light flare */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[300px] bg-amber-300/20 rounded-full blur-[90px]" />

      {/* Fine texture of design studio table */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:48px_48px] opacity-45" />

      {/* Soft warm light overhead wash */}
      <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-amber-200/25 via-amber-300/10 to-transparent blur-3xl" />
    </div>
  );
}
