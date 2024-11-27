/* eslint-disable react/prop-types */

export const DefaultButton = ({ label, onClick }) => {
    return (
        <button
            className="
               inline-flex items-center justify-center px-4 py-2 text-base font-medium
               text-white bg-talentify rounded-xlfocus:outline-none focus:ring-2 rounded-lg
               focus:ring-offset-2 focus:ring-blue-600 transition-colors duration-200 ease-in-out"
            onClick={onClick}


        >
            <span>
                {label}
            </span>

        </button>
    );
};