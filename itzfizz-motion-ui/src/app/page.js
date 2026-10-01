import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      {/* Spacer to allow for scrolling in Phase 4 */}
      <section className="h-[150vh] w-full bg-[#0F0F0F] flex items-center justify-center">
        <h2 className="text-3xl text-gray-600 font-mono tracking-widest">More Content Below</h2>
      </section>
    </main>
  );
}
