"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";

export default function Hero() {
    return (
        <section id="home" className="bg-white py-8 md:py-20 lg:py-24">
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Main Content Area */}
                    <div className="flex-1">
                        <div className="text-center mb-6 md:mb-8">
                            <span className="text-[50px] md:text-xs tracking-[0.5em] font-medium text-gray-400 uppercase">Edistone</span>
                            <h1 className="text-3xl md:text-5xl font-serif text-gray-800 mt-1 mb-3 md:mt-2 md:mb-4">Apartment</h1>
                            <div className="w-10 md:w-12 h-[1px] bg-gray-200 mx-auto mb-4" />
                            <p className="text-[8px] md:text-[10px] tracking-widest text-gray-400 uppercase">
                            </p>
                        </div>

                        {/* Image Container with Badge */}
                        <div className="relative group overflow-hidden shadow-xl md:shadow-2xl border border-gray-100">
                            {/* Date Badge */}


                            <Image
                                src="/Hero.jpg"
                                alt="Edistone Apartment"
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                        </div>

                        {/* Caption Content */}
                        <div className="mt-8 md:mt-12 text-left space-y-4 md:space-y-6 max-w-4xl">
                            <h3 className="text-lg md:text-2xl text-[#1a2b3c] font-serif font-bold leading-snug">
                                Edistone Apartment (Studio/1 Bhk Apartments)
                            </h3>
                            <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed font-light text-sm md:text-base">
                                <p>
                                    Edistone promises you a feeling of contentment & serenity. Planned meticulously for a wonderful living
                                    experience feel of full freshness with beautiful surroundings. Where each floor & every flat is a blend of design
                                    & aesthetics, created carefully to cater the needs of every individual with marvelous attention to minute details.
                                </p>
                                <p>
                                    Edistone ensures an abode showered with blessings. Edistone Apartments ( G+3 ) will have Elevator
                                    Facilities keeping in view the comfort for its residents.
                                </p>
                            </div>

                            {/* Assured Rental Section */}
                            <div className="pt-6 md:pt-8 border-t border-neutral-100 mt-8 md:mt-10">
                                <h4 className="text-lg md:text-2xl text-[#1a2b3c] font-bold uppercase tracking-tight mb-4 md:mb-6">
                                    ASSURED RENTAL ON FULLY-FURNISHED STUDIO APARTMENT
                                </h4>
                                <ul className="space-y-3 md:space-y-4">
                                    {[
                                        "Assured Rental 20000 Rs. Per Month.",
                                        "3 Year Rent Agreement Between Builder & Buyer.",
                                        "2 Nights Complimentary Stay.",
                                        "No Maintenance Charges During Rental Period."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C] mt-2 shrink-0" />
                                            <span className="text-sm md:text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
