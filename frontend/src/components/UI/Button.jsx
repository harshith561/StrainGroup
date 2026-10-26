import React from 'react';
import Link from 'next/link';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'font-sans text-xs font-bold tracking-wider uppercase transition inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 cursor-pointer';

  const variants = {
    primary: 'bg-[#00e676] hover:bg-[#00c864] text-black shadow-sm',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/10',
    outline: 'border border-neutral-700 hover:border-white text-neutral-200 hover:text-white',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
