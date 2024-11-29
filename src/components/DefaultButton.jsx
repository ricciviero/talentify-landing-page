/* eslint-disable react/prop-types */
import { Phone } from 'lucide-react';

export const DefaultButton = ({ label, onClick }) => {
    return (
        <button
            className="
        inline-flex items-center justify-center
        px-4 py-2 text-base font-medium
        text-white bg-talentify rounded-xl
        focus:outline-none focus:ring-2
        focus:ring-offset-2 focus:ring-blue-600
        transition-colors duration-200 ease-in-out
        sm:text-base sm:px-4 sm:py-2
        text-sm px-3 py-1.5
      "
            onClick={onClick}
        >
            <span className="sm:inline hidden">{label}</span>
            <Phone className="sm:hidden inline w-5 h-5" />
        </button>
    );
};


