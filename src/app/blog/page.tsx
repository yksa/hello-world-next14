import { Metadata } from "next";

// Parent title template will be ignored
// export const metadata: Metadata = { title: { absolute: "Blog" } };
export const metadata: Metadata = { title: "Blog" };

export default function Blog() {
  return <h1>My blog</h1>;
}
