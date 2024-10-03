"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1510751007277-36932aac9ebd?q=80&w=2837&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1553390774-b4822481c894?q=80&w=2844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Amit Kumar Verma - a passionate full stack web developer with a
          love for crafting seamless digital experiences. Welcome to my digital domain!
        </Paragraph>
        <Paragraph className=" mt-4">
          Since embarking on my journey in the tech world, I&apos;ve been driven by a passion
          for creating robust, scalable, and visually stunning web applications. As a
          full stack developer, I thrive on bridging the gap between front-end aesthetics
          and back-end functionality. My mission is to build web solutions that are as
          beautiful on the outside as they are powerful on the inside.
        </Paragraph>

        <Paragraph className=" mt-4">
          My journey has been filled with diverse projects that I&apos;ve built for learning and
          exploration. These hands-on experiences have equipped me with a strong foundation
          in a wide range of technologies and frameworks, including HTML, CSS, JavaScript,
          React, Next.js, Node, Express, MongoDB,  Appwrite, Shadcn, Bootstrap,
          Tailwind CSS and more.
        </Paragraph>
        <Paragraph className=" mt-4">
          What sets me apart is my holistic approach to web development. I believe that the best
          digital experiences are born from the perfect blend of code, design, and user experience.
          With an eye for design and a deep understanding of usability, I ensure that every project
          not only performs flawlessly but also delights users at every turn.
        </Paragraph>
        <Paragraph className=" mt-4">
          Through this website, I aim to share my knowledge, experiences, and creations with you. Whether
          you&apos;re a fellow developer looking for solutions, a client seeking a reliable partner for your
          next project, or simply someone who appreciates the art of web development, you&apos;ll find something
          of value here.
        </Paragraph>
        <Paragraph className=" mt-4">
          Join me on this exciting journey through the realms of code and creativity. Together, we can explore
          the limitless possibilities of technology, design, and innovation, all while creating digital
          masterpieces that stand the test of time.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this
          adventure with you.
        </Paragraph>
      </div>
    </div>
  );
}
