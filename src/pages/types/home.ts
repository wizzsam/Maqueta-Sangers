export type Slide = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  price?: string;
};
