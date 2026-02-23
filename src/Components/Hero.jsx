import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Hero = () => {
    const container = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Elegant text reveal
            gsap.from('.hero-text-elem', {
                y: 30,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.1,
            });

            // Subtle drop-in for the framed image
            gsap.from('.hero-frame-elem', {
                y: 40,
                opacity: 0,
                scale: 0.98,
                duration: 1.5,
                ease: 'power3.out',
                delay: 0.5,
            });

            // Background breathing
            gsap.fromTo('.hero-bg-img',
                { scale: 1.05 },
                { scale: 1, duration: 4, ease: 'power1.out' }
            );
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative w-full min-h-[100dvh] flex flex-col bg-surface pt-24 md:pt-24 pb-4 md:pb-8 overflow-hidden text-textPrimary">

            {/* Top Text Content Area (Text sizings reduced to give the image more space) */}
            <div className="max-w-5xl mx-auto w-full text-center mb-4 md:mb-8 flex flex-col items-center px-4">
                <span className="hero-text-elem font-script text-accent text-2xl md:text-4xl mb-2 md:mb-3">Sun & Sea</span>

                <h1 className="hero-text-elem font-display text-3xl md:text-5xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-4 md:mb-6">
                    Cuisine at the edge<br />of the world.
                </h1>

                {/* Buttons prominently displayed */}
                <div className="hero-text-elem flex flex-col sm:flex-row gap-3 md:gap-5 justify-center items-center mt-1 md:mt-2">
                    <Link to="/payment" className="bg-textPrimary text-surface px-6 md:px-8 py-2.5 md:py-3 w-full sm:w-auto text-center font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold hover:bg-accent hover:text-white transition-colors premium-shadow rounded-full">
                        Reserve a Table
                    </Link>

                    <Link to="/menu" className="group flex items-center justify-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-textPrimary hover:text-accent transition-colors py-2 md:py-3">
                        <span className="w-8 h-px bg-textPrimary group-hover:bg-accent group-hover:w-12 transition-all duration-300"></span>
                        View Menu
                    </Link>
                </div>
            </div>

            {/* Modern Sleek Framed Image with "Sewing" dashed border. 
                 lifted up via layout, exact 4rem (mx-16) margin left/right, and significantly taller (min-h-[55vh]) */}
            <div className="hero-frame-elem flex-1 w-[calc(100%-2rem)] md:w-[calc(100%-8rem)] mx-auto border border-dashed border-textPrimary/30 p-1.5 md:p-3 rounded-2xl md:rounded-[2.5rem] relative min-h-[40vh] md:min-h-[60vh] flex flex-col overflow-hidden">

                {/* Inner container for actual rounded image */}
                <div className="relative w-full flex-1 rounded-xl md:rounded-[2rem] overflow-hidden bg-[#e0dcd1]">
                    {/* Exquisite fine dining plating/restaurant visual related to the niche */}
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2800&q=80"
                        alt="Majestic Sea View"
                        className="hero-bg-img absolute inset-0 w-full h-full object-cover object-center"
                    />
                </div>

            </div>

        </section>
    );
};

export default Hero;
