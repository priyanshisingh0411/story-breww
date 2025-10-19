import React from "react";
// import Plasma from "./ui/Plasma";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

// function Hero() {
//   return (
//     <div className="pb-20 pt-36 " style={{ height: "100vh" }}>
//       {/* Plasma background */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <Plasma
//           color="#ff6b35"
//           speed={0.6}
//           direction="forward"
//           scale={1.1}
//           opacity={0.8}
//           mouseInteractive={true}
//         />
//       </div>

//       {/* Foreground content */}
//       <div className="relative z-10 flex justify-items-start items-start h-full mx-1">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col mt-15">
//           <HoverBorderGradient
//             containerClassName="rounded-full"
//             as="button"
//             className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-2xl
//           "
//           >
//             <span>Now Accepting New Clients</span>
//           </HoverBorderGradient>

//           <h1 className="text-6xl mt-8 font-extrabold text-white">
//             The Growth Architect for Scale and Capital
//           </h1>
//           <p className="mt-6 text-white text-lg">
//             spectup helps ambitious B2B companies and post-seed startups build
//             outbound engines and get investor-ready-so you land more deals and
//             close your next round, all with one expert team.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

function Hero() {
  return (
    <section
      className="pb-15 pt-36 min-h-screen flex flex-col justify-center relative z-10"
      id="home"
    >
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col m-13">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-2xl"
        >
          <span>Now Accepting New Clients</span>
        </HoverBorderGradient>

        <h1 className="text-6xl mt-8 font-extrabold text-white">
          The Growth Architect for Scale and Capital
        </h1>

        <p className="mt-6 text-white text-lg ">
          spectup helps ambitious B2B companies and post-seed startups build
          outbound engines and get investor-ready — so you land more deals and
          close your next round, all with one expert team.
        </p>
      </div>
    </section>
  );
}

export default Hero;
