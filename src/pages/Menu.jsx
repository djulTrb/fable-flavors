import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const menuData = {
    Starters: {
        desc: "First impressions gathered from land and sea.",
        items: [
            { name: "Scallop Crudo", desc: "Hand-dived scallops, citrus aguachile, compressed cucumber.", price: "24", badges: ["GF"] },
            { name: "Whipped Feta & Fig", desc: "Local honey, pistachio dust, house sourdough.", price: "18", badges: ["V"] },
            { name: "Charred Eggplant", desc: "Smoked tahini, pomegranate molasses, mint.", price: "16", badges: ["V", "GF"] }
        ]
    },
    Mains: {
        desc: "The centerpiece of the table.",
        items: [
            { name: "Aegean Sea Bass", desc: "Pan-seared catch of the day, lemon emulsion, wild samphire.", price: "36", badges: ["GF"] },
            { name: "Slow-Braised Lamb", desc: "12-hour shoulder, orzo, roasted root vegetables, rosemary jus.", price: "42", badges: [] },
            { name: "Coastal Risotto", desc: "Acquerello rice, asparagus tips, charred lemon, parmesan crisp.", price: "32", badges: ["V", "GF"] },
            { name: "Wagyu Striploin", desc: "MBS 8+, black garlic purée, charred leeks, pomegranate reduction.", price: "68", badges: ["GF"] },
            { name: "Herb Roasted Chicken", desc: "Free-range breast, truffled potato puree, jus gras.", price: "34", badges: ["GF"] },
            { name: "Charred Octopus", desc: "Smoked aubergine purée, caper dressing, olive dust.", price: "28", badges: ["GF"] }
        ]
    },
    Desserts: {
        desc: "A final lingering memory.",
        items: [
            { name: "Olive Oil Cake", desc: "Macerated strawberries, mascarpone crema, basil sugar.", price: "14", badges: ["V"] },
            { name: "Dark Chocolate Nemesis", desc: "70% Valrhona, sea salt flakes, raspberry coulis.", price: "16", badges: ["V", "GF"] },
            { name: "Lemon Posset", desc: "Shortbread crunch, candied zest, thyme.", price: "12", badges: ["V"] }
        ]
    },
    Mocktails: {
        desc: "Artisan alcohol-free elixirs.",
        items: [
            { name: "Aegean Sunset", desc: "Fresh grapefruit, distilled rosemary, elderflower tonic.", price: "14", badges: [] },
            { name: "Smoked Apple", desc: "Cold-pressed apple, smoked cinnamon, spiced ginger syrup.", price: "15", badges: [] },
            { name: "The Pearl Elixir", desc: "Lychee nectar, yuzu blossom water, white peach pearls.", price: "16", badges: [] }
        ]
    },
    "Artisan Teas & Coffees": {
        desc: "Curated infusions and roasts.",
        items: [
            { name: "Mountain Mint Blend", desc: "Hand-picked Greek mountain tea, refreshing and floral.", price: "8", badges: ["Hot", "Iced"] },
            { name: "Saffron & Rose", desc: "Delicate white tea infused with Persian saffron and rose petals.", price: "12", badges: ["Hot"] },
            { name: "Cardamom Coffee", desc: "Traditional dark roast, slow-brewed with crushed cardamom pods.", price: "9", badges: ["Hot"] }
        ]
    }
};

const Menu = () => {
    const containerRef = useRef(null);
    const [activeTab, setActiveTab] = useState('Starters');
    const categories = Object.keys(menuData);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.menu-header', {
                y: 40, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2
            });

            gsap.utils.toArray('.menu-category').forEach((section) => {
                gsap.from(section, {
                    y: 50, opacity: 0, duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (id) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div ref={containerRef} className="pt-32 pb-40 min-h-screen bg-bg text-textPrimary">

            {/* Header */}
            <div className="max-w-5xl mx-auto px-6 text-center mb-16">
                <h1 className="menu-header font-display text-5xl md:text-7xl mb-6">The Culinary Archive</h1>
                <p className="menu-header font-subheading text-xl md:text-2xl text-subtle italic max-w-2xl mx-auto">
                    A collection of seasons, stories, and ingredients carefully chosen to reflect the coastal breeze.
                </p>
                <div className="menu-header h-px w-24 bg-accent/30 mx-auto mt-8"></div>
            </div>

            {/* Left Sidebar Layout */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative mt-20">

                {/* Left Sticky Nav Filter */}
                <div className="w-full lg:w-64 sticky top-24 md:top-32 flex flex-row lg:flex-col gap-2 overflow-x-auto no-scrollbar shrink-0 z-40 bg-bg/95 md:bg-transparent py-4 md:py-0 mb-8 md:mb-0">
                    <h3 className="hidden lg:block font-display italic text-2xl mb-4 text-textPrimary border-b border-textPrimary/10 pb-4">Chapters</h3>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => scrollToSection(cat)}
                            className={`whitespace-nowrap flex text-left px-6 py-3 rounded-xl lg:rounded-none text-sm font-semibold tracking-widest uppercase transition-all duration-300
                                ${activeTab === cat
                                    ? 'bg-accent text-white lg:bg-transparent lg:text-accent lg:pl-8 lg:border-l-2 lg:border-accent'
                                    : 'bg-surface text-textPrimary/60 lg:bg-transparent lg:border-l-2 lg:border-transparent lg:hover:pl-8 lg:hover:text-textPrimary lg:px-6'
                                }
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Right Categories Content */}
                <div className="flex-1 space-y-32 w-full pb-32">
                    {Object.entries(menuData).map(([cat, data]) => (
                        <div key={cat} id={cat} className="menu-category scroll-mt-32">

                            {/* Category Header */}
                            <div className="flex items-end gap-6 mb-16">
                                <h2 className="font-display text-4xl md:text-5xl">{cat}</h2>
                                <div className="flex-1 h-px bg-accent/20 mb-3"></div>
                            </div>
                            <p className="font-subheading italic text-textPrimary/80 text-lg md:text-xl mb-10 max-w-xl">{data.desc}</p>

                            {/* Unified Elegant List Layout */}
                            <div className="flex flex-col gap-10">
                                {data.items.map((item, i) => (
                                    <div key={i} className="flex flex-col md:flex-row md:items-end justify-between gap-4 group menu-item-hover border-b border-surface pb-6">

                                        <div className="flex-1">
                                            <div className="flex items-baseline gap-4 mb-2">
                                                <h3 className="font-display italic text-2xl md:text-3xl group-hover:text-accent transition-colors underline-trace inline-block leading-none">
                                                    {item.name}
                                                </h3>
                                            </div>
                                            <p className="font-body text-textPrimary/70 max-w-xl pr-6">{item.desc}</p>
                                        </div>

                                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 mt-4 md:mt-0">
                                            <div className="flex gap-2">
                                                {item.badges.map(b => (
                                                    <span key={b} className="font-mono text-[10px] tracking-widest uppercase text-accent bg-accent/10 px-2 py-1 rounded">
                                                        {b}
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="font-mono text-accent text-xl md:text-2xl">${item.price}</span>
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Menu;
