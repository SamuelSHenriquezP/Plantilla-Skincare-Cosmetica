import React from 'react';

export const BrandLogo = ({ variant = 'dark', size = 'medium', align = 'center', className = '' }) => {
  const isLight = variant === 'light';
  const textColor = isLight ? '#FFFDF9' : '#724B34';
  const sparkleColor = isLight ? '#D9AE94' : '#DFB277';

  const titleSize = size === 'large' 
    ? 'text-4xl md:text-5xl' 
    : size === 'small' 
    ? 'text-xl md:text-2xl' 
    : 'text-2xl md:text-3xl';

  const subtitleSize = size === 'large' 
    ? 'text-[11px] md:text-[13px] tracking-[0.55em]' 
    : size === 'small' 
    ? 'text-[8px] tracking-[0.35em]' 
    : 'text-[9px] md:text-[11px] tracking-[0.45em]';

  const alignmentClasses = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className={`inline-flex flex-col justify-center select-none ${alignmentClasses} ${className}`}>
      {/* Main AURA Typography with Radiant Sparkle Star */}
      <div className={`flex items-center tracking-[0.3em] ${titleSize}`} style={{ color: textColor }}>
        <span className="font-serif font-light">A</span>
        
        {/* Letter 'U' with central delicate radiant botanical sparkle */}
        <div className="relative inline-flex items-center justify-center mx-0.5">
          <span className="font-serif font-light">U</span>
          <svg 
            className="absolute w-2.5 h-2.5 md:w-3 md:h-3 animate-pulse"
            viewBox="0 0 24 24" 
            fill={sparkleColor} 
            xmlns="http://www.w3.org/2000/svg"
            style={{ top: '35%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>

        <span className="font-serif font-light">R</span>
        <span className="font-serif font-light">A</span>
      </div>

      {/* Subtitle BOTANICAL ATELIER */}
      <span 
        className={`font-sans uppercase mt-0.5 font-light whitespace-nowrap ${subtitleSize}`}
        style={{ color: isLight ? 'rgba(255, 253, 249, 0.9)' : '#9E6E50' }}
      >
        BOTANICAL ATELIER
      </span>
    </div>
  );
};
