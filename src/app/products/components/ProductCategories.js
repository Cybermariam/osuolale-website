import products from "../../../../components/data/products";

const ProductCategories = () => {
  return (
    <section className="bg-(--page-background) py-10 md:py-10 px-6 md:px-12 lg:px-16 w-full">
      <ul className="mx-auto flex flex-row flex-wrap justify-start gap-3 scroll-auto ">
        <li className="border p-4"> All products</li>
        {products.map((product) => (
          <li key={product.id} className="border p-4">
            {product.category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductCategories;
