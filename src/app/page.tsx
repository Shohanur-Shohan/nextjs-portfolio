import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col h-[100vh] gap-20">
        <Hero />
      </div>
    </main>
  );
}
