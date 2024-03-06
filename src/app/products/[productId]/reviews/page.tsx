function page({ params }: { params: { productId: string } }) {
  return <h1>Reviews for product {params.productId}</h1>;
}

export default page;
