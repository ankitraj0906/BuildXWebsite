import React, { useRef } from "react";
import { GridScan } from "../components/GridScan";
import VariableProximity from "../components/VariableProximity"; // ✅ import

export default function HeroMain() {
  const containerRef = useRef(null); // ✅ needed for mouse tracking

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* 🟡 Oval container with GridScan inside */}
      <div
        ref={containerRef} // ✅ track proximity inside this container
        className="relative flex flex-col items-center justify-center text-center rounded-[60px] overflow-hidden shadow-[0_0_60px_rgba(245,179,0,0.4)]"
        style={{
          width: "90%",
          height: "80vh",
          border: "2px solid #F5B300",
          background: "rgba(0, 0, 0, 0.6)",
        }}
      >
        {/* ✨ GridScan runs inside the oval */}
        <div className="absolute inset-0 z-0">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#F5B300"
            gridScale={0.1}
            scanColor="#FFD54F"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.2}
            chromaticAberration={0.001}
            noiseIntensity={0.0}
          />
        </div>

        {/* ✨ Content inside oval */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-5xl font-extrabold text-white leading-tight">
            {/* 🌀 Add VariableProximity text */}
            <VariableProximity
              label="Crafting Stunning Websites & Apps"
              className="text-white inline-block"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
            <br />
            <VariableProximity
              label="for Visionary Entrepreneurs"
              className="text-white inline-block"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </h1>

          <br />
          <p className="text-lg text-gray-300 max-w-2xl mb-10 mx-auto text-center">
            Elevate your online presence with bespoke digital solutions tailored
            to your unique vision.
          </p>

          {/* 💛 Yellow Button */}
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{
              border: "2px solid #F5B300",
              boxShadow: "0 0 20px rgba(245, 179, 0, 0.6)",
            }}
          >
            Launch Your MVP
          </button>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { GridScan } from "./GridScan";

// export default function HeroMain() {
//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
//       {/* 🟡 Oval container with GridScan inside */}
//       <div
//         className="relative flex flex-col items-center justify-center text-center rounded-[60px] overflow-hidden shadow-[0_0_60px_rgba(245,179,0,0.4)]"
//         style={{
//           width: "90%",
//           height: "80vh",
//           border: "2px solid #F5B300",
//           background: "rgba(0, 0, 0, 0.6)",
//         }}
//       >
//         {/* ✨ GridScan runs inside the oval */}
//         <div className="absolute inset-0 z-0">
//           <GridScan
//             sensitivity={0.55}
//             lineThickness={1}
//             linesColor="#F5B300"
//             gridScale={0.1}
//             scanColor="#FFD54F"
//             scanOpacity={0.4}
//             enablePost
//             bloomIntensity={0.2}
//             chromaticAberration={0.001}
//             noiseIntensity={0.0}
//           />
//         </div>

//         {/* ✨ Content inside oval */}
//         <div className="relative z-10 px-6">
//           <h1 className="text-5xl md:text-5xl font-extrabold text-white leading-tight">
//             Crafting Stunning Websites & Apps
//             <br /> for Visionary Entrepreneurs
//           </h1>
//           <br />
//           <p className="text-lg text-gray-300 max-w-2xl mb-10 mx-auto text-center">
//             Elevate your online presence with bespoke digital solutions tailored
//             to your unique vision.
//           </p>

//           {/* 💛 Yellow Button */}
//           <button
//             className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
//             style={{
//               border: "2px solid #F5B300",
//               boxShadow: "0 0 20px rgba(245, 179, 0, 0.6)",
//             }}
//           >
//             Launch Your MVP
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
