"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
    return (
        <footer className="bg-[#050812] text-white py-16 md:py-24 border-t border-white/5">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

                    {/* Column 1: Brand & Socials */}
                    <div className="space-y-8">
                        <Link href="/" className="inline-block group">
                            <div className="flex flex-col leading-none">
                                <span className="text-3xl font-serif font-bold tracking-tight text-white mb-1">
                                    {siteConfig.logo.text}
                                </span>
                                <div className="flex items-center gap-2">
                                    <div className="h-[1px] w-4 bg-orange-600" />
                                    <span className="text-[0.6rem] tracking-[0.3em] uppercase text-orange-600 font-bold">
                                        {siteConfig.logo.subtext}
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Synonymous with quality and trust in the Ghaziabad real estate market.
                            Creating landmarks that redefine commercial and residential living.
                        </p>
                        <div className="flex gap-3 pt-2">
                            {[
                                { Icon: Facebook, href: siteConfig.social.facebook },
                                { Icon: Instagram, href: siteConfig.social.instagram },
                                { Icon: Linkedin, href: siteConfig.social.linkedin },
                                { Icon: Youtube, href: siteConfig.social.youtube } // Youtube not in config, keeping #
                            ].map(({ Icon, href }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    target={href !== "#" ? "_blank" : undefined}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-orange-600 hover:border-orange-600 transition-all duration-300"
                                >
                                    <Icon size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "About Project", "Floor Plans", "Gallery", "Amenities", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-slate-400 hover:text-orange-600 transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Corporate Office */}
                    <div>
                        <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-8">Corporate Office</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <MapPin size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                                <span className="text-slate-400 text-sm leading-relaxed">
                                    {(siteConfig.contact as any).corporateAddress || siteConfig.contact.address}
                                </span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Phone size={18} className="text-orange-600 flex-shrink-0" />
                                <div className="flex flex-col text-slate-400 text-sm">
                                    <span>+91 9220034414</span>
                                    <span>0120 2989566</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Mail size={18} className="text-orange-600 flex-shrink-0" />
                                <span className="text-slate-400 text-sm">info@edistonerealestates.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Sales Team */}
                    <div>
                        <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-8">Sales Team</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <Phone size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                                <div className="flex flex-col text-slate-400 text-sm">
                                    <span>{siteConfig.contact.phone.display}</span>
                                    <span>{siteConfig.contact.altPhone?.display || "+91 9220034418"}</span>
                                </div>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Mail size={18} className="text-orange-600 flex-shrink-0" />
                                <span className="text-slate-400 text-sm">{siteConfig.contact.email}</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-slate-500 font-medium">
                        &copy; {new Date().getFullYear()} {siteConfig.legal.copyright}. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8 text-[10px] text-slate-500 font-bold">
                        <Link href="#" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
                        <Link href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
