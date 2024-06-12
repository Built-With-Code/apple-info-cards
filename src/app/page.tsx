import InfoCard from "@/components/InfoCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 p-10">
      <section>
        <h1 className="text-teal-500 font-semibold text-5xl tracking-tight px-8 my-10">
          Passwords app
        </h1>
        <div className="grid grid-cols-2 gap-8 mt-6">
          <InfoCard />
          <InfoCard />
        </div>
      </section>
    </main>
  );
}
