"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";
import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function Location() {
    const highlights = [
        {
            icon: <MapPin className="w-5 h-5 text-orange-600" />,
            title: "NH-24 Highway",
            subtitle: "Direct access"
        },
        {
            number: "10",
            title: "Mins to Metro",
            subtitle: "Shaheed Sthal"
        },
        {
            number: "15",
            title: "Mins to Delhi",
            subtitle: "Via NH-24 Express"
        },
        {
            number: "30",
            title: "Mins to Noida",
            subtitle: "Yamuna Expressway"
        }
    ];

    return (
        <Section id="location" className="bg-slate-50/50 py-16 md:py-32">
            <Container>
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-3 md:mb-4"
                    >
                        Project Location
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-12 md:w-16 bg-orange-600 mx-auto mb-6 md:mb-8 rounded-full"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-slate-600 text-xs md:text-base leading-relaxed"
                    >
                        Situated in the heart of Ghaziabad, close to NH-24. Ideally located for seamless
                        business connectivity.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Map Card */}
                    <div className="lg:col-span-7 relative group">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] md:aspect-[16/10] relative"
                        >
                            <iframe
                                src={siteConfig.contact.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location Map"
                                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Get Directions Button */}
                            <div className="absolute bottom-6 right-6">
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.contact.address)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl hover:bg-orange-600 hover:text-white transition-all duration-300 group/btn"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Get Directions</span>
                                        <span className="text-sm font-bold">Open in Maps</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center group-hover/btn:bg-orange-500 transition-colors">
                                        <Navigation className="w-5 h-5 text-orange-600 group-hover/btn:text-white transform group-hover/btn:rotate-12 transition-all" />
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Connectivity Highlights */}
                    <div className="lg:col-span-5 h-full">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100 h-full flex flex-col justify-center"
                        >
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-10">
                                Connectivity Highlights
                            </h3>

                            <div className="space-y-8">
                                {highlights.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-6 group">
                                        <div className="flex-shrink-0 w-15 h-15 rounded-3xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-600 transition-all duration-300">
                                            {item.icon ? (
                                                <div className="group-hover:text-white transition-colors">
                                                    {item.icon}
                                                </div>
                                            ) : (
                                                <span className="text-orange-600 font-bold text-lg group-hover:text-white transition-colors">
                                                    {item.number}
                                                </span>
                                            )}
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors text-lg">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-500 text-sm">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
