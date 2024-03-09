import { clsx } from 'clsx';

type Props = {
  src: string;
  aspect?: 'square' | 'video';
  width?: string;
  maxHeight?: string;
  height?: string;
  rounded?: boolean;
};

export default function DynamicImage({
  src,
  maxHeight,
  width,
  height,
  aspect,
  rounded,
}: Props) {
  const dynamicClasses = clsx({
    'aspect-video': aspect === 'video',
    'aspect-square': aspect === 'square',
    'rounded-full': rounded,
  });
  return (
    <div
      className={`w-full bg-cover bg-center bg-peanut-pink-darker ${dynamicClasses}`}
      style={{
        backgroundImage: `url("${src}")`,
        maxHeight,
        height,
        width,
      }}
    />
  );
}
