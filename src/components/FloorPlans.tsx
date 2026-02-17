import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FLOOR_PLANS } from "@/constants";

export default function FloorPlans() {
    return (
        <Section id="floor-plans" className="bg-[#f8fafc] relative overflow-hidden py-24 md:py-32">
            {/* Minimalist Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(#1a2b3c 1px, transparent 1px), linear-gradient(90deg, #1a2b3c 1px, transparent 1px)", backgroundSize: "40px 40px" }}
            />

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[2px] w-8 bg-[#EA580C]" />
                        <h4 className="text-[#EA580C] tracking-[0.3em] uppercase text-[10px] font-extrabold">Price List</h4>
                        <div className="h-[2px] w-8 bg-[#EA580C]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#1a2b3c] mb-8 tracking-tight">
                        <span className="italic font-normal">Floor Plans</span>
                    </h2>
                </div>

                <div className="overflow-x-auto shadow-2xl">
                    <table className="w-full text-left border-collapse bg-white">
                        <thead>
                            <tr className="bg-[#E2F2FF] text-[#1a2b3c] font-bold uppercase text-[10px] md:text-xs tracking-widest">
                                <th className="px-6 py-5 border-b border-neutral-100">Type</th>
                                <th className="px-6 py-5 border-b border-neutral-100">Area</th>
                                <th className="px-6 py-5 border-b border-neutral-100">Floor Plan</th>
                                <th className="px-6 py-5 border-b border-neutral-100">Price</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#1a2b3c]/80 text-xs md:text-sm font-medium">
                            {FLOOR_PLANS.map((plan, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors group"
                                >
                                    <td className="px-6 py-5 font-bold text-[#1a2b3c] group-hover:text-[#EA580C] transition-colors">
                                        {plan.name}
                                    </td>
                                    <td className="px-6 py-5">
                                        {plan.size}
                                    </td>
                                    <td className="px-6 py-5">
                                        <Link
                                            href={plan.image || "#"}
                                            target="_blank"
                                            className="text-[#1a2b3c] font-bold underline decoration-[#EA580C] underline-offset-4 hover:text-[#EA580C] transition-colors"
                                        >
                                            Click to view
                                        </Link>
                                    </td>
                                    <td className="px-6 py-5 text-[#1a2b3c] font-bold">
                                        {plan.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 text-center text-[#1a2b3c]/40 text-[9px] uppercase tracking-[0.3em] font-extrabold">
                    * Prices are subject to change without prior notice. Taxes extra as applicable.
                </div>
            </Container>
        </Section>
    );
}
