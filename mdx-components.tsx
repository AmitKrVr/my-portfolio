import type { MDXComponents } from "mdx/types";
import { CodeWindow } from "@/components/CodeWindow";


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h2: ({ children }) => <h1 className="dark:text-primary-dark" style={{ fontSize: "1.4em" }}>{children}</h1>,
    ...components,
    CodeWindow: CodeWindow,
  };
}
