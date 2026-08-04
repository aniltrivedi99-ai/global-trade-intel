type PictureProps = {
  avif: string;
  webp: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  decoding?: "async" | "auto" | "sync";
  fetchpriority?: "high" | "low" | "auto";
  className?: string;
};

/**
 * Renders a <picture> with AVIF and WebP sources falling back to the
 * original format. Modern browsers download the much smaller AVIF/WebP
 * variants; older browsers fall back to the JPEG.
 */
const Picture = ({
  avif,
  webp,
  src,
  alt,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchpriority,
  className,
}: PictureProps) => (
  <picture>
    <source srcSet={avif} type="image/avif" />
    <source srcSet={webp} type="image/webp" />
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      {...(fetchpriority ? { fetchpriority } : {})}
      className={className}
    />
  </picture>
);

export default Picture;
