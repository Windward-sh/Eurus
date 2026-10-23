import { Logo } from "./Logo";

export function App() {

  return (

    <main className="grid min-h-screen place-items-center bg-[#0e0e0e] px-6 font-sans text-[#e8e2d6]">

      <div className="flex flex-col items-center text-center">

        <Logo className="mb-8 h-20 sm:h-24" />

        <h1 className="text-6xl tracking-tight sm:text-7xl">Windward</h1>

        <p className="mt-3 font-body text-lg text-[#8a857c]">Coming Soon</p>

      </div>

    </main>

  );

}
