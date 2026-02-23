import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Shield, Lock, CreditCard, XCircle, Plus, Minus } from 'lucide-react';

const Payment = () => {
    const containerRef = useRef(null);
    const [cardNumber, setCardNumber] = useState('');

    // Interactive Menu Add-ons for Reservation
    const [addons, setAddons] = useState([
        { id: 1, name: "Window Seat Guarantee", price: 20, qty: 0 },
        { id: 2, name: "Celebration Cake (For 2)", price: 45, qty: 0 },
        { id: 3, name: "The Pearl Elixir (Welcome Mocktail)", price: 16, qty: 0 }
    ]);

    const updateQty = (id, delta) => {
        setAddons(addons.map(item => {
            if (item.id === id) {
                const newQty = Math.max(0, item.qty + delta);
                return { ...item, qty: newQty };
            }
            return item;
        }));
    };

    const selectedAddons = addons.filter(a => a.qty > 0);
    const addOnsTotal = selectedAddons.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const deposit = 50; // Base Reservation deposit fee
    const total = deposit + addOnsTotal;

    // Simple frontend logic for card icon display
    const getCardIcon = () => {
        if (cardNumber.startsWith('4')) return 'Visa';
        if (cardNumber.startsWith('5')) return 'Mastercard';
        if (cardNumber.startsWith('3')) return 'Amex';
        return null;
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.payment-anim', {
                y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: "power2.out", delay: 0.1
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="pt-32 pb-40 px-6 md:px-12 min-h-screen bg-bg text-textPrimary">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16 payment-anim">
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">Secure Your Table</h1>
                    <p className="font-subheading italic text-xl text-subtle max-w-2xl mx-auto">
                        Reserve your experience today. Customize your evening by adding a premium table preference or a welcome drink.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

                    {/* Left Column: Enhancements & Summary (60%) */}
                    <div className="lg:col-span-3 payment-anim flex flex-col gap-8">

                        {/* Interactive Add-ons */}
                        <div className="bg-surface p-8 md:p-10 rounded-[2.5rem] premium-shadow">
                            <h2 className="font-display text-2xl mb-6">Enhance Your Evening</h2>
                            <div className="flex flex-col gap-4">
                                {addons.map(item => (
                                    <div key={item.id} className="flex justify-between items-center bg-bg p-4 rounded-2xl border border-textPrimary/5">
                                        <div>
                                            <h3 className="font-body text-base md:text-lg font-semibold">{item.name}</h3>
                                            <p className="font-mono text-sm text-accent">+${item.price}</p>
                                        </div>
                                        <div className="flex items-center gap-4 bg-surface rounded-full px-2 py-1">
                                            <button onClick={() => updateQty(item.id, -1)} className="p-1 text-textPrimary/60 hover:text-textPrimary transition-colors"><Minus size={16} /></button>
                                            <span className="font-mono w-4 text-center">{item.qty}</span>
                                            <button onClick={() => updateQty(item.id, 1)} className="p-1 text-textPrimary/60 hover:text-textPrimary transition-colors"><Plus size={16} /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-surface p-8 md:p-10 rounded-[2.5rem] premium-shadow">
                            <h2 className="font-display text-2xl mb-8 border-b border-textPrimary/10 pb-4">Reservation Summary</h2>

                            <div className="flex flex-col gap-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-body text-lg">Table Deposit (2 Guests)</h3>
                                        <p className="font-mono text-xs text-subtle">Applied to final bill</p>
                                    </div>
                                    <span className="font-mono text-lg">${deposit}</span>
                                </div>

                                {selectedAddons.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center text-textPrimary/80">
                                        <div className="flex gap-2">
                                            <span className="font-mono text-sm text-subtle">{item.qty}x</span>
                                            <span className="font-body">{item.name}</span>
                                        </div>
                                        <span className="font-mono">${item.price * item.qty}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-textPrimary/10 pt-6">
                                <div className="flex justify-between items-center pt-2 text-accent font-mono text-xl md:text-2xl mt-2">
                                    <span className="text-textPrimary font-body font-semibold">Total Due Today</span>
                                    <span>${total}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Payment Form (40%) */}
                    <div className="lg:col-span-2 payment-anim">
                        <div className="bg-surface p-8 md:p-10 rounded-[2.5rem] premium-shadow h-full flex flex-col">

                            <form className="flex flex-col gap-6 flex-1">
                                <div className="flex flex-col gap-2">
                                    <label className="font-mono text-xs tracking-widest text-subtle ml-2">NAME ON CARD</label>
                                    <input type="text" placeholder="Jane Doe" className="w-full bg-bg p-4 rounded-xl border border-transparent focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/20 font-body transition-all" />
                                </div>

                                <div className="flex flex-col gap-2 relative">
                                    <label className="font-mono text-xs tracking-widest text-subtle ml-2">CARD NUMBER</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="0000 0000 0000 0000"
                                            maxLength="19"
                                            value={cardNumber}
                                            onChange={(e) => setCardNumber(e.target.value)}
                                            className="w-full bg-bg p-4 pr-12 rounded-xl border border-transparent focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/20 font-body transition-all font-mono"
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-subtle font-mono text-xs font-bold">
                                            {getCardIcon() || <CreditCard size={20} />}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label className="font-mono text-xs tracking-widest text-subtle ml-2">EXPIRY</label>
                                        <input type="text" placeholder="MM/YY" maxLength="5" className="w-full bg-bg p-4 rounded-xl border border-transparent focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/20 font-body transition-all font-mono" />
                                    </div>
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label className="font-mono text-xs tracking-widest text-subtle ml-2">CVV</label>
                                        <input type="text" placeholder="123" maxLength="4" className="w-full bg-bg p-4 rounded-xl border border-transparent focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/20 font-body transition-all font-mono" />
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <button type="button" className="magnetic-btn w-full bg-accent text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase premium-shadow flex items-center justify-center gap-3">
                                        <Lock size={16} />
                                        <span>Pay Securely</span>
                                    </button>
                                    <p className="text-center font-mono text-[10px] text-subtle tracking-widest mt-4 flex justify-center items-center gap-2">
                                        <Shield size={12} />
                                        256-BIT SSL. DATA NEVER LEAVES THIS SESSION.
                                    </p>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>

                {/* Trust Indicators */}
                <div className="mt-20 flex flex-wrap justify-center gap-6 payment-anim">
                    <div className="flex items-center gap-3 bg-surface px-6 py-3 rounded-full border border-textPrimary/5">
                        <Shield size={16} className="text-accent" />
                        <span className="font-mono text-xs tracking-widest text-textPrimary/80">ENCRYPTED SESSION</span>
                    </div>
                    <div className="flex items-center gap-3 bg-surface px-6 py-3 rounded-full border border-textPrimary/5">
                        <Lock size={16} className="text-accent" />
                        <span className="font-mono text-xs tracking-widest text-textPrimary/80">NO CARD STORED</span>
                    </div>
                    <div className="flex items-center gap-3 bg-surface px-6 py-3 rounded-full border border-textPrimary/5">
                        <XCircle size={16} className="text-accent" />
                        <span className="font-mono text-xs tracking-widest text-textPrimary/80">CANCEL ANYTIME</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payment;
