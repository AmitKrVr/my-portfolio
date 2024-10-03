import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};



export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug) as Product | undefined;
  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Amit Kumar Verma",
      description:
        "Amit Kumar Verma is a full-stack developer skilled in React, Next.js, Node.js, Express, MongoDB, HTML, CSS, JavaScript, Appwrite, Shadcn, Bootstrap, and Tailwind CSS. He focuses on creating impactful web apps and continuously evolves with new technologies.",
    };
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
