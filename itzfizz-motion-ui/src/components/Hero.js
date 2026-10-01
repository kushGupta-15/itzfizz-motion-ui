"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Headline from "./Headline";
import Statistics from "./Statistics";
import ScrollVisual from "./ScrollVisual";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Hero() {
  const container = useRef();
  const pinnedSection = useRef();

  useGSAP(() => {
    // --- 1. Initial Load Sequence ---
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(".headline-text", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      letterSpacing: "0em" 
    })
    .fromTo(".visual-element", 
      { opacity: 0, scale: 0.8, x: "-35vw" }, // Start fully visible on the left side
      { opacity: 1, scale: 1, x: "-35vw", duration: 1.5 }, 
      "-=0.6"
    )
    .from(".scroll-indicator", {
      opacity: 0,
      duration: 1
    }, "-=0.5");

    // --- 2. Scroll-Driven Animations ---
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: pinnedSection.current,
        start: "top top",
        end: "+=3000",    // Pin the section for 3000px of scrolling
        pin: true,        // Pin the Hero section in place
        scrub: 1,         // Smooth 1-second lag for fluid scrubbing
        anticipatePin: 1
      }
    });

    // Car drives from left to right across the screen. 
    // We use a duration of 100 to map timing easily to percentages.
    scrollTl.to(".visual-element", { 
      x: "35vw", // Drive towards right side (fully visible)
      ease: "none",
      duration: 100
    });

    // Add glowing/color effects to the headline as the car scrubs across
    scrollTl.to(".headline-text", {
      color: "#FF4C29",
      textShadow: "0px 0px 30px rgba(255, 76, 41, 0.8)",
      scale: 1.05,
      ease: "none",
      duration: 100
    }, 0); // Start at the same time as the car

    // Fade out the scroll indicator as soon as you start scrolling
    scrollTl.to(".scroll-indicator", {
      opacity: 0,
      duration: 5 // happens in the first 5% of scroll
    }, 0);

    // Show metrics at specific scroll points (25%, 50%, 100%)
    const stats = gsap.utils.toArray(".stat-item");
    if (stats.length === 3) {
      // 1st metric at 25% progress
      scrollTl.fromTo(stats[0], 
        { opacity: 0, y: 30, scale: 0.8 }, 
        { opacity: 1, y: 0, scale: 1, duration: 10, ease: "power2.out" }, 
      25);
      
      // 2nd metric at 50% progress
      scrollTl.fromTo(stats[1], 
        { opacity: 0, y: 30, scale: 0.8 }, 
        { opacity: 1, y: 0, scale: 1, duration: 10, ease: "power2.out" }, 
      50);
      
      // 3rd metric at 90% progress (so it finishes around 100%)
      scrollTl.fromTo(stats[2], 
        { opacity: 0, y: 30, scale: 0.8 }, 
        { opacity: 1, y: 0, scale: 1, duration: 10, ease: "power2.out" }, 
      90);
    }

  }, { scope: container });

  return (
    <div ref={container}>
      <section ref={pinnedSection} className="hero-section relative w-full h-screen flex flex-col items-center justify-start pt-32 px-4 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F] -z-20" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF4C29] opacity-10 blur-[150px] rounded-full -z-20" />
        
        {/* Text layers (z-index 10) */}
        <div className="z-10 relative flex flex-col items-center w-full">
          <Headline />
          <Statistics />
        </div>
        
        {/* Car visual layer (z-index 20) */}
        <ScrollVisual />
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 z-10">
          <span className="text-xs uppercase tracking-widest mb-2 font-mono text-gray-400">Scroll to Animate</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </section>
    </div>
  );
}
