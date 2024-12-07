"use client"

import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="text-primary dark:text-primary-dark">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <WorkHistory />

      <div className="w-full flex justify-center">
        <Badge href="https://docs.google.com/document/d/1fIClRSYPY1qr0O8v92StVOK2PNWOcwuKakUVPaEjojE/edit?usp=sharing" text="Download Resume" icon={<DownloadSvg />} />
      </div>

    </Container>
  );
}


const DownloadSvg = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>