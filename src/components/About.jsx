export default function About() {
    return (
        <section id="about" className="px-6 py-20 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-white-400">
                I’m a junior frontend developer focused on building clean, user-friendly web apps.
                I’m currently exploring AI integrations to enhance user experiences and solve real-world problems.
            </p>
            <div className="div mt-8">
                <a href="#contact"
                    className="px-8 py-4 bg-rose-500 text-white font-semibold rounded-xl hover:bg-rose-600 transition-all duration-300 ">
                    Contact Me
                </a>
            </div>
        </section>

    );
}
