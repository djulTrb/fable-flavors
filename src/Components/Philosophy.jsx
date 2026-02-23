import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax Background
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Word reveal
            const words = textRef.current.querySelectorAll('.reveal-word');
            gsap.from(words, {
                opacity: 0.1,
                y: 20,
                duration: 1,
                stagger: 0.05,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "center center",
                    scrub: 1,
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const statement = "We believe the Aegean holds secrets meant only for those willing to listen. Every plate we serve is a hand-painted love letter to the sea, crafted with a pinch of passion in every dish.";
    const words = statement.split(" ");

    return (
        <section ref={sectionRef} className="relative w-full py-20 md:py-60 bg-surface overflow-hidden px-4 md:px-6 flex justify-center items-center">
            {/* Background Texture Parallax */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.15] hidden md:block">
                <img
                    ref={bgRef}
                    src="https://images.unsplash.com/photo-1544414008-04185ce00add?q=80&w=2800&auto=format&fit=crop"
                    alt="Mediterranean texture"
                    className="w-full h-[130%] object-cover object-center absolute -top-[15%]"
                />
            </div>

            <div className="relative z-10 max-w-5xl text-center">
                <h2 ref={textRef} className="font-display text-2xl md:text-5xl lg:text-7xl leading-[1.3] text-textPrimary">
                    {words.map((word, i) => {
                        const isAccent = word.toLowerCase().includes("passion") || word.toLowerCase().includes("sea") || word.toLowerCase().includes("aegean");
                        return (
                            <span key={i} className={`reveal-word inline-block mr-[0.3em] ${isAccent ? 'text-accent' : ''}`}>
                                {word}
                            </span>
                        );
                    })}
                </h2>
            </div>
        </section>
    );
};

export default Philosophy;
