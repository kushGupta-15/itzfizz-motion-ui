import Image from "next/image";

export default function ScrollVisual() {
  return (
    <div className="scroll-visual-container relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] mt-16 z-0">
      <div className="visual-element w-full h-full relative">
        <Image 
          src="/car.jpg" 
          alt="Sleek Sports Car" 
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
