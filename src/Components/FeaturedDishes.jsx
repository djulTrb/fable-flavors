import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const FeaturedDishes = () => {
    const sectionRef = useRef(null);

    const signatures = [
        {
            name: "Aegean Sea Bass",
            desc: "Pan-seared catch of the day, lemon emulsion, wild samphire.",
            price: "36",
            img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80"
        },
        {
            name: "Charred Octopus",
            desc: "Smoked aubergine purée, caper dressing, olive dust.",
            price: "28",
            img: "https://images.unsplash.com/photo-1560717845-968823efbee1?auto=format&fit=crop&w=1200&q=80"
        },
        {
            name: "Heritage Tomato Tart",
            desc: "Whipped feta, thyme-infused honey, crisp filo pastry.",
            price: "22",
            img: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=1200&q=80"
        }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.dish-card', {
                y: 60,
                opacity: 0,
                duration: 1.5,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.featured-grid',
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-32 px-4 md:px-12 bg-surface text-textPrimary">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
                    <div>
                        <span className="font-script text-accent text-3xl md:text-4xl block mb-2">Our Signatures</span>
                        <h2 className="font-display text-3xl md:text-5xl">What We're Known For</h2>
                    </div>
                    <Link to="/menu" className="font-mono text-sm tracking-widest uppercase hover:text-accent transition-colors pb-2 border-b border-textPrimary/20 hover:border-accent">
                        View Full Menu
                    </Link>
                </div>

                {/* Removed horizontal snap scroll. Using grid for all screen sizes (1 col mobile, 3 col desktop) */}
                <div className="featured-grid grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
                    {signatures.map((dish, i) => (
                        <div key={i} className="dish-card relative h-[350px] md:h-[500px] rounded-2xl md:rounded-[2.5rem] overflow-hidden group premium-shadow">

                            {/* Full Image Background */}
                            <img
                                src={dish.img}
                                alt={dish.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/90 group-hover:via-black/60"></div>

                            {/* Text Content Overlay */}
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 mb-2">
                                    {i === 0 ? 'From the Sea' : i === 1 ? 'Signature Grill' : 'Garden Fresh'}
                                </span>
                                <h3 className="font-display text-2xl md:text-3xl mb-2 group-hover:text-accent transition-colors leading-tight">
                                    {dish.name}
                                </h3>
                                <p className="font-subheading italic text-white/70 text-sm md:text-base leading-relaxed mb-4">
                                    {dish.desc}
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="w-4 h-px bg-accent"></span>
                                    <span className="font-mono text-sm text-accent tracking-widest">${dish.price}</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedDishes;
