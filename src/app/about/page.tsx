import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Amit Kumar Verma",
  description:
    "Amit Kumar Verma is a full-stack developer skilled in React, Next.js, Node.js, Express, MongoDB, HTML, CSS, JavaScript, Appwrite, Shadcn, Bootstrap, and Tailwind CSS. He focuses on creating impactful web apps and continuously evolves with new technologies.",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="text-primary dark:text-primary-dark">About Me</Heading>
      <About />
    </Container>
  );
}
