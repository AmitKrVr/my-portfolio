"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      <AnimatePresence>

        {(open && isMobile()) &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-black/30 dark:bg-white/5 backdrop-blur-sm"
            onClick={() => setOpen(false)} // Close sidebar on clicking the backdrop
          />
        }

        {open && (

          <>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="pl-6 pr-2 z-[100] py-10 bg-neutral-100 dark:bg-black dark:bg-dot-white/[0.09] max-w-[14rem] lg:w-fit fixed lg:relative h-full sm:h-screen left-0 flex flex-col justify-between"
            >
              <div className="flex-1 overflow-auto">
                <SidebarHeader />
                <div className="pr-4">
                  <Navigation setOpen={setOpen} />
                </div>
              </div>
              <div onClick={() => isMobile() && setOpen(false)}>
                <Badge href="/resume" text="Read Resume" icon={<RightArrow />} />
              </div>
            </motion.div>
          </>
        )}

      </AnimatePresence>

      <motion.button
        className="fixed z-[100] p-0.5 lg:hidden top-4 right-4 h-8 w-8 border-2 border-black dark:border-white rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-700"
        onClick={() => setOpen(!open)}
      >

        <IconLayoutSidebarRightCollapse className="h-6 w-6" />

      </motion.button>


    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary hover:dark:text-primary-light transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white dark:bg-primary shadow-lg text-primary dark:text-primary-light"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500 dark:text-primaryColor"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}



      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          className={twMerge(
            "text-secondary hover:text-primary hover:dark:text-primary-light transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex justify-between">
      <Link href={"/"} className="flex space-x-2">
        <Image
          src="/hero.jpg"
          alt="Avatar"
          height="40"
          width="40"
          className="object-cover object-top rounded-full flex-shrink-0"
        />
        <div className="flex text-sm flex-col">
          <p className="font-bold text-primary dark:text-primary-dark line-clamp-1">Amit Kumar Verma</p>
          <p className="font-light text-secondary">Developer</p>
        </div>
      </Link>
      <div className="flex items-center justify-center">
        <ModeToggle />
      </div>
    </div>
  );
};


const RightArrow = () => <svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <motion.path
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    d="M10.75 8.75L14.25 12L10.75 15.25"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 1 }}
  ></motion.path>
</svg>