import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Hero
            gsap.from('.contact-hero-text', {
                y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2
            });

            // Grid items
            gsap.from('.info-card', {
                y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: "power2.out",
                scrollTrigger: {
                    trigger: '.info-grid',
                    start: "top 80%",
                }
            });

            // Form
            gsap.from('.contact-form', {
                x: 40, opacity: 0, duration: 1, ease: "power2.out",
                scrollTrigger: {
                    trigger: '.info-grid',
                    start: "top 80%",
                }
            });

            // Map & CTA
            gsap.from('.map-cta', {
                y: 40, opacity: 0, duration: 1, stagger: 0.2, ease: "power2.out",
                scrollTrigger: {
                    trigger: '.map-cta',
                    start: "top 85%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-bg text-textPrimary">

            {/* Hero */}
            <section className="relative w-full h-[45vh] md:h-[60vh] flex items-end pb-10 md:pb-16 px-4 md:px-12 overflow-hidden bg-bg">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=2940&auto=format&fit=crop"
                        alt="Restaurant exterior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-bg"></div>
                </div>
                <div className="relative z-10 max-w-4xl text-textPrimary">
                    <h1 className="contact-hero-text font-display text-3xl md:text-7xl mb-3 md:mb-4 text-white">Come As You Are.</h1>
                    <p className="contact-hero-text font-subheading text-base md:text-xl italic text-white/80">We'd love to hear from you.</p>
                </div>
            </section>

            {/* Main Grid */}
            <section className="info-grid max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">

                {/* Info Column */}
                <div className="flex flex-col gap-4 md:gap-6">
                    <h2 className="font-script text-3xl md:text-4xl text-accent mb-2 md:mb-4">Get in Touch</h2>

                    <div className="info-card flex gap-4 md:gap-6 items-start bg-surface p-5 md:p-8 rounded-2xl md:rounded-3xl premium-shadow">
                        <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                        <div>
                            <h3 className="font-mono text-sm tracking-widest uppercase mb-2">Location</h3>
                            <p className="font-body text-textPrimary/80">123 Azure Coastal Way<br />Santorini, Greece, 84700</p>
                        </div>
                    </div>

                    <div className="info-card flex gap-4 md:gap-6 items-start bg-surface p-5 md:p-8 rounded-2xl md:rounded-3xl premium-shadow">
                        <Clock className="text-accent mt-1 flex-shrink-0" size={24} />
                        <div className="w-full">
                            <h3 className="font-mono text-sm tracking-widest uppercase mb-2">Hours</h3>
                            <div className="font-mono text-sm text-textPrimary/80 space-y-2 w-full max-w-[250px]">
                                <p className="flex justify-between border-b border-textPrimary/10 pb-1"><span>Mon - Thu</span> <span>17:00 - 23:00</span></p>
                                <p className="flex justify-between border-b border-textPrimary/10 pb-1 text-accent"><span>Fri - Sat</span> <span>17:00 - 00:00</span></p>
                                <p className="flex justify-between"><span>Sun</span> <span>16:00 - 22:00</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="info-card flex gap-4 md:gap-6 items-start bg-surface p-5 md:p-8 rounded-2xl md:rounded-3xl premium-shadow">
                        <Phone className="text-accent mt-1 flex-shrink-0" size={24} />
                        <div>
                            <h3 className="font-mono text-sm tracking-widest uppercase mb-2">Phone</h3>
                            <a href="tel:+1234567890" className="font-body text-textPrimary/80 hover:text-accent transition-colors">+1 (234) 567-890</a>
                        </div>
                    </div>

                </div>

                {/* Form Column */}
                <div className="contact-form bg-surface p-6 md:p-12 rounded-2xl md:rounded-[2.5rem] premium-shadow h-fit">
                    <h3 className="font-display italic text-2xl md:text-3xl mb-6 md:mb-8">Send an Inquiry</h3>
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-mono text-xs tracking-widest text-subtle ml-2" htmlFor="name">NAME</label>
                            <input name="name" id="name" type="text" className="w-full bg-bg p-4 rounded-xl border border-transparent focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/20 font-body transition-all" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-mono text-xs tracking-widest text-subtle ml-2" htmlFor="email">EMAIL</label>
                            <input name="email" id="email" type="email" className="w-full bg-bg p-4 rounded-xl border border-transparent focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/20 font-body transition-all" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-mono text-xs tracking-widest text-subtle ml-2" htmlFor="message">MESSAGE</label>
                            <textarea name="message" id="message" rows="4" className="w-full bg-bg p-4 rounded-xl border border-transparent focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/20 font-body transition-all resize-none"></textarea>
                        </div>
                        <button type="button" className="magnetic-btn mt-4 bg-accent text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase premium-shadow w-full">
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>

            </section>

            {/* Map Placeholder */}
            <section className="map-cta max-w-7xl mx-auto px-4 md:px-12 pb-12 md:pb-24">
                <div className="w-full h-64 md:h-96 bg-surface rounded-2xl md:rounded-[2.5rem] flex flex-col items-center justify-center p-6 md:p-8 text-center premium-inner-glow border border-white/40 group overflow-hidden relative">
                    <div className="absolute inset-0 z-0 opacity-20 transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }}></div>
                    <div className="relative z-10 w-16 h-16 bg-bg rounded-full flex items-center justify-center mb-4 premium-shadow group-hover:-translate-y-2 transition-transform duration-500">
                        <MapPin className="text-accent" size={28} />
                    </div>
                    <h3 className="relative z-10 font-display text-2xl mb-2">Find Us on the Coast</h3>
                    <p className="relative z-10 font-mono text-sm tracking-widest text-subtle">123 AZURE COASTAL WAY, SANTORINI</p>
                </div>
            </section>

            {/* Private Events CTA */}
            <section className="map-cta bg-textPrimary text-bg py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'var(--noise-url)' }}></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="font-display italic text-3xl md:text-6xl mb-4 md:mb-6">Celebrate with us.</h2>
                    <p className="font-body text-base md:text-xl text-white/70 max-w-2xl mx-auto mb-8 md:mb-12">
                        Private dining for 8–60 guests. Perfect for intimate wedding receptions, milestone anniversaries, and corporate retreats.
                    </p>
                    <a href="/contact" className="magnetic-btn inline-block bg-accent text-white px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase premium-shadow">
                        <span>Enquire Now</span>
                    </a>
                </div>
            </section>

        </div>
    );
};

export default Contact;
