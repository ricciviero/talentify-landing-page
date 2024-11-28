import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const WhatsAppButton = () => {
    return (
        <motion.button
            className="
                inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-green-500 rounded-xl hover:bg-green-600
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200 ease-in-out shadow-md
                "
            onClick={() => {
                window.open(
                    "https://chat.whatsapp.com/HjJl3JpB7OS0lEFOBjX8A0",
                    "_blank",
                    "noopener,noreferrer"
                );
            }}
            animate={{
                scale: [1, 1.1, 1], // Effetto pulsazione
            }}
            transition={{
                duration: 2, // Durata del ciclo completo (in secondi)
                repeat: Infinity, // Ripeti all'infinito
                ease: "easeInOut", // Animazione fluida
            }}
        >
            <FaWhatsapp className="w-5 h-5 mr-2" />
            <span>Unisciti alla community</span>
        </motion.button>
    );
};