import { DefaultButton } from "./DefaultButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";  // Importa l'Observer

export const Navbar = () => {
    // Variabili per l'animazione di fade-in
    const fadeIn = {
        hidden: { opacity: 0, y: -50 },  // Inizia invisibile e un po' più in alto
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }  // Viene mostrato con un'animazione di dissolvenza e movimento
    };

    // Usa l'Observer per rilevare quando la navbar entra nel viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // Attiva l'animazione solo una volta
        threshold: 0.2, // Attiva quando almeno il 20% della sezione è visibile
    });

    return (
        <motion.nav
            ref={ref}  // Riferimento per l'Observer
            variants={fadeIn}  // Aggiungiamo l'animazione
            initial="hidden"  // Impostiamo lo stato iniziale come nascosto
            animate={inView ? "visible" : "hidden"} // L'animazione avviene solo quando la navbar è visibile
        >
            <div className="bg-dark flex justify-between items-center px-4 mx-auto max-w-screen-xl">

                <div className="items-center flex">
                    <Link to="/">
                        <img
                            src="../icon.png"
                            alt="Talentify"
                            className="w-10 h-10 mr-2"
                        />
                    </Link>
                    <Link to="/">
                        <h1 className="text-2xl font-bold"> Talentify</h1>
                    </Link>
                </div>

                <div className="items-end flex-row sm:ml-6"> {/* Aggiungi margine sinistro solo su mobile */}
                    <DefaultButton
                        label="Prenota una call"
                        onClick={() => {
                            window.open("https://cal.com/ricciviero/30min", "_blank", "noopener,noreferrer");
                        }}
                    />
                </div>

            </div>
        </motion.nav>
    );
};