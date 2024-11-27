import { motion, useScroll, useTransform } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { Iphone } from "./Iphone";
import { useEffect, useState } from "react";

export const Hero = () => {
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = useState(false);

    // Controlla se l'utente è su un dispositivo mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Consideriamo "mobile" fino a 768px
        };
        handleResize(); // Verifica al caricamento della pagina
        window.addEventListener("resize", handleResize); // Aggiorna al ridimensionamento

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Trasformazioni condizionate per dispositivi mobili
    const scale = useTransform(
        scrollY,
        [0, 600],
        isMobile ? [3, 0.8] : [1, 0.5] // Da molto grande a piccolo per mobile
    );

    const translateY = useTransform(
        scrollY,
        [0, 600],
        isMobile ? [300, 0] : [0, 0] // Sposta verso il basso in partenza per mobile
    );

    return (
        <div className="mt-12 min-h-screen">
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    La tua prossima opportunità di lavoro è su
                    <span className="text-green-500"> Whatsapp</span>
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-gray-300">
                    Se sei un
                    <motion.span
                        className="inline-block px-3 py-1 mx-1 bg-gray-200 text-black font-semibold rounded-xl shadow-md"
                        animate={{
                            scale: [1, 1.1, 1], // Ciclo tra 1 e 1.1
                        }}
                        transition={{
                            duration: 2, // Durata del ciclo completo (in secondi)
                            repeat: Infinity, // Ripete all'infinito
                            ease: "easeInOut", // Animazione fluida
                        }}
                    >
                        Developer
                    </motion.span>
                    e vuoi scoprire nuove opportunità di lavoro, connetterti con altri professionisti
                    e candidarti ai progetti più innovativi, ora hai tutto a portata di chat.
                </p>

                <WhatsAppButton />

                <motion.div
                    className="mx-auto"
                    style={{
                        scale,
                        translateY,
                    }}
                >
                    <Iphone />
                </motion.div>
            </div>
        </div>
    );
};