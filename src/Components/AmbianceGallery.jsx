import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AmbianceGallery = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.gallery-img', {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-32 px-4 md:px-12 max-w-[1400px] mx-auto">
            <div className="mb-12 md:mb-20 text-center">
                <h2 className="font-display text-4xl md:text-7xl italic text-textPrimary">The Room.</h2>
                <div className="h-px w-16 md:w-24 bg-accent/30 mx-auto mt-6 md:mt-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 h-auto md:h-[800px]">

                {/* Left Tall Portrait (5 cols) */}
                <div className="gallery-img relative md:col-span-5 h-[350px] md:h-full rounded-2xl md:rounded-[2.5rem] overflow-hidden group premium-shadow">
                    <img
                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1500&q=80"
                        alt="Whitewashed Mediterranean architecture"
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    {/* Gradient for image contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 opacity-60 group-hover:opacity-90"></div>

                    <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 opacity-100 md:opacity-0 translate-y-0 md:translate-y-4 transition-all duration-500 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                        <p className="font-mono text-sm tracking-widest text-white uppercase drop-shadow-md">The Terrace</p>
                        <p className="font-subheading italic text-white/80 mt-1 drop-shadow-md">Midday sun cut by lattice shade</p>
                    </div>
                </div>

                {/* Right Stacked Landscape (7 cols) */}
                <div className="md:col-span-7 flex flex-col gap-4 md:gap-10 h-auto md:h-full">

                    {/* Top image */}
                    <div className="gallery-img relative w-full h-[250px] md:h-1/2 rounded-2xl md:rounded-[2.5rem] overflow-hidden group premium-shadow">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1500&q=80"
                            alt="Mediterranean coastal view"
                            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 opacity-60 group-hover:opacity-90"></div>

                        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 opacity-100 md:opacity-0 translate-y-0 md:translate-y-4 transition-all duration-500 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                            <p className="font-mono text-sm tracking-widest text-white uppercase drop-shadow-md">Cliff-side Views</p>
                        </div>
                    </div>

                    {/* Bottom image */}
                    <div className="gallery-img relative w-full h-[250px] md:h-1/2 rounded-2xl md:rounded-[2.5rem] overflow-hidden group premium-shadow">
                        <img
                            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1500&q=80"
                            alt="Hand-glazed ceramics"
                            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 opacity-60 group-hover:opacity-90"></div>

                        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 opacity-100 md:opacity-0 translate-y-0 md:translate-y-4 transition-all duration-500 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                            <p className="font-mono text-sm tracking-widest text-white uppercase drop-shadow-md">The Details</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AmbianceGallery;
