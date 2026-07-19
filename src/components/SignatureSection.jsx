import React from "react";
import profile from "../assets/profile/profile.jpeg";
import { useToast } from "../hooks/use-toast";

export const SignatureSection = () => {
  const { toast } = useToast();

  const handleSocialLifeClick = () => {
    toast({
      title: "Coming Soon",
      description: "My social life section is being prepared. Stay tuned!",
      duration: 5000,
    });
  };
  return (
    <section className="relative py-32 px-4 flex flex-col items-center text-center overflow-hidden">
      {/* soft blend overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />

      {/* 2209 signature */}
        <div className="relative z-10 flex items-center gap-6 md:gap-8 text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-widest">
        <span className="text-foreground/80">2</span>
        <span className="text-foreground/80">2</span>

         {/* Image as 0 */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border border-border">
            <img
                src={profile}
                alt="Ankush Nayak"
                className="w-full h-full object-cover"
            />
        {/* stronger glow */}
        <div className="absolute inset-0 rounded-full bg-primary/35 blur-2xl -z-10" />
        </div>

                <span className="text-foreground/80">9</span>
                </div>


      {/* Quote */}
        <p className="mt-12 text-xl md:text-2xl font-semibold tracking-wide">
         Veni, Vidi, Vici
        </p>


      <p className="relative z-10 mt-2 text-sm text-muted-foreground tracking-widest uppercase">
        I came. I saw. I conquered.
      </p>

      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={handleSocialLifeClick}
          className="rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-foreground/90 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_8px_24px_rgba(168,85,247,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300/60 hover:bg-purple-500/20"
        >
          Know More About My Social Life
        </button>
      </div>
    </section>
  );
};
