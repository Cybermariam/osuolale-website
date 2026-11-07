export default function StickyBar() {
  return (
    <section className="hidden md:flex bg-(--text-primary) text-(--card-background) px-6 md:px-12 lg:px-16 py-3 justify-between text-xs items-center ">
      <div>Trusted building supplies across Lagos & nearby states</div>
      <div className="flex gap-4">
        <div>Mon–Sat, 8:00am–6:00pm</div>

        <a
          href="tel:+2349169146370"
          className="inline-flex items-center text-white hover:text-(--brand-primary) transition-colors"
        >
          +2349169146370
        </a>
      </div>
    </section>
  );
}
