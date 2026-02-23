import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ReservationCTA = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.cta-element', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-32 px-4 md:px-6 bg-textPrimary text-bg relative overflow-hidden">
            {/* Noise filter overriding global config for this dark section */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'var(--noise-url)' }}></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                <span className="cta-element font-script text-accent text-3xl md:text-6xl mb-3 md:mb-4">The Invitation</span>
                <h2 className="cta-element font-display italic text-3xl md:text-7xl mb-8 md:mb-12">Your table awaits.</h2>

                {/* Simple Reservation Form (Visual Only) */}
                <form className="cta-element w-full max-w-3xl flex flex-col md:flex-row gap-3 md:gap-4 p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 premium-shadow">

                    <div className="flex-1 flex flex-col text-left">
                        <label className="font-mono text-xs tracking-widest text-subtle mb-2 ml-4">DATE</label>
                        <input
                            type="date"
                            className="w-full bg-white/5 text-white p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30 font-body transition-all"
                        />
                    </div>

                    <div className="flex-1 flex flex-col text-left">
                        <label className="font-mono text-xs tracking-widest text-subtle mb-2 ml-4">TIME</label>
                        <select defaultValue="" className="w-full bg-white/5 text-white p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30 font-body transition-all appearance-none cursor-pointer">
                            <option value="" disabled>Select Time</option>
                            <option value="18:00" className="text-textPrimary">18:00</option>
                            <option value="19:00" className="text-textPrimary">19:00</option>
                            <option value="20:00" className="text-textPrimary">20:00</option>
                            <option value="21:00" className="text-textPrimary">21:00</option>
                        </select>
                    </div>

                    <div className="flex-1 flex flex-col text-left">
                        <label className="font-mono text-xs tracking-widest text-subtle mb-2 ml-4">GUESTS</label>
                        <select className="w-full bg-white/5 text-white p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30 font-body transition-all appearance-none cursor-pointer">
                            <option value="2" className="text-textPrimary">2 People</option>
                            <option value="3" className="text-textPrimary">3 People</option>
                            <option value="4" className="text-textPrimary">4 People</option>
                            <option value="5" className="text-textPrimary">5+ People</option>
                        </select>
                    </div>

                </form>

                <a href="/payment" className="cta-element magnetic-btn mt-8 md:mt-12 bg-accent text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-xs md:text-sm font-semibold tracking-widest uppercase premium-shadow hover:bg-white hover:text-textPrimary">
                    <span>Request Reservation</span>
                </a>
            </div>
        </section>
    );
};

export default ReservationCTA;
