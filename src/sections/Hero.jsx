import React from "react";
import { GridScan } from "../components/GridScan";
import TiltedCard from "../components/TiltedCard";

// ✅ Import your three different images
import image1 from "../assets/Tilted1.png";
import image2 from "../assets/Tilted2.png";
import image3 from "../assets/Tilted3.png";

export default function Hero() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* 🟡 Outer glowing oval container */}
      <div
        className="relative flex flex-row items-center justify-center text-center rounded-[60px] overflow-hidden shadow-[0_0_60px_rgba(245,179,0,0.4)] px-10"
        style={{
          width: "90%",
          height: "80vh",
          border: "2px solid #F5B300",
          background: "rgba(0, 0, 0, 0.6)",
        }}
      >
        {/* ✨ GridScan background */}
        <div className="absolute inset-0 z-0">
          <GridScan
            sensitivity={0.0}
            lineThickness={1}
            linesColor="#F5B300"
            gridScale={0.1}
            scanColor="#FFD54F"
            scanOpacity={0.0}
            enablePost
            bloomIntensity={0.0}
            chromaticAberration={0.001}
            noiseIntensity={0.0}
          />
        </div>

        {/* 🖼️ Three Tilted Cards */}
        <div className="relative z-10 flex flex-row items-center justify-center gap-12">
          <TiltedCard
            imageSrc={image1}
            altText="BuildX Card 1"
            captionText=""
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.15}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />

          <TiltedCard
            imageSrc={image2}
            altText="BuildX Card 2"
            captionText=""
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.15}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />

          <TiltedCard
            imageSrc={image3}
            altText="BuildX Card 3"
            captionText=""
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.15}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        </div>
      </div>
    </div>
  );
}
