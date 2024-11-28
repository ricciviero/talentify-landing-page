import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { avatars } from "../../back-end/avatars";

export const AvatarsSection = () => {
    return (
        <section className="bg-low-dark text-white py-16 px-6 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-20" />
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center relative z-10">
                {/* Text div on the left */}
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

                {/* Avatar grid on the right */}
                <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-6 gap-x-1">
                    {avatars.map((avatar) => (
                        <motion.div
                            key={avatar.id}
                            className="flex justify-center relative"
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 10,
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-lg opacity-75" />
                            <img
                                src={avatar.img}
                                className="w-24 h-24 relative z-10"
                                alt={`Avatar ${avatar.id}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

