"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { AMENITIES } from "@/constants";

export default function Amenities() {
    return (
        <Section id="amenities" className="bg-[#f8fafc] py-24 md:py-32">
            <Container>
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-[2px] w-8 bg-[#EA580C]" />
                            <h4 className="text-[#EA580C] tracking-[0.3em] uppercase text-[10px] font-extrabold">Lifestyle</h4>
                            <div className="h-[2px] w-8 bg-[#EA580C]" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#1a2b3c] mb-8 tracking-tight">
                            <span className="italic font-normal">World-Class Amenities</span>
                        </h2>
                        <p className="text-[#1a2b3c]/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                            A curated selection of experiences designed to elevate every moment of your daily life.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-t border-l border-[#1a2b3c]/5">
                    {AMENITIES.map((item, index) => {
                        const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Zap;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.03 }}
                                className="bg-white p-8 md:p-10 border-r border-b border-[#1a2b3c]/5 group hover:bg-[#1a2b3c] transition-all duration-700 ease-in-out"
                            >
                                <div className="w-10 h-10 flex items-center justify-center mb-6 text-[#EA580C] group-hover:text-white transition-colors duration-500">
                                    <IconComponent size={32} strokeWidth={1} />
                                </div>
                                <h3 className={`text-base md:text-lg font-serif mb-2 group-hover:text-white transition-colors tracking-tight font-bold ${item.title.includes('COMING SOON') || item.title.includes('UPCOMING') ? 'text-[#EA580C]' : 'text-[#1a2b3c]'}`}>
                                    {item.title}
                                </h3>
                                {(item as any).description && (
                                    <p className="text-[#1a2b3c]/60 group-hover:text-white/70 leading-relaxed font-light text-sm transition-colors">
                                        {(item as any).description}
                                    </p>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
