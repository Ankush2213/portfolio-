import React from "react";
import profile from "../assets/profile/profile.jpeg";

export const SignatureSection = () => {
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
    </section>
  );
};
