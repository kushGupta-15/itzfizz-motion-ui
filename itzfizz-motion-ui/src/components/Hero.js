"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Headline from "./Headline";
import Statistics from "./Statistics";
import ScrollVisual from "./ScrollVisual";

export default function Hero() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Initial load animation sequence
    tl.from(".headline-text", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      // Temporarily override tailwind tracking to animate it
      letterSpacing: "0em" 
    })
    .from(".stat-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    }, "-=0.8")
    .from(".visual-element", {
      scale: 0.85,
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    }, "-=0.6")
    .from(".scroll-indicator", {
      opacity: 0,
      duration: 1
    }, "-=0.5");

  }, { scope: container });

  return (
    <section ref={container} className="hero-section relative w-full min-h-screen flex flex-col items-center justify-start pt-20 px-4 overflow-hidden">
      {/* Background gradients for premium feel */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] -z-10" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF4C29] opacity-20 blur-[120px] rounded-full -z-10" />
      
      <Headline />
      <Statistics />
      <ScrollVisual />
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
        <span className="text-xs uppercase tracking-widest mb-2 font-mono text-gray-400">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}
