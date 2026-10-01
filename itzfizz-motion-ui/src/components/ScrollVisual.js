import Image from "next/image";

export default function ScrollVisual() {
  return (
    <div className="scroll-visual-container absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-6xl h-[400px] md:h-[600px] z-20 pointer-events-none mt-10">
      <div className="visual-element w-full h-full relative">
        <Image 
          src="/car.png" 
          alt="Sleek Sports Car" 
          fill
          className="object-contain drop-shadow-2xl scale-x-[-1]"
          priority
        />
      </div>
    </div>
  );
}
