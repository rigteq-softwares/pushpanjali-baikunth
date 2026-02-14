"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function About() {
    return (
        <Section id="about" className="bg-white overflow-hidden py-16 md:py-32">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="order-2 lg:order-1"
                    >
                        <div className="flex items-center gap-3 mb-4 md:mb-6">
                            <div className="h-[2px] w-10 md:w-12 bg-[#EA580C]" />
                            <h4 className="text-[#EA580C] tracking-[0.3em] uppercase text-[10px] md:text-xs font-extrabold">About the Legacy</h4>
                        </div>

                        <h2 className="text-[#1a2b3c] font-serif text-3xl md:text-5xl lg:text-7xl mb-6 md:mb-8 leading-[1.2] lg:leading-[1.1] tracking-tight">
                            A Sanctuary of <br />
                            <span className="text-[#EA580C] italic font-medium">Elegance & Style</span>
                        </h2>

                        <div className="space-y-8 text-lg text-[#1a2b3c]/70 font-light leading-relaxed text-balance max-w-xl">
                            <p>
                                <strong className="text-[#1a2b3c] font-semibold">{siteConfig.shortName}</strong> represents a paradigm shift in urban living. Nestled in a prime location, it harmonizes the tranquility of nature with the pulse of modern architecture.
                            </p>
                            <p>
                                Every detail is meticulously curated for those who seek more than just a residence. From the sculptural entrance to the expansive vistas, we offer an environment crafted for the extraordinary.
                            </p>
                        </div>

                        <div className="pt-12">
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-3 border-2 border-[#1a2b3c] px-10 py-4 font-bold text-sm tracking-[0.2em] text-[#1a2b3c] hover:bg-[#1a2b3c] hover:text-white transition-all duration-500 group"
                            >
                                LEARN MORE
                                <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="relative order-1 lg:order-2 group"
                    >
                        {/* Architectural Frame Decoration */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#EA580C]/30 -z-10" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#1a2b3c]/10 -z-10" />

                        <div className="relative aspect-[4/5] w-full overflow-hidden shadow-[30px_30px_60px_-15px_rgba(0,0,0,0.1)] grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0">
                            <Image
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90"
                                alt={`About ${siteConfig.name}`}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-neutral-900/10 transition-opacity duration-500 group-hover:opacity-0" />
                        </div>

                        {/* Floating Metadata */}
                        <div className="absolute bottom-10 -left-10 bg-white p-8 shadow-2xl hidden md:block">
                            <div className="text-[#EA580C] font-serif text-3xl font-bold italic mb-1">20+</div>
                            <div className="text-[10px] tracking-[0.3em] font-extrabold text-[#1a2b3c] uppercase">Years of Excellence</div>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
}
