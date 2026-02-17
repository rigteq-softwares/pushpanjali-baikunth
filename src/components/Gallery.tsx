"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { GALLERY_IMAGES } from "@/constants";

export default function Gallery() {
    const [displayCount, setDisplayCount] = useState(8);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const hasMore = displayCount < GALLERY_IMAGES.length;

    const showMore = () => {
        setDisplayCount(prev => Math.min(prev + 8, GALLERY_IMAGES.length));
    };

    const handleNext = useCallback(() => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % GALLERY_IMAGES.length);
        }
    }, [selectedIndex]);

    const handlePrev = useCallback(() => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
        }
    }, [selectedIndex]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (selectedIndex === null) return;
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "Escape") setSelectedIndex(null);
    }, [selectedIndex, handleNext, handlePrev]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [selectedIndex, handleKeyDown]);

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
                            <span className="italic font-normal">Gallery of Excellence</span>
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
                                onClick={() => setSelectedIndex(index)}
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

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <X size={32} strokeWidth={1.5} />
                        </motion.button>

                        <button
                            className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors z-50 p-2"
                            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                        >
                            <ChevronLeft size={48} strokeWidth={1} />
                        </button>

                        <button
                            className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors z-50 p-2"
                            onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        >
                            <ChevronRight size={48} strokeWidth={1} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-6xl aspect-[4/3] md:aspect-video flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={GALLERY_IMAGES[selectedIndex]}
                                alt="Gallery Lightbox"
                                fill
                                className="object-contain"
                                priority
                            />

                            {/* Caption/Counter */}
                            <div className="absolute -bottom-12 left-0 right-0 text-center text-white/60 text-xs tracking-widest uppercase">
                                {selectedIndex + 1} / {GALLERY_IMAGES.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}
