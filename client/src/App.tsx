import { Logo } from "./Logo";
import { ServiceCard } from "./ServiceCard";

const services = [

  {

    title: "OVERTURE",
    description: "A fast, efficient and modern music app.",
    href: "https://overture.windward.sh",

  },

  {

    title: "Streamly",
    description: "Stream movies, shows, and live TV.",
    href: "https://streamly.windward.sh",

  },

];

export function App() {

  return (

    <main className="grid min-h-screen place-items-center bg-[#0a0a0a] px-6 py-16 font-sans text-[#fafafa]">

      <div className="flex w-full max-w-md flex-col items-center text-center">

        <Logo className="mb-8 h-20 sm:h-24" />

        <h1 className="text-6xl tracking-tight sm:text-7xl">Windward</h1>

        <p className="mt-3 font-body text-lg text-[#737373]">The last best human software.</p>

        <nav className="mt-12 flex w-full flex-col gap-3">

          {services.map((service) => (

            <ServiceCard key={service.title} {...service} />

          ))}

        </nav>

      </div>

    </main>

  );

}
