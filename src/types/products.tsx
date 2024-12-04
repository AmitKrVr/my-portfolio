import { StaticImageData } from "next/image";

export type Product = {
  title: string;
  description: string;
  thumbnail: StaticImageData | string;
  images: StaticImageData[] | string[];
  href: string;
  slug?: string;
  githubUrl: string;
  stack?: string[];
  content?: React.ReactNode | string;
};
