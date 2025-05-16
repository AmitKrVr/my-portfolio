"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              key={product.href + product.title}
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-hover hover:dark:bg-hover-dark rounded-2xl transition duration-200 py-4 sm:pt-4 px-2"
            >
              <div className="min-w-60 flex items-center justify-center">
                <Image
                  src={product?.thumbnail}
                  alt="thumbnail"
                  height="200"
                  width="200"
                  className="rounded-md w-full"
                />
              </div>
              <div className="flex flex-col justify-between w-full">
                <div>
                  <Heading
                    as="h4"
                    className="text-primary text-lg md:text-lg lg:text-lg dark:text-primary-dark"
                  >
                    {product.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 line-clamp-2">
                    {product.description}
                  </Paragraph>
                </div>
                <div className="flex flex-wrap gap-2 md:mb-1 mt-2 md:mt-0">
                  {product.stack?.map((stack: string) => (
                    <div
                      key={stack}
                      className="text-xs min-w-max bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded-sm text-secondary"
                    >
                      {stack}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
