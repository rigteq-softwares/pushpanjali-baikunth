"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Mail, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";
import { NAV_LINKS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const topNavLinks = [
        { label: "About Us", href: "#about" },
        { label: "Properties", href: "/properties" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full shadow-sm">
            {/* Top Black Bar */}
            <div className="bg-black text-white h-8 md:h-12 flex items-center">
                <div className="w-full px-4 md:px-8">
                    <div className="flex justify-between items-center w-full">
                        {/* More Far Left Alignment: Brand Subtext */}
                        <div className="flex-none">
                            <h2 className="text-[9px] md:text-sm font-bold tracking-[0.15em] md:tracking-[0.2em] text-white whitespace-nowrap">
                                RADHE KRISHNA !
                            </h2>
                        </div>

                        {/* More Far Right Alignment: Info & Links */}
                        <div className="flex items-center gap-2 md:gap-8">
                            {/* Nav Links Group */}
                            <nav className="hidden lg:flex items-center gap-4 text-[9px] font-bold uppercase tracking-widest text-white/90">
                                <Link href="#about" className="hover:text-orange-500 transition-colors">About Us</Link>
                                <span className="text-white/20">|</span>
                                <Link href="#" className="hover:text-orange-500 transition-colors">Properties</Link>
                                <span className="text-white/20">|</span>
                                <Link href="#contact" className="hover:text-orange-500 transition-colors">Contact</Link>
                            </nav>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3 md:gap-5">
                                <Link href={siteConfig.social.facebook} target="_blank" className="text-white hover:text-orange-500 transition-colors">
                                    <Facebook size={10} strokeWidth={2.5} className="md:w-3 md:h-3" />
                                </Link>
                                <Link href={siteConfig.social.instagram} target="_blank" className="text-white hover:text-orange-500 transition-colors">
                                    <Instagram size={10} strokeWidth={2.5} className="md:w-3 md:h-3" />
                                </Link>
                                <Link href={`mailto:${siteConfig.contact.email}`} className="text-white hover:text-orange-500 transition-colors">
                                    <Mail size={10} strokeWidth={2.5} className="md:w-3 md:h-3" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Primary Bar (Orange) */}
            <div className="bg-[#EA580C] text-white h-16 md:h-20 flex items-center shadow-lg">
                <Container className="max-w-none px-4 md:px-10 lg:px-16">
                    <div className="grid grid-cols-2 lg:grid-cols-3 items-center w-full">
                        {/* Logo: EDISTONE REAL ESTATES - Far Left */}
                        <div className="flex justify-start">
                            <Link href="/" className="group flex flex-col leading-none">
                                <span className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-white uppercase">
                                    EDISTONE
                                </span>
                                <span className="text-[0.6rem] md:text-[0.7rem] tracking-[0.3em] uppercase text-white/80 font-bold mt-1">
                                    REAL ESTATES
                                </span>
                            </Link>
                        </div>

                        {/* Main Navigation - Perfectly Centered */}
                        <nav className="hidden lg:flex items-center justify-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em]">
                            {NAV_LINKS.filter(link => ["About", "Amenities", "Floor Plan", "Gallery", "Location", "Contact"].includes(link.label)).map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="hover:text-white/70 transition-colors relative whitespace-nowrap"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Right: CTA & Mobile Toggle - Far Right */}
                        <div className="flex items-center justify-end gap-6">
                            <Link
                                href={`tel:${siteConfig.contact.phone.value}`}
                                className="hidden md:flex items-center gap-3 bg-white px-6 py-3 font-bold text-xs tracking-[0.1em] text-[#EA580C] hover:bg-neutral-100 transition-all duration-300 shadow-xl"
                            >
                                <Phone size={14} className="fill-current" />
                                <span>{siteConfig.contact.phone.display}</span>
                            </Link>

                            <button
                                className="lg:hidden p-2 text-white hover:bg-white/10 transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-neutral-100 overflow-hidden shadow-2xl"
                    >
                        <div className="px-6 py-10 flex flex-col gap-8">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-lg font-bold tracking-widest uppercase text-[#1a2b3c] hover:text-[#EA580C] transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="pt-8 border-t border-neutral-100 flex flex-col gap-6">
                                <Link
                                    href={`tel:${siteConfig.contact.phone.value}`}
                                    className="flex items-center justify-between bg-[#EA580C] text-white px-6 py-4 font-bold text-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <Phone size={20} fill="currentColor" />
                                        <span>{siteConfig.contact.phone.display}</span>
                                    </div>
                                    <ArrowUpRight size={20} />
                                </Link>

                                <div className="flex gap-8 text-[#1a2b3c]/60 justify-center">
                                    <Link href={siteConfig.social.facebook} target="_blank" className="hover:text-[#EA580C]">
                                        <Facebook size={24} />
                                    </Link>
                                    <Link href={siteConfig.social.instagram} target="_blank" className="hover:text-[#EA580C]">
                                        <Instagram size={24} />
                                    </Link>
                                    <Link href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#EA580C]">
                                        <Mail size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
