export default function ProjectCard({ title, description, tech, status, link }) {
    return (
        <div className="border bg-white border-white-800 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-rose-500">{title}</h3>
            <p className="text-slate-400 mt-2">{description}</p>

            <div className="mt-4 flex flex-wrap gap-2 text-center">
                {tech.map((item, index) => (
                    <span key={index} className="text-sm bg-rose-400 px-3 py-1 rounded-full">
                        {item}
                    </span>
                ))}
            </div>

            <p className="mt-4 text-indigo-400 text-sm">{status} - <a href={link} className="mt-4 text-indigo-400 text-sm underline" target="_blank">View Project</a></p>
        </div>
    );
}
