import Headline from "./Headline";
import Statistics from "./Statistics";
import ScrollVisual from "./ScrollVisual";

export default function Hero() {
  return (
    <section className="hero-section relative w-full min-h-screen flex flex-col items-center justify-start pt-20 px-4 overflow-hidden">
      {/* Background gradients for premium feel */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] -z-10" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF4C29] opacity-20 blur-[120px] rounded-full -z-10" />
      
      <Headline />
      <Statistics />
      <ScrollVisual />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
        <span className="text-xs uppercase tracking-widest mb-2 font-mono text-gray-400">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}
