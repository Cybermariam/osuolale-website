import products from "../../../../components/data/products";

const ProductCategories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <section className="bg-(--page-background) py-10 md:py-10 px-6 md:px-12 lg:px-16 w-full">
      <ul className="mx-auto flex flex-row flex-wrap justify-start gap-3 scroll-auto">
        <li>
          <button
            className={`border p-3 leading-6 ${selectedCategory === "All products" ? "bg-(--text-primary) text-white" : "bg-white text-(--text-primary)"}`}
            onClick={() => setSelectedCategory("All products")}
          >
            All products
          </button>
        </li>
        {products.map((product) => (
          <li key={product.id}>
            <button
              className={`border px-5 py-3 text-sm whitespace-nowrap leading-6 ${selectedCategory === product.category ? "bg-(--text-primary) text-white" : "bg-white text-(--text-primary)"}`}
              onClick={() => setSelectedCategory(product.category)}
            >
              {" "}
              {product.category}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductCategories;
