export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-6 sticky top-0 z-50">
            <h1 className="text-2xl font-bold "><a href="#">MyPortfolio</a></h1>
            <ul className="flex gap-6">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

