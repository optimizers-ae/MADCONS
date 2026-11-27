import { madarejLogo, madarejLogoDark } from '../utils/assets'

const BrandLogo = ({ variant = 'dark', className = '' }) => {
  const isDark = variant === 'dark'
  const logoSrc = isDark ? madarejLogo : madarejLogoDark

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="MADAARIJ Consulting & Advisory"
        className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-opacity duration-200"
      />
    </div>
  )
}

export default BrandLogo
