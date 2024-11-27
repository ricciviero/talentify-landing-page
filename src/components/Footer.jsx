import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="text-white py-8 px-6 mt-32">
            <div className="max-w-6xl mx-auto text-center">
                {/* Logo e Descrizione */}
                <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">Talentify</h3>
                    <p className="text-gray-400 text-sm">
                        Connetti i migliori talenti con le aziende del futuro. Scopri nuove opportunità per crescere e innovare.
                    </p>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-6 pt-4 text-gray-500 text-sm">
                    © {new Date().getFullYear()} Talentify. Tutti i diritti riservati. <Link to="/privacy" className="text-blue-500 underline">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};