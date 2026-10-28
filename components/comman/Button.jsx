import Link from "next/link";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "btn-primary-gradient shadow-lg shadow-[#FF8A3D]/25 hover:shadow-xl hover:shadow-[#FFC107]/30 active:scale-[0.98]",
  secondary:
    "btn-secondary-gradient text-foreground hover:shadow-md active:scale-[0.98]",
  navy:
    "bg-primary text-white shadow-lg hover:bg-primary/90 hover:shadow-xl active:scale-[0.98]",
  outline:
    "border-2 border-button text-primary hover:bg-button active:scale-[0.98]",
  white:
    "bg-white text-primary shadow-md hover:bg-zinc-100 active:scale-[0.98]",
  transparent:
    "btn-secondary-gradient text-white hover:shadow-md active:scale-[0.98]",
  outlineWhite:
    "btn-secondary-gradient text-white hover:shadow-md active:scale-[0.98]",
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
  const combinedClasses = cn(baseClasses, variantClasses, sizeClasses, className);

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
