import { Link } from "react-router-dom";
import RicTag from "./RicTag";

export const Footer = () => {
    return (
        <footer className="text-white py-8 px-6 mt-32">
            <div className="max-w-6xl mx-auto text-center">
                {/* Logo e Descrizione */}
                <div className="mb-6 flex items-center justify-center">
                    <img
                        src="./icon.png"
                        alt="Talentify Logo"
                        className="w-8 h-8 mr-2"
                    />
                    <h3 className="text-2xl font-bold">Talentify</h3>
                </div>
                <p className="text-gray-400 text-sm">
                    Connetti i migliori talenti con le aziende del futuro. Scopri nuove opportunità per crescere e innovare.
                </p>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-6 pt-4 text-gray-500 text-sm">
                    © {new Date().getFullYear()} Talentify. Tutti i diritti riservati.{" "}
                    <Link to="/privacy" className="text-blue-500 underline">
                        Privacy Policy
                    </Link>

                    <div className="flex justify-center">
                        <RicTag />
                    </div>

                </div>
            </div>
        </footer>
    );
};