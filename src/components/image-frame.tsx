import { cn } from "@/lib/utils";

type ImageFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  framed?: boolean;
  priority?: boolean;
};

export function ImageFrame({
  src,
  alt,
  className,
  imgClassName,
  framed = true,
  priority = false,
}: ImageFrameProps) {
  return (
    <div className={cn("overflow-hidden bg-stone", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "h-full w-full object-cover",
          framed && "img-frame",
          imgClassName,
        )}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
      />
    </div>
  );
}
