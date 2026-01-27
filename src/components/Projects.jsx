import ProjectCard from "./ProjectCard.jsx";

const projects = [
    {
        title: "AI Resume Builder",
        description: "Generate tailored resumes with AI. Focus on frontend UX and prompt integration.",
        tech: ["React", "Tailwind", "OpenAI API"],
        status: "Live",
        link: "#"
    },
    {
        title: "AI writing assistant",
        description: "An AI-powered tool to help you write better and faster.",
        tech: ["React", "API", "UI/UX"],
        status: "Coming Soon",
        link: "#"
    },
    {
        title: "AI Image Captioner",
        description: "Upload an image and generate descriptive captions using AI.",
        tech: ["React", "Tailwind", "OpenAI API"],
        status: "Coming Soon",
        link: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className=" px-6 py-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
