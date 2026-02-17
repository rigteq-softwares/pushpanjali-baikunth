"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";

export default function Contact() {
    return (
        <Section id="contact" className="bg-[#0A0F1C] py-16 md:py-32 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-600/5 to-transparent pointer-events-none" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">

                    {/* Left: Contact Info */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-1">
                                Contact
                            </h2>
                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-orange-600 leading-tight mb-4 md:mb-6">
                                with us
                            </h3>

                            <div className="h-1 w-12 md:w-16 bg-orange-600 mb-8 md:mb-10 rounded-full" />

                            <p className="text-slate-400 mb-8 md:mb-12 text-xs md:text-base leading-relaxed max-w-md">
                                Experience our premium facilities firsthand. Schedule a visit with our expert sales team
                                and discover why {siteConfig.shortName} is the perfect choice for your business.
                            </p>

                            <div className="space-y-10">
                                <div className="group">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Sales Team</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                                            <Phone size={18} />
                                        </div>
                                        <a href={`tel:${siteConfig.contact.phone.value}`} className="text-lg md:text-xl font-bold text-white hover:text-orange-600 transition-colors">
                                            {siteConfig.contact.phone.display} / 18
                                        </a>
                                    </div>
                                </div>

                                <div className="group">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Email Us</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                                            <Mail size={18} />
                                        </div>
                                        <a href={`mailto:${siteConfig.contact.email}`} className="text-lg md:text-xl font-bold text-white hover:text-orange-600 transition-colors">
                                            {siteConfig.contact.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="group">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Visit Office</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                                            <MapPin size={18} />
                                        </div>
                                        <p className="text-white text-sm md:text-base font-medium leading-relaxed max-w-xs">
                                            {siteConfig.contact.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Form Card */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="bg-white p-8 md:p-12 lg:p-14 rounded-[2.5rem] shadow-2xl relative"
                        >
                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.1em]">Your Name *</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 focus:border-orange-600 outline-none transition-all placeholder:text-slate-300 text-slate-900 font-medium"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.1em]">Email Address *</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 focus:border-orange-600 outline-none transition-all placeholder:text-slate-300 text-slate-900 font-medium"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.1em]">Phone Number *</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 focus:border-orange-600 outline-none transition-all placeholder:text-slate-300 text-slate-900 font-medium"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.1em]">Property Type</label>
                                    <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 focus:border-orange-600 outline-none transition-all text-slate-900 font-medium appearance-none cursor-pointer">
                                        <option>Retail Shop</option>
                                        <option>Office Space</option>
                                        <option>Showroom</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.1em]">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 focus:border-orange-600 outline-none transition-all placeholder:text-slate-300 text-slate-900 font-medium resize-none"
                                        placeholder="Tell us about your requirements..."
                                    />
                                </div>

                                <div className="flex items-start gap-3">
                                    <input type="checkbox" id="auth" className="mt-1 accent-orange-600" />
                                    <label htmlFor="auth" className="text-[10px] text-slate-400 leading-tight">
                                        I authorize {siteConfig.name} & its representatives to contact me with updates via Email/SMS/WhatsApp/Call.
                                        This will override DND/NDNC.
                                    </label>
                                </div>

                                <button className="w-full flex items-center justify-center gap-3 bg-orange-600 text-white py-4 rounded-xl font-bold text-sm tracking-widest hover:bg-orange-700 transition-all duration-300 shadow-xl shadow-orange-600/20 group">
                                    <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    SUBMIT ENQUIRY
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
