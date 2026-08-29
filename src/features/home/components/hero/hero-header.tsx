export function HeroHeader() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center px-2">
      {/* Main luxury golden headline */}
      <h1 className="font-serif-luxury text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-[#fbf1dc] via-[#edd097] to-[#b88c42] drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)] leading-[1.12]">
        Invitaciones Digitales <br />
        para tus Eventos
      </h1>

      {/* Subtitle */}
      <p className="mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#ebdcb9]/90 font-light tracking-wide max-w-xl mx-auto drop-shadow-md">
        Elige la invitación perfecta para tu momento especial
      </p>

      {/* Golden floral divider ornament */}
      <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2.5 sm:gap-3">
        <div className="h-px w-10 xs:w-12 sm:w-16 bg-linear-to-r from-transparent to-[#cba358]/80" />
        <svg
          className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#deb768] drop-shadow-[0_0_8px_rgba(222,183,104,0.9)]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2Z" />
          <circle cx="12" cy="10" r="1.8" fill="#fff" />
        </svg>
        <div className="h-px w-10 xs:w-12 sm:w-16 bg-linear-to-l from-transparent to-[#cba358]/80" />
      </div>
    </div>
  );
}
