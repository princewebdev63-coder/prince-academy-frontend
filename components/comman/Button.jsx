import Link from "next/link";

const VARIANTS = {
  primary:
    "bg-button text-primary shadow-lg hover:bg-button-hover hover:shadow-xl active:scale-[0.98]",
  secondary:
    "bg-secondary text-white shadow-lg hover:bg-secondary-hover hover:shadow-xl active:scale-[0.98]",
  navy:
    "bg-primary text-white shadow-lg hover:bg-primary/90 hover:shadow-xl active:scale-[0.98]",
  outline:
    "border-2 border-button text-primary hover:bg-button active:scale-[0.98]",
  white:
    "bg-white text-primary shadow-md hover:bg-zinc-100 active:scale-[0.98]",
  transparent:
    "bg-transparent border-2 border-white text-[#F4C675] hover:bg-white/10 hover:shadow-md active:scale-[0.98]",
  outlineWhite:
    "bg-transparent border-2 border-white text-[#F4C675] hover:bg-white/10 hover:shadow-md active:scale-[0.98]",
};

const SIZES = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-5 py-2 text-sm",
  lg: "px-7 py-3 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-button focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";
  const variantClasses = VARIANTS[variant] || VARIANTS.primary;
  const sizeClasses = SIZES[size] || SIZES.md;
  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

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
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
