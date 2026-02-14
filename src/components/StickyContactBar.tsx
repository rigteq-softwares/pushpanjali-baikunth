"use client";

import { Phone, Send, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function StickyContactBar() {
    return (
        <div className="relative">
            {/* Floating WhatsApp Icon */}
            <Link
                href={`https://wa.me/${siteConfig.contact.phone.value.replace(/\D/g, "")}`}
                target="_blank"
                className="fixed bottom-24 right-6 md:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle size={32} className="fill-current" />
                <span className="absolute right-full mr-4 bg-white text-black text-xs font-bold px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    WhatsApp Us
                </span>
            </Link>

            {/* Sticky Lead Bar */}
            <div className="fixed bottom-0 left-0 w-full bg-[#F3F4F6] border-t border-gray-200 py-3 md:py-6 z-[60] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8">

                        {/* Left: Schedule Visit */}
                        <div className="flex items-center gap-3 md:gap-5 w-full lg:w-auto">
                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                                <Phone size={16} className="md:w-6 md:h-6" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-[9px] md:text-xs font-bold text-slate-800 tracking-wider">
                                    SCHEDULE A SITE VISIT
                                </h3>
                                <p className="hidden md:block text-[10px] text-slate-500 font-medium whitespace-nowrap">
                                    Get Instant Callback
                                </p>
                            </div>
                        </div>

                        {/* Center: Lead Form */}
                        <form className="flex flex-col sm:flex-row items-stretch gap-2 md:gap-4 w-full lg:max-w-2xl" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 md:py-3 text-[11px] md:text-sm focus:outline-none focus:border-orange-500 transition-colors"
                                />
                            </div>
                            <div className="flex-1">
                                <input
                                    type="tel"
                                    placeholder="+91 Phone"
                                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 md:py-3 text-[11px] md:text-sm focus:outline-none focus:border-orange-500 transition-colors"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-orange-600 text-white font-bold px-6 md:px-8 py-2 md:py-3 rounded flex items-center justify-center gap-2 md:gap-3 hover:bg-orange-700 transition-colors group shadow-lg shadow-orange-600/20"
                            >
                                <Send size={14} className="fill-current md:w-[18px] md:h-[18px]" />
                                <span className="uppercase text-[9px] md:text-xs tracking-widest">Enquire Now</span>
                            </button>
                        </form>

                    </div>
                </Container>
            </div>
        </div>
    );
}
