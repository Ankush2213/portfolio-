import React from "react";
import { Camera, Crown } from "lucide-react";

// import photos
import photo1 from "../assets/photography/photo1.jpeg";
import photo2 from "../assets/photography/photo2.jpeg";
import photo3 from "../assets/photography/photo3.jpeg";
import photo4 from "../assets/photography/photo4.jpeg";
import photo5 from "../assets/photography/photo5.jpeg";
import photo6 from "../assets/photography/photo6.jpeg";



const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
];


export const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-24 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Hobbies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Chess */}
          <div className="rounded-xl border border-border p-6 bg-card">
            <div className="flex items-center gap-3 mb-4">
              <Crown className="text-primary" size={28} />
              <h3 className="text-xl font-semibold">Chess</h3>
            </div>
            <p className="text-muted-foreground">
              I enjoy playing chess to sharpen my strategic thinking, patience,
              and problem-solving skills. It helps me think multiple steps ahead
              — just like coding.
            </p>
          </div>

          {/* Photography */}
            <div className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-500 max-h-[360px] hover:max-h-[700px]">
            <div className="p-6">
             <div className="flex items-center gap-3 mb-4">
              <Camera className="text-primary" size={28} />
             <h3 className="text-xl font-semibold">Photography</h3>
            </div>

        <p className="text-muted-foreground mb-4">
            Photography allows me to capture moments, perspectives, and stories
            through visuals.
        </p>

        {/* Photo Grid */}
            <div className="grid grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photography ${index + 1}`}
              className="rounded-lg object-cover h-40 w-full transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ))}
     </div>
    </div>

    {/* Hover hint */}
    <div className="text-center text-xs text-muted-foreground py-2 opacity-70 group-hover:opacity-0 transition">
     Hover to view more
     </div>
        </div>


        </div>
      </div>
    </section>
  );
};


