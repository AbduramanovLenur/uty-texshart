import type { PaginationProps } from 'antd/lib/pagination';

const ARROW_SRC = {
  prev: '/images/svg/left-arrow.svg',
  next: '/images/svg/right-arrow.svg',
} as const;

export const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev' || type === 'next') {
    return (
      <img
        src={ARROW_SRC[type]}
        alt={type}
        loading='lazy'
        width={14}
        height={14}
      />
    );
  }

  return originalElement;
};
