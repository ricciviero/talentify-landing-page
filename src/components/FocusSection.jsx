import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Importa l'Observer

export const FocusSection = () => {
    // Variabili per l'animazione di fade-in
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },  // Inizia invisibile e un po' più in basso
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }  // Viene mostrato con un'animazione di dissolvenza e movimento
    };

    // Usa l'Observer per rilevare quando la sezione Focus entra nel viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // Attiva l'animazione solo una volta
        threshold: 0.2, // Attiva quando almeno il 20% della sezione è visibile
    });

    return (
        <motion.section
            className="text-white py-16 px-6 mt-8"
            variants={fadeIn}  // Aggiungiamo l'animazione
            initial="hidden"  // Impostiamo lo stato iniziale come nascosto
            animate={inView ? "visible" : "hidden"} // L'animazione avviene solo quando la sezione è visibile
            ref={ref} // Riferimento per l'Observer
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Titolo principale */}
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    Cosa non dovrai più fare se usi Talentifier?
                </h2>

                {/* Sottotitolo */}
                <p className="text-xl md:text-2xl mb-4">
                    Dimentica tutto ciò che ti fa perdere tempo e concentrati solo sulle task di valore.
                    Candidati alle offerte di lavoro, a progetti da freelance, connettiti con professionisti del settore e molto altro.
                </p>
            </div>
        </motion.section>
    );
};