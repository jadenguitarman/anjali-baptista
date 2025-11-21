import Image, { ImageProps } from 'next/image';
import React from 'react';

type Props = ImageProps & { descriptiveAlt: string };

export const ImageWithAlt: React.FC<Props> = ({ descriptiveAlt, ...rest }) => {
  return <Image {...rest} alt={descriptiveAlt} />;
};
