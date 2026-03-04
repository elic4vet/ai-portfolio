
import { useState } from 'react';
import FloatingCodeSymbols from '../assets/floating.jsx';
import CV from '../assets/CV-Elisabeth_Erkekoglou.pdf';

export default function Hero() {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownloadCV = () => {
        setIsDownloading(true);

        try {
            const link = document.createElement('a');
            link.href = CV;
            link.download = 'CV-Elisabeth_Erkekoglou.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading CV:', error);
        }

        setTimeout(() => setIsDownloading(false), 1000);
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
            <FloatingCodeSymbols />
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full 
                bg-white/5 backdrop-blur-xl border border-rose-500/20 
                shadow-[0_0_30px_rgba(244,63,94,0.15)] 
                transition-all duration-700 delay-100 
                hover:border-rose-500/40 hover:shadow-[0_0_40px_rgba(244,63,94,0.25)] 
                hover:scale-105 cursor-default
                opacity-100 translate-y-0">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-sparkles w-4 h-4 text-rose-200 animate-pulse" aria-hidden="true">
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                    <path d="M20 3v4"></path><path d="M22 5h-4"></path>
                    <path d="M4 17v2"></path><path d="M5 18H3"></path>
                </svg>

                <span className="text-sm font-medium text-rose-200/90 tracking-wide">Available for hire</span>
                <span className="relative flex w-3 h-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full w-3 h-3 bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.8)]"></span>
                </span>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-rose-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg animate-fade-in">
                    Hi, I'm Elisabeth
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl animate-fade-in-up">
                    Frontend Developer building AI-powered web apps and interactive experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                    <a
                        href="#projects"
                        className="group px-6 py-3 bg-white text-rose-500 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    >
                        View Projects
                        <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </a>

                    <button
                        onClick={handleDownloadCV}
                        disabled={isDownloading}
                        className="px-8 py-4 bg-rose-500 text-white font-semibold rounded-xl hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed appearance-none"
                    >
                        {isDownloading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Downloading...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Hire Me (CV)
                            </span>
                        )}
                    </button>
                </div>
                <div className="mt-16 animate-bounce">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-auto"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                    <p className="text-white text-sm mt-2"><a href="#about" className="text-white hover:underline">Scroll down</a></p>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

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

                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out 0.3s backwards;
                }

                @keyframes ping-slow {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.8); opacity: 0.3; }
                }

                .animate-ping-slow {
                    animation: ping-slow 2s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}