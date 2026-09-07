import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface ProjectShotProps {
  src: string;
  alt: string;
  hasShot: boolean;
  priority?: boolean;
  className?: string;
}

/**
 * Renders the project screenshot, or a labelled placeholder naming the exact
 * file to drop in. Flip `hasShot` to true in data/portfolio.ts once the image
 * exists at the given path and the real screenshot renders instead.
 */
export function ProjectShot({
  src,
  alt,
  hasShot,
  priority = false,
  className = "",
}: ProjectShotProps) {
  if (hasShot) {
    return (
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-[10px] border border-line bg-surface-2 ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex aspect-[16/10] flex-col items-center justify-center gap-3 overflow-hidden rounded-[10px] border border-dashed border-line-strong bg-surface-2 px-5 text-center ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--border) 0 1px, transparent 1px 11px)",
        }}
      />
      <ImageIcon
        aria-hidden="true"
        className="relative size-5 text-faint"
        strokeWidth={1.5}
      />
      <div className="relative">
        <p className="text-[12.5px] font-medium text-muted">
          Screenshot placeholder
        </p>
        <code className="mt-1 block font-mono text-[11px] text-faint break-all">
          public{src}
        </code>
      </div>
    </div>
  );
}
