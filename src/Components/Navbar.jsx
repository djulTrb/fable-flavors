import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // The Contact Hero has a dark background at the absolute top.
    // Home, Menu, and Payment all have light backgrounds entirely at the top now.
    const isDarkTop = location.pathname === '/contact';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine text color classes dynamically
    // If we are scrolled, always use dark text (text-textPrimary).
    // If we are at the top, check if it's a Dark Top page (use white) or Light Top page (use dark).
    const textColor = isScrolled ? 'text-textPrimary' : (isDarkTop ? 'text-white' : 'text-textPrimary');
    const textMuted = isScrolled ? 'text-textPrimary/80' : (isDarkTop ? 'text-white/80' : 'text-textPrimary/80');

    return (
        <nav className={`fixed w-full z-50 transition-all duration-700 flex justify-center px-4 ${isScrolled ? 'top-4 md:top-6' : 'top-6 md:top-8'}`}>

            {/* The Container - Animates from wide transparent to pill shape universally across all pages */}
            <div className={`relative flex items-center justify-between transition-all duration-700 w-full ${isScrolled ? 'max-w-4xl bg-surface/95 backdrop-blur-md shadow-lg py-3 px-8 rounded-full border border-textPrimary/5' : 'max-w-7xl bg-transparent py-4 px-4'}`}>

                {/* Logo */}
                <Link to="/" className={`font-display italic z-10 transition-colors duration-500 ${textColor} ${isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}>
                    <span className="md:hidden">F&F</span>
                    <span className="hidden md:inline">Fable & Flavors</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    <Link to="/" className={`font-mono text-xs tracking-widest uppercase transition-colors hover:text-accent ${textMuted}`}>Home</Link>
                    <Link to="/menu" className={`font-mono text-xs tracking-widest uppercase transition-colors hover:text-accent ${textMuted}`}>Menu</Link>
                    <Link to="/contact" className={`font-mono text-xs tracking-widest uppercase transition-colors hover:text-accent ${textMuted}`}>Contact</Link>

                    <Link to="/payment" className={`magnetic-btn px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${isScrolled ? 'bg-textPrimary text-surface hover:bg-accent hover:text-white' : (isDarkTop ? 'bg-white text-textPrimary hover:bg-accent hover:text-white' : 'bg-textPrimary text-surface hover:bg-accent hover:text-white')}`}>
                        <span>Reserve</span>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-10 p-2 -mr-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={textColor} size={24} />
                    ) : (
                        <Menu className={textColor} size={24} />
                    )}
                </button>

            </div>

            {/* Mobile Drawer Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}>
            </div>

            {/* Mobile Drawer Menu — Premium Styled */}
            <div className={`fixed top-0 right-0 h-[100dvh] w-4/5 max-w-sm bg-surface z-50 md:hidden flex flex-col shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Noise texture overlay */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'var(--noise-url)' }}></div>

                {/* Accent top strip */}
                <div className="w-full h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent"></div>

                {/* Nav links */}
                <div className="relative z-10 flex flex-col gap-0 px-8 mt-4">
                    {[
                        { to: '/', label: 'Home', num: '01' },
                        { to: '/menu', label: 'Menu', num: '02' },
                        { to: '/contact', label: 'Contact', num: '03' },
                    ].map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="group flex items-center gap-5 py-5 border-b border-textPrimary/5 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="font-mono text-[10px] tracking-widest text-accent/60 group-hover:text-accent transition-colors">{item.num}</span>
                            <span className="font-display italic text-3xl text-textPrimary group-hover:text-accent transition-colors">{item.label}</span>
                            <span className="ml-auto w-6 h-px bg-textPrimary/10 group-hover:bg-accent group-hover:w-10 transition-all duration-300"></span>
                        </Link>
                    ))}
                </div>

                {/* Bottom area */}
                <div className="relative z-10 mt-auto px-8 pb-8">
                    {/* Hours mini */}
                    <div className="flex items-center gap-3 mb-6 text-textPrimary/40">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="font-mono text-[10px] tracking-widest uppercase">Open 5PM – 11PM</span>
                    </div>

                    <Link to="/payment" className="block w-full bg-textPrimary text-surface text-center py-4 rounded-full font-mono text-xs tracking-widest uppercase font-bold hover:bg-accent hover:text-white transition-colors premium-shadow mb-6" onClick={() => setIsMobileMenuOpen(false)}>
                        Reserve a Table
                    </Link>

                    <div className="flex justify-center gap-8 pt-4 border-t border-textPrimary/5">
                        <a href="#" className="font-mono text-[10px] tracking-widest text-textPrimary/30 hover:text-accent transition-colors">INSTAGRAM</a>
                        <a href="#" className="font-mono text-[10px] tracking-widest text-textPrimary/30 hover:text-accent transition-colors">FACEBOOK</a>
                    </div>
                </div>

            </div>

        </nav>
    );
};

export default Navbar;
