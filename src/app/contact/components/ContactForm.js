const ContactForm = () => {
  const formFields = [
    {
      id: "name",
      label: "Full name",
      type: "text",
      placeholder: "Your name",
    },
    {
      id: "number",
      label: "Phone number",
      type: "tel",
      placeholder: "+234",
    },
    {
      id: "email",
      label: "Email address",
      type: "email",
      placeholder: "you@example.com",
    },
  ];

  const productCategories = [
    { value: "", label: "Select a category" },
    { value: "cement", label: "Cement" },
    { value: "iron-rods", label: "Iron rods" },
    { value: "roofing", label: "Roofing materials" },
    { value: "blocks", label: "Blocks" },
    { value: "other", label: "Other" },
  ];
  return (
    <section className="text-(--text-primary)  bg-white border border-[#DEDAD4] ">
      <form className=" py-4  px-6">
        <div className="py-4">
          <h2 className="text-2xl font-semibold tracking-[-0.72] leading-8 text-(--text-primary)">
            Request a quote
          </h2>
          <p className="mt-2 text-sm text-[#716d68]">
            {" "}
            Share a few details and continue on WhatsApp.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          {formFields.map((field) => (
            <div key={field.id} className="mb-4">
              <label
                htmlFor={field.id}
                className="mb-2 block text-sm font-semibold"
              >
                {field.label}
              </label>
              <input
                className="border border-[#D8D4CD] bg-(--page-background) p-3.5 w-full text-(--text-primary)"
                type={field.type}
                required
                placeholder={field.placeholder}
                id={field.id}
                name={field.id}
              />
            </div>
          ))}
        </div>

        <div>
          <label htmlFor="product" className="mb-2 block text-sm font-semibold">
            Product category
          </label>

          <select
            id="product"
            name="product"
            required
            className="border border-[#D8D4CD] bg-(--page-background)  p-3.5 w-full placeholder-[##9a958f]"
          >
            {productCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="my-2 block text-sm font-semibold">
            What do you need?
          </label>
          <textarea
            className="border border-[#D8D4CD] bg-(--page-background)  p-3.5 w-full placeholder:text-[#9a958f]"
            name="message"
            id="message"
            rows={4}
            placeholder="Include quantities, delivery location and preferred date..."
          ></textarea>
        </div>

        <a
          href="https://wa.me/2349169146370"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-(--brand-primary) text-white p-2 items-center justify-center text-center flex my-4"
        >
          <span>Continue on Whatsapp</span>
        </a>
      </form>
    </section>
  );
};

export default ContactForm;
