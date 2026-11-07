export default function StickyBar() {
  return (
    <section className="hidden md:flex bg-(--text-primary) text-(--card-background) px-6 md:px-12 lg:px-16 py-3 justify-between text-xs items-center ">
      <div>Trusted building supplies across Lagos & nearby states</div>
      <div className="flex gap-4">
        <div>Mon–Sat, 8:00am–6:00pm</div>
        <div>+234 123 456 7890</div>
      </div>
    </section>
  );
}
