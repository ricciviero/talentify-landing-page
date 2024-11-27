import { motion, useScroll, useTransform } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { Iphone } from "./Iphone";

export const Hero = () => {

    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 600], [1, 0.5]);
    return (
        <div className="mt-12 min-h-screen">
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    La tua prossima opportunità di lavoro è su
                    <span className="text-green-500"> Whatsapp</span>
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-gray-300">
                    Scopri nuove opportunità di lavoro, costruisci il tuo profilo
                    professionale e candidati ai progetti più innovativi, a portata di chat.
                </p>

                <WhatsAppButton />

                <motion.div
                    className="mx-auto"
                    style={{ scale }}
                >
                    <Iphone />
                </motion.div>


            </div>
        </div>
    );
};