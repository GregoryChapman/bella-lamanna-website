"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CREATOR } from "@/config/creator";

export function TikTokSection() {
    useEffect(() => {
        // Load TikTok embed script
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="tiktok" className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        On TikTok
                    </h2>
                    <p className="text-lg text-gray-600">
                        Catch up with my latest videos
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {CREATOR.tiktokIds.map((id, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="w-full max-w-[325px] flex justify-center"
                        >
                            <blockquote
                                className="tiktok-embed"
                                cite={`https://www.tiktok.com/@${CREATOR.handle.replace('@', '')}/video/${id}`}
                                data-video-id={id}
                                style={{ maxWidth: "605px", minWidth: "325px" }}
                            >
                                <section>
                                    <a
                                        target="_blank"
                                        href={`https://www.tiktok.com/@${CREATOR.handle.replace('@', '')}`}
                                    >
                                        {CREATOR.handle}
                                    </a>
                                </section>
                            </blockquote>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
