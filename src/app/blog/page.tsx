import { Metadata } from "next";
import Link from "next/link";

// Parent title template will be ignored
// export const metadata: Metadata = { title: { absolute: "Blog" } };
export const metadata: Metadata = { title: "Blog" };

export default function Blog() {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>My blog</h1>
    </>
  );
}
