import Image from 'next/image';
import type { ImageRef } from '@/lib/types';
import { cn } from '@/lib/utils';

const ratios = {
  wide: 'aspect-[2/1]',
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
} as const;

/**
 * Every photograph goes through here, so all of them carry intrinsic
 * dimensions and a fixed aspect box — no image can shift the layout as it
 * loads.
 *
 * Photography is the loudest element on this site, so it gets the asymmetric
 * corner treatment by default. `alt` flips the radius the other way, which is
 * what stops a row of images reading as a grid of identical tiles.
 */
export function Photo({
  image,
  ratio = 'landscape',
  priority = false,
  sizes = '100vw',
  alt: altShape = false,
  square = false,
  className,
}: {
  image: ImageRef;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
  /** Mirrors the corner radius. Alternate it down a list. */
  alt?: boolean;
  /** Opts out of the organic corners entirely. */
  square?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn('m-0', className)}>
      <div
        className={cn(
          'relative bg-panel',
          ratios[ratio],
          square ? 'overflow-hidden' : altShape ? 'organic-alt' : 'organic',
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover"
        />
      </div>
      {image.caption ? (
        <figcaption className="mt-2.5 text-sm text-ink-faint">{image.caption}</figcaption>
      ) : null}
    </figure>
  );
}
