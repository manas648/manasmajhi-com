import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {label && <p className="section-label mb-3">{label}</p>}
      <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
