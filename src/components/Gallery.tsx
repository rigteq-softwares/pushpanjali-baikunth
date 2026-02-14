"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { GALLERY_IMAGES } from "@/constants";

export default function Gallery() {
    const [displayCount, setDisplayCount] = useState(8);
    const hasMore = displayCount < GALLERY_IMAGES.length;

    const showMore = () => {
        setDisplayCount(prev => Math.min(prev + 8, GALLERY_IMAGES.length));
    };

    return (
        <Section id="gallery" className="bg-white py-24 md:py-32">
            <Container>
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-[2px] w-8 bg-[#EA580C]" />
                            <h4 className="text-[#EA580C] tracking-[0.3em] uppercase text-[10px] font-extrabold">Visual Experience</h4>
                            <div className="h-[2px] w-8 bg-[#EA580C]" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#1a2b3c] mb-8 tracking-tight">
                            Gallery of <span className="italic font-normal">Excellence</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {GALLERY_IMAGES.slice(0, displayCount).map((src, index) => (
                            <motion.div
                                key={src}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
                                className="relative aspect-[4/3] overflow-hidden group cursor-pointer shadow-lg border border-neutral-100 bg-neutral-50"
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                />
                                {/* Sophisticated Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                                {/* View Label */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="text-white text-[10px] tracking-[0.4em] font-extrabold uppercase bg-[#EA580C] px-6 py-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        View Space
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {hasMore && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={showMore}
                            className="inline-flex items-center gap-4 bg-[#1a2b3c] text-white px-10 py-4 font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#EA580C] transition-all duration-500 group shadow-xl"
                        >
                            <span>Show More Images</span>
                            <div className="w-8 h-[1px] bg-white/30 group-hover:bg-white transition-colors" />
                        </button>
                    </div>
                )}
            </Container>
        </Section>
    );
}
