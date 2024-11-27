import { avatars } from "../../back-end/avatars";
import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";

export const AvatarsSection = () => {
    return (
        <>
            <section className="bg-low-dark text-white py-16 px-6 rounded-2xl">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                    {/* Div del testo a sinistra */}
                    <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Unisciti agli altri <br />professionisti in Talentify
                        </h2>
                        <p className="text-lg text-gray-300">
                            Connettiti con esperti del tuo settore e lasciati ispirare da chi, come te, punta a innovare e crescere ogni giorno.
                        </p>

                        <div className="mt-8 flex justify-center md:justify-start w-full">
                            <WhatsAppButton />
                        </div>

                    </div>

                    {/* Griglia degli avatar a destra */}
                    <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-6 gap-x-1">
                        {avatars.map((avatar) => (
                            <motion.div
                                key={avatar.id}
                                className="flex justify-center"
                                whileHover={{
                                    scale: 1.1, // Ingrandisce leggermente l'avatar
                                    rotate: 5, // Aggiunge una piccola rotazione
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 10,
                                }}
                            >
                                <img
                                    src={avatar.img}
                                    className="w-24 h-24"
                                    alt={`Avatar ${avatar.id}`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};