"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DevConsole() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [breakpoint, setBreakpoint] = useState("xs");

    useEffect(() => {
        if (process.env.NODE_ENV === "production") return;

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setDimensions({ width, height });

            if (width >= 1536) setBreakpoint("2xl");
            else if (width >= 1280) setBreakpoint("xl");
            else if (width >= 1024) setBreakpoint("lg");
            else if (width >= 768) setBreakpoint("md");
            else if (width >= 640) setBreakpoint("sm");
            else setBreakpoint("xs");
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (process.env.NODE_ENV === "production") return null;

    return (
        <div className="fixed bottom-4 left-4 z-[9999] font-mono text-xs">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-black/80 text-white px-3 py-1 rounded-full border border-white/20 shadow-lg hover:bg-black transition-colors backdrop-blur-md"
            >
                {isOpen ? "Close Dev" : "Dev"}
            </button>

            {isOpen && (
                <div className="absolute bottom-10 left-0 bg-black/90 text-green-400 p-4 rounded-lg border border-white/10 shadow-2xl w-64 backdrop-blur-xl">
                    <div className="space-y-2">
                        <div className="flex justify-between border-b border-white/10 pb-1">
                            <span className="text-gray-400">Breakpoint</span>
                            <span className="font-bold text-yellow-400">{breakpoint}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-1">
                            <span className="text-gray-400">Dimensions</span>
                            <span>{dimensions.width} x {dimensions.height}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-1">
                            <span className="text-gray-400">Route</span>
                            <span className="truncate max-w-[120px]" title={pathname}>{pathname}</span>
                        </div>
                        <div className="pt-1">
                            <div className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">Grid Overlay</div>
                            <div className="flex gap-1">
                                <div className="h-1 w-full bg-red-500/50"></div>
                                <div className="h-1 w-full bg-green-500/50"></div>
                                <div className="h-1 w-full bg-blue-500/50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
