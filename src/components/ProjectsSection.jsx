import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BGMI_TOURNS Web App",
    description:
      "A full-stack MERN app to organize and participate in BGMI tournaments with payment integration.",
    image: "/projects/bgmi.png", // Replace with your actual image path
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind", "Razorpay"],
    demoUrl: "https://bgmi-tourns.vercel.app", // If live
    githubUrl: "https://github.com/Ankush2213/BGMI_TOURNS",
  },
  {
    id: 2,
    title: "Sorting Visualizer",
    description:
      "A web app to visualize sorting algorithms with real-time animations and complexity insights.",
    image: "/projects/sorting.png", // Replace with your actual image path
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://ankush2213.github.io/sortingAlgorithmVisualizer/",
    githubUrl: "https://github.com/Ankush2213/sortingAlgorithmVisualizer",
  },
  {
    id: 3,
    title: "Parallel File Encryptor",
    description:
      "A core C++ project using multithreading to encrypt and decrypt files efficiently.",
    image: "/projects/encryptor.png", // Replace with your actual image path
    tags: ["C++", "Multithreading", "File System"],
    demoUrl: "",
    githubUrl: "https://github.com/Ankush2213/Parallel-File-Encryptor",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, built with attention to
          performance, UI/UX, and real-world impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Ankush2213"
            rel="noopener noreferrer"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
