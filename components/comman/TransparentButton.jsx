import Link from "next/link";

const SIZES = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-5 py-2 text-sm",
  lg: "px-7 py-3 text-base",
};

export default function TransparentButton({
  children,
  href,
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  // Transparent background, white border, and #F4C675 text color
  const styleClasses =
    "bg-transparent border-2 border-white text-[#F4C675] hover:bg-white/10 hover:shadow-md active:scale-[0.98]";

  const sizeClasses = SIZES[size] || SIZES.md;
  const combinedClasses = `${baseClasses} ${styleClasses} ${sizeClasses} ${className}`.trim();

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

export { TransparentButton };
