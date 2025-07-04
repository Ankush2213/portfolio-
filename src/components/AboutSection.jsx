import { Code, ListCheck, Cpu } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Final-Year Developer | Problem Solver | Tech Explorer
            </h3>

            <p className="text-muted-foreground">
              I’m a final-year ECE undergraduate at NIT Bhopal with a deep interest in software development,
              web technologies, and system-level programming.
            </p>

            <p className="text-muted-foreground">
              From full-stack MERN applications to multithreaded C++ file encryption tools,
              I enjoy building impactful and efficient solutions. I have solved 300+ DSA problems across Leetcode,
              GFG, and CodeStudio, and I’m constantly pushing my limits to learn and build more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              {/* Contact Button */}
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition"
              >
                Get In Touch
              </a>

              {/* Download CV */}
              <a
                href="/CV-Ankush.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>

              {/* View CV in new tab */}
              <a
                href="/CV-Ankush.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-muted text-muted-foreground hover:bg-muted/10 transition-colors duration-300"
              >
                View CV
              </a>
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Dev */}
            <div className="p-6 border border-primary/20 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive web apps using React.js, Node.js, Tailwind CSS, and modern stacks.
                  </p>
                </div>
              </div>
            </div>

            {/* DSA */}
            <div className="p-6 border border-primary/20 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ListCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">DSA & Competitive Coding</h4>
                  <p className="text-muted-foreground">
                    Solved 300+ algorithmic problems across platforms, focusing on optimization and core CS concepts.
                  </p>
                </div>
              </div>
            </div>

            {/* Software Engineering */}
            <div className="p-6 border border-primary/20 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Software Engineering</h4>
                  <p className="text-muted-foreground">
                    Building secure, scalable systems and intuitive interfaces using C++, MERN stack,
                    and modern development practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};