import type { MDXComponents } from "mdx/types";

const myComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      style={{
        fontSize: "2.5rem",
        fontWeight: "900",
        marginBottom: "1rem",
        marginTop: "2rem",
      }}
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      style={{
        fontSize: "2rem",
        fontWeight: "900",
        marginBottom: "1rem",
        marginTop: "2rem",
      }}
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      style={{
        fontSize: "1.5rem",
        fontWeight: "900",
        marginBottom: "1rem",
        marginTop: "2rem",
      }}
      {...props}
    />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      style={{
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      style={{
        fontSize: "1rem",
        fontWeight: "400",
        marginBottom: "1rem",
        marginTop: "1rem",
      }}
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      style={{
        color: "#fff",
        textDecoration: "underline",
      }}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      style={{
        paddingLeft: "1.5rem",
        marginBottom: "1rem",
        marginTop: "1rem",
      }}
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      style={{
        paddingLeft: "1.5rem",
        marginBottom: "1rem",
        marginTop: "1rem",
      }}
      {...props}
    />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li
      style={{
        marginBottom: "0.5rem",
      }}
      {...props}
    />
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...myComponents,
  };
}
