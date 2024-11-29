import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

export const DiscordButton = () => {
    return (
        <motion.button
            className="
                inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white 
                bg-[#5965F2] rounded-xl hover:bg-[#7076C5] 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 
                transition-colors duration-200 ease-in-out shadow-md
                "
            onClick={() => {
                window.open(
                    "https://discord.gg/EYT8PMcYGU",
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
            <FaDiscord className="w-5 h-5 mr-2" />
            <span>Unisciti alla community</span>
        </motion.button>
    );
};