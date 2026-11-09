import { Logo } from "./Logo";
import { ServiceCard } from "./ServiceCard";

const categories = [

  {

    title: "Media",

    services: [

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

    ],

  },

  {

    title: "Agents",

    services: [

      {

        title: "Prometheus",
        description: "A multi-user, always-on agent server.",
        href: "https://prometheus.windward.sh",

      },

      {

        title: "Pandora",
        description: "A native desktop coding agent.",
        href: "https://pandora.windward.sh",

      },

    ],

  },

];

export function App() {

  return (

    <main className="grid min-h-screen place-items-center bg-[#0a0a0a] px-6 py-16 font-sans text-[#fafafa]">

      <div className="flex w-full max-w-3xl flex-col items-center text-center">

        <Logo className="mb-8 h-20 sm:h-24" />

        <h1 className="text-6xl tracking-tight sm:text-7xl">Windward</h1>

        <p className="mt-3 font-body text-lg text-[#737373]">The last best human software.</p>

        <nav className="mt-16 grid w-full gap-8 sm:grid-cols-2">

          {categories.map((category) => (

            <section key={category.title} className="flex flex-col gap-3">

              <h2 className="px-1 pb-2 text-center text-[21px] font-body text-[#fafafa]">{category.title}</h2>

              {category.services.map((service) => (

                <ServiceCard key={service.title} {...service} />

              ))}

            </section>

          ))}

        </nav>

      </div>

    </main>

  );

}
