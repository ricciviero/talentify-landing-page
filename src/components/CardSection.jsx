import { DefaultCard } from "./DeafultCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";  // Importa l'Observer

export const CardSection = () => {
    // Variabili per l'animazione di fade-in
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },  // Inizia invisibile e un po' più in basso
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }  // Viene mostrato con un'animazione di dissolvenza e movimento
    };

    // Usa l'Observer per rilevare quando la sezione delle card entra nel viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // Attiva l'animazione solo una volta
        threshold: 0.2, // Attiva quando almeno il 20% della sezione è visibile
    });

    return (
        <>
            <motion.section
                className="w-full min-h-[400px] py-16 pl-8 pr-8"
                variants={fadeIn}  // Aggiungiamo l'animazione
                initial="hidden"  // Impostiamo lo stato iniziale come nascosto
                animate={inView ? "visible" : "hidden"} // L'animazione avviene solo quando la sezione è visibile
                ref={ref} // Riferimento per l'Observer
            >
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-white text-center">
                            Immagina una community di{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                                developer
                            </span>{" "}
                            pronta a connettersi con le migliori aziende.
                        </h2>
                        <p className="text-white/80 text-lg max-w-3xl mx-auto">
                            Talentify è molto più di un gruppo Whatsapp: è un ecosistema pensato per valorizzare le tue competenze e aprirti nuove opportunità.
                            Immagina di far parte di una community dove il tuo talento è il protagonista, un luogo in cui puoi connetterti con aziende innovative, collaborare con professionisti del tuo settore e accedere a risorse che ti permettono di crescere e migliorare ogni giorno.
                        </p>
                    </div>
                </div>

                {/* Card Animata */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                    variants={fadeIn}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <DefaultCard
                        emoticon="🚀"
                        label="Aumenta i tuoi clienti"
                        text="Connettiti con le aziende che cercano un talento come te."
                    />

                    <DefaultCard
                        emoticon="🤝"
                        label="Migliora il tuo network"
                        text="Connettiti con i professionisti del settore e costruisci relazioni durature."
                    />

                    <DefaultCard
                        emoticon="📈"
                        label="Cresci"
                        text="Accedi a risorse per migliorare le tue competenze."
                        className="min-h-[250px]"
                    />
                </motion.div>
            </motion.section>
        </>
    );
};