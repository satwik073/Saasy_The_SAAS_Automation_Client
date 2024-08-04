import { ContainerScroll } from "@/animations/controller-scroll-animations";
import NavbarWrappedModal from "@/components/Global/Navbar/NavbarContainers/NavbarWrappedModal";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NavbarWrappedModal />
      <section className="h-screen w-full bg-neutral-950 rounded-md relative flex flex-col items-center antialiased overflow-hidden">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#698474_150%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Fuzzie
                </h1>
              </div>
            }
          />
        </div>
      </section>
    </main>
  );
}
