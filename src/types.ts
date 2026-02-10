export type NavbarItemProps = {
  name: string;
};

export type StarValutationProps = {
  number: 1 | 2 | 3 | 4 | 5;
};

export type CardProps = {
  name: string;
  className?: string;
  bannerText?: string;
  price: number;
  isOnSale?: boolean;
  discount?: number;
  starValutation: 1 | 2 | 3 | 4 | 5;
  img: string;
  imgWidth: number;
};
