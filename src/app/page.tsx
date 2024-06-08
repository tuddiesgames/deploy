import Index from "./Index";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full bg-primary overflow-hidden">
      <NavBar />
      <Index />
    </main>
  );
}
