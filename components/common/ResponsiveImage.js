import Image from 'next/image';

const ResponsiveImage = ({ src, alt, width, height, layout = 'responsive' }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
    />
  );
};

export default ResponsiveImage;