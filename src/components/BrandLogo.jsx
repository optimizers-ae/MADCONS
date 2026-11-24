const BrandLogo = ({ variant = 'dark', showSubtitle = true, className = '' }) => {
  const isDark = variant === 'dark'

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>

      {/* Brand Typography with Multi-Color Styling */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline font-black tracking-wider uppercase text-lg sm:text-2xl leading-tight">
          <span className={isDark ? 'text-white' : 'text-[#1C1E3D]'}>
            MADA
          </span>
          <span className="text-[#C5A059]">
            ARIJ
          </span>
        </div>

        {showSubtitle && (
          <span
            className="block text-[7px] sm:text-[8px] font-bold tracking-[0.24em] uppercase leading-none mt-1 text-[#C5A059]"
          >
            consultancy studies
          </span>
        )}
      </div>
    </div>
  )
}

export default BrandLogo
