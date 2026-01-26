export default function Skills() {
    const skillCategories = [
        {
            category: "Frontend",
            color: "rose",
            skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"]
        },
        {
            category: "Development",
            color: "red",
            skills: ["API Integration", "Git & GitHub", "Responsive Design", "UI/UX Design"]
        },
        {
            category: "AI",
            color: "pink",
            skills: ["AI Prompt Engineering", "OpenAI API", "AI-driven UX", "AI Content Generation"]
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            rose: "bg-rose-100 text-rose-700 border-rose-300 hover:bg-rose-200 hover:border-rose-400 hover:shadow-rose-200",
            red: "bg-red-100 text-red-700 border-red-300 hover:bg-red-200 hover:border-red-400 hover:shadow-red-200",
            pink: "bg-pink-100 text-pink-700 border-pink-300 hover:bg-pink-200 hover:border-pink-400 hover:shadow-pink-200"
        };
        return colors[color];
    };

    return (
        <section id="skills" className="px-6 py-20 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-white">Skills</h2>
            <p className="text-center text-gray-100 mb-12 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
            </p>

            <div className="space-y-10">
                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                        <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${category.color === 'rose' ? 'bg-rose-400' : category.color === 'red' ? 'bg-red-400' : 'bg-pink-400'}`}></span>
                            {category.category}
                        </h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {category.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`
                                        px-6 py-4 rounded-xl border-2 font-semibold
                                        transition-all duration-300 transform
                                        hover:scale-105 hover:shadow-lg
                                        cursor-default
                                        ${getColorClasses(category.color)}
                                    `}
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>{skill}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out backwards;
                }
            `}</style>
        </section>
    );
}