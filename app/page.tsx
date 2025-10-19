import ContactBox from "@/component/ContactBox";
import Hero from "@/component/Hero";
import NavBar from "@/component/NavBar";
import Plasma from "@/component/ui/Plasma";
import { navItems } from "@/data";
import AboutBusiness from "@/component/AboutBusiness";

export default function Home() {
  // console.log(navItems.map((item) => item.buttonNo));

  return (
    // <div className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 overflow-hidden ">
    //   <div className="max-w-7xl w-full min-h-screen">
    //     <NavBar />
    //     <Hero />
    //     <ContactBox />
    //   </div>
    // </div>
    <main className="bg-black flex flex-col items-center overflow-hidden">
      <div className="relative max-w-7xl w-full min-h-screen">
        {/* Plasma background layer */}
        <div className="absolute inset-0 z-0">
          <Plasma
            color="#ff6b35"
            speed={0.6}
            direction="forward"
            scale={1.1}
            opacity={0.8}
            mouseInteractive={true}
          />

          {/* 👇 Gradient fade overlay */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        </div>

        {/* Foreground content (on top of Plasma) */}
        <div className="relative z-10">
          <NavBar navItems={navItems} />
          <Hero />
          <ContactBox />
        </div>
      </div>

      {/* After Plasma area → pure black background */}
      <section className="bg-black w-full py-35 text-center">
        <AboutBusiness />
      </section>
    </main>
  );
}
