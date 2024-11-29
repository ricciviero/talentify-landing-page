import { useInView } from 'react-intersection-observer'; // Importa l'Observer
import { motion } from 'framer-motion';

export const DataSection = () => {
    // Variabili per l'animazione di fade-in
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },  // Inizia invisibile e un po' più in basso
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }  // Viene mostrato con un'animazione di dissolvenza e movimento
    };

    // Usa l'Observer per rilevare quando la sezione dei dati entra nel viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // Attiva l'animazione solo una volta
        threshold: 0.2, // Attiva quando almeno il 20% della sezione è visibile
    });

    return (
        <motion.section
            className="bg-low-dark text-white py-16 px-4 rounded-3xl"
            variants={fadeIn}  // Aggiungiamo l'animazione
            initial="hidden"  // Impostiamo lo stato iniziale come nascosto
            animate={inView ? "visible" : "hidden"} // L'animazione avviene solo quando la sezione è visibile
            ref={ref} // Riferimento per l'Observer
        >
            <div className="max-w-6xl mx-auto">
                <p className="text-3xl md:text-4xl font-bold leading-snug mb-12">
                    La dura vita del freelance spiegata in numeri.
                </p>

                {/* Statistiche */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Stat 1 */}
                    <div className="flex items-center">
                        <span className="text-6xl font-bold mr-4">32%</span>
                        <p className="text-gray-400">
                            non trova facilmente nuovi clienti
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex items-center">
                        <span className="text-6xl font-bold mr-4">25%</span>
                        <p className="text-gray-400">
                            non riesce a trasmettere il proprio valore.
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex items-center">
                        <span className="text-6xl font-bold mr-4">43%</span>
                        <p className="text-gray-400">
                            non è soddisfatto del proprio network.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};