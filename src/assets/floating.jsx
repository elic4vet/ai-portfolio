import { useEffect, useState } from 'react';

export default function FloatingCodeSymbols() {
    const symbols = ['{', '}', ';', '(', ')', '<', '*', '>', '[', ']', ';', '{', '}', '=', '+', '*', '/', '%', '&', '^', '~'];
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate random particles
        const generateParticles = () => {
            const newParticles = [];
            for (let i = 0; i < 20; i++) {
                newParticles.push({
                    id: i,
                    symbol: symbols[Math.floor(Math.random() * symbols.length)],
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    duration: 15 + Math.random() * 20,
                    delay: Math.random() * 5,
                    size: 1 + Math.random() * 1.5,
                    opacity: 0.1 + Math.random() * 0.2
                });
            }
            setParticles(newParticles);
        };

        generateParticles();
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute text-white font-mono floating-symbol"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        fontSize: `${particle.size}rem`,
                        opacity: particle.opacity,
                        animation: `float ${particle.duration}s infinite ease-in-out`,
                        animationDelay: `${particle.delay}s`
                    }}
                >
                    {particle.symbol}
                </div>
            ))}

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0) rotate(0deg);
                    }
                    25% {
                        transform: translate(20px, -30px) rotate(5deg);
                    }
                    50% {
                        transform: translate(-15px, -60px) rotate(-5deg);
                    }
                    75% {
                        transform: translate(25px, -30px) rotate(3deg);
                    }
                }

                .floating-symbol {
                    will-change: transform;
                }
            `}</style>
        </div>
    );
}