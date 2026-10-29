
import Link from "next/link";
import { cn } from "@/lib/utils";

const VARIANTS = {
  // Royal blue primary button (Standard Brand CTA)
  primary:
    "bg-primary text-primary-foreground shadow-md shadow-primary/25 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98]",

  // Soft blue secondary button (Supporting actions on light surfaces)
  secondary:
    "bg-secondary text-primary border border-secondary/40 hover:bg-secondary-hover hover:shadow-sm active:scale-[0.98]",

  // Warm honey / gold accent button (High-contrast CTAs on dark navy sections & banners)
  honey:
    "bg-honey text-navy font-bold shadow-md shadow-honey/25 hover:bg-yellow-hover hover:shadow-lg hover:shadow-honey/30 active:scale-[0.98]",
  gold:
    "bg-gold text-navy font-bold shadow-md shadow-gold/25 hover:bg-yellow-hover hover:shadow-lg hover:shadow-gold/30 active:scale-[0.98]",

  // Royal blue outline button (Clean secondary CTA on light backgrounds)
  outline:
    "border border-primary bg-transparent text-primary hover:bg-light-blue active:scale-[0.98]",

  // Clean white button (Surface cards, light backgrounds)
  white:
    "border border-border bg-white text-primary shadow-sm hover:bg-surface-muted hover:border-primary/30 hover:shadow-md active:scale-[0.98]",

  // White outline button (For dark navy sections, hero overlays, modals)
  outlineWhite:
    "border border-white/70 bg-transparent text-white hover:bg-white hover:text-primary active:scale-[0.98]",

  // Transparent / Glass button for dark backgrounds
  transparent:
    "border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/60 backdrop-blur-xs active:scale-[0.98]",

  // Deep navy button with signature honey/gold 3D bottom bevel (User Reference Design)
  navy:
    "bg-navy text-white font-bold border border-white/15 shadow-[0_4px_0_0_#F2B134] hover:bg-[#0A264F] hover:border-white/25 hover:shadow-[0_5px_0_0_#F2B134] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1.5px_0_0_#F2B134]",

  navyAccent:
    "bg-navy text-white font-bold border border-white/15 shadow-[0_4px_0_0_#F2B134] hover:bg-[#0A264F] hover:border-white/25 hover:shadow-[0_5px_0_0_#F2B134] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1.5px_0_0_#F2B134]",

  darkGold:
    "bg-navy text-white font-bold border border-white/15 shadow-[0_4px_0_0_#F2B134] hover:bg-[#0A264F] hover:border-white/25 hover:shadow-[0_5px_0_0_#F2B134] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1.5px_0_0_#F2B134]",

  // Brand gradient button (Royal Blue to Deep Blue)
  gradient:
    "bg-gradient-to-r from-primary to-[#1855B8] text-white shadow-md shadow-primary/25 hover:from-primary-hover hover:to-primary active:scale-[0.98]",

  // Light ice blue button
  ice:
    "bg-ice-tonal text-navy hover:bg-[#B7D0FF] active:scale-[0.98]",

  // Azure button
  azure:
    "bg-azure text-navy hover:bg-[#3293F5] active:scale-[0.98]",

  // Platinum light button
  platinum:
    "bg-platinum text-navy border border-[#CBD4E1] hover:bg-[#CDD5E1] active:scale-[0.98]",
};

const SIZES = {
  sm: "px-3.5 py-1.5 text-xs gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-7 py-3 text-base gap-2.5",
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
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold select-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer";

  const variantClasses = VARIANTS[variant] || VARIANTS.primary;
  const sizeClasses = SIZES[size] || SIZES.md;

  const combinedClasses = cn(
    baseClasses,
    variantClasses,
    sizeClasses,
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
        {...props}
      >
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
