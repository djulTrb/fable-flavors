import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [kitchenStatus, setKitchenStatus] = useState(true);

    // Simple hardcoded check for demo purposes
    useEffect(() => {
        const hour = new Date().getHours();
        setKitchenStatus(hour >= 17 && hour < 23); // Open 5PM - 11PM
    }, []);

    return (
        <footer className="relative bg-[#111424] text-white pt-16 md:pt-24 pb-8 md:pb-12 mt-12 rounded-t-none md:rounded-t-[4rem] px-5 md:px-16 overflow-hidden">

            {/* Noise overlay specific to the dark footer */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'var(--noise-url)' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-8">

                {/* Brand Column */}
                <div className="col-span-2 md:col-span-4 lg:col-span-5 flex flex-col pr-0 md:pr-4 lg:pr-8 mb-4 md:mb-0">
                    <h2 className="font-display italic text-3xl md:text-5xl mb-4 md:mb-6">Fable & Flavors</h2>
                    <p className="font-subheading italic text-white/60 mb-4 md:mb-6 max-w-sm text-sm md:text-base">
                        A pinch of passion in every dish. Coastal Mediterranean cuisine crafted for lingering evenings.
                    </p>

                    {/* Kitchen Status Indicator */}
                    <div className="mt-auto flex items-center gap-3 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10 premium-shadow">
                        <div className={`w-2 h-2 rounded-full ${kitchenStatus ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                        <span className="font-mono text-xs tracking-widest uppercase text-white/80">
                            {kitchenStatus ? 'Kitchen Open' : 'Kitchen Closed'}
                        </span>
                    </div>
                </div>

                {/* Links Column */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-3 md:gap-4">
                    <h3 className="font-mono text-xs md:text-sm tracking-widest mb-2 md:mb-4 text-white/40">EXPLORE</h3>
                    <a href="/" className="font-body text-sm md:text-base hover:text-accent transition-colors w-fit">Home</a>
                    <a href="/menu" className="font-body text-sm md:text-base hover:text-accent transition-colors w-fit">Menu</a>
                    <a href="/contact" className="font-body text-sm md:text-base hover:text-accent transition-colors w-fit">Contact</a>
                    <a href="/payment" className="font-body text-sm md:text-base hover:text-accent transition-colors w-fit">Reservations</a>
                </div>

                {/* Contact Column */}
                <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col gap-3 md:gap-4">
                    <h3 className="font-mono text-xs md:text-sm tracking-widest mb-2 md:mb-4 text-white/40">VISIT</h3>
                    <p className="font-body text-white/80 text-sm md:text-base">
                        123 Azure Coastal Way<br />
                        Santorini, Greece<br />
                        84700
                    </p>
                    <a href="tel:+1234567890" className="font-body text-sm md:text-base hover:text-accent transition-colors w-fit">+1 (234) 567-890</a>
                    <a href="mailto:hello@fableflavors.com" className="font-body text-sm md:text-base hover:text-accent transition-colors w-fit break-all md:break-normal">hello@fableflavors.com</a>
                </div>

                {/* Hours Column */}
                <div className="col-span-2 md:col-span-3 lg:col-span-3 flex flex-col gap-3 md:gap-4">
                    <h3 className="font-mono text-xs md:text-sm tracking-widest mb-2 md:mb-4 text-white/40">HOURS</h3>
                    <div className="font-body text-white/80 text-sm md:text-base flex flex-col gap-2 w-full max-w-[280px] md:max-w-[220px]">
                        <div className="flex justify-between border-b border-white/10 pb-1">
                            <span>Mon - Thu</span>
                            <span>5PM - 11PM</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-1 text-accent">
                            <span>Fri - Sat</span>
                            <span>5PM - 12AM</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Sunday</span>
                            <span>4PM - 10PM</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 max-w-7xl mx-auto mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-mono text-[10px] md:text-xs tracking-widest text-white/40 text-center">
                    © {new Date().getFullYear()} FABLE & FLAVORS. ALL RIGHTS RESERVED.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="font-mono text-xs tracking-widest text-white/40 hover:text-white transition-colors">INSTAGRAM</a>
                    <a href="#" className="font-mono text-xs tracking-widest text-white/40 hover:text-white transition-colors">FACEBOOK</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
