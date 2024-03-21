import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return { title: `Product ${params.productId}` };
};

// async function
// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const title = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`iPhone ${params.productId}`);
//     }, 100);
//   });
//   console.log({ title });
//   return { title: `Product ${title}` };
// };

export default function ProductDetail({ params }: Props) {
  return <h1>Details about product {params.productId}</h1>;
}
